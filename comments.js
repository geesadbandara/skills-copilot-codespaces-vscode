// Create web server
// Create a new express app
const express = require('express');
const app = express();
// Create a new comment
app.post('/comments', (req, res) => {
  res.send('Create a new comment');
});
// Read all comments
app.get('/comments', (req, res) => {
  res.send('Read all comments');
});
// Read a comment by id
app.get('/comments/:id', (req, res) => {
  res.send('Read a comment by id');
});
// Update a comment by id
app.put('/comments/:id', (req, res) => {
  res.send('Update a comment by id');
});
// Delete a comment by id
app.delete('/comments/:id', (req, res) => {
  res.send('Delete a comment by id');
});
// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});