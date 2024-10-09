// index.js

const express = require('express');
const path = require('path');
const fs = require('fs'); // To read the HTML file
const app = express();
const port = 3000;

app.get('/tokens/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tokens.html'));
});

// Serve index.html dynamically for routes with UUID
app.get('/threads/:uuid', (req, res) => {
  const uuid = req.params.uuid; // Get UUID from URL

  // Read the index.html file
  const filePath = path.join(__dirname, 'public', 'index.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error loading the HTML file.');
    }

    // Replace the placeholder WebSocket URL in the HTML file with the UUID
    const modifiedData = data.replaceAll(
      'PLACEHOLDER', 
      `${uuid}`
    );

    // Send the modified HTML to the client
    res.send(modifiedData);
  });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
