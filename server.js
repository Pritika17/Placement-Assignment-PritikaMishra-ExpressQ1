// Import required dependencies
const express = require('express');

// Create an instance of the Express application
const app = express();

// Endpoint: /post
app.get('/post', (req, res) => {
  // Assuming you have an array of 20 posts
  const posts = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' },
    { id: 3, title: 'Post 4' },
    { id: 3, title: 'Post 5' },
    { id: 3, title: 'Post 6' },
    { id: 3, title: 'Post 7' },
    { id: 3, title: 'Post 8' },
    { id: 3, title: 'Post 9' },
    { id: 3, title: 'Post 10' },
    { id: 3, title: 'Post 11' },
    { id: 3, title: 'Post 12' },
    { id: 3, title: 'Post 13' },
    { id: 3, title: 'Post 14' },
    { id: 3, title: 'Post 15' },
    { id: 3, title: 'Post 16' },
    { id: 3, title: 'Post 17' },
    { id: 3, title: 'Post 18' },
    { id: 3, title: 'Post 19' },
    { id: 20, title: 'Post 20' }
  ];

  res.json(posts);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
