
// Add event listener to the button to fetch users when clicked
document.getElementById('moreUsersBtn').addEventListener('click', fetchUsers);

// Function to fetch 5 random users from the API
async function fetchUsers() {
    try {
        // Fetch 5 random users
        const response = await fetch('https://randomuser.me/api/?results=5');
        const data = await response.json();
        const users = data.results;

        // Display the profiles and update the table with the fetched users
        displayProfiles(users);
        updateTable(users);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

// Function to display user profiles in cards
function displayProfiles(users) {
    const profilesContainer = document.getElementById('profilesContainer');
    profilesContainer.innerHTML = ''; // Clear previous profiles

    // Create and append profile cards for each user
    users.forEach(user => {
        const profileCard = document.createElement('div');
        profileCard.className = 'profile-card';

        profileCard.innerHTML = `
            <img src="${user.picture.medium}" alt="${user.name.first} ${user.name.last}">
            <h2>${user.name.first} ${user.name.last}</h2>
            <p>${user.email}</p>
        `;

        profilesContainer.appendChild(profileCard);
    });
}

// Function to update the table with user names and emails
function updateTable(users) {
    const tbody = document.querySelector('#profilesTable tbody');
    tbody.innerHTML = ''; // Clear previous table data

    // Create and append table rows for each user
    users.forEach(user => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${user.name.first} ${user.name.last}</td>
            <td>${user.email}</td>
        `;

        tbody.appendChild(tr);
    });
}
