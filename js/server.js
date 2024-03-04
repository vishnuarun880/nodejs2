const express = require('express');
const app = express();
const frontendPort = process.env.FRONTEND_PORT || 3000;
const adminPort = process.env.ADMIN_PORT || 3001;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route for the frontend
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the frontend server
const frontendServer = app.listen(frontendPort, () => {
  console.log(`Frontend server is running on http://localhost:${frontendPort}`);
});

// Create a new Express app for the admin panel
const adminApp = express();

// Define a route for the admin panel
adminApp.get('/', (req, res) => {
  res.sendFile(__dirname + '/admin.html');
});

// Start the admin panel server
const adminServer = adminApp.listen(adminPort, () => {
  console.log(`Admin panel server is running on http://localhost:${adminPort}`);
});
