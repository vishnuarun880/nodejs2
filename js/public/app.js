// public/app.js
document.addEventListener('DOMContentLoaded', () => {
  // Fetch data from the frontend API endpoint
  fetch('/api/data')
    .then(response => response.json())
    .then(data => {
      console.log('Data from frontend API:', data);
      document.getElementById('app').innerHTML = `<p>${data.message}</p>`;
    })
    .catch(error => console.error('Error fetching data from frontend API:', error));

  // Fetch data from the admin API endpoint
  fetch('/admin/api/data')
    .then(response => response.json())
    .then(data => {
      console.log('Data from admin API:', data);
      document.getElementById('admin').innerHTML = `<p>${data.message}</p>`;
    })
    .catch(error => console.error('Error fetching data from admin API:', error));
});
