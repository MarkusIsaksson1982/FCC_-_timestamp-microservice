/* I have utilized Perplexity as a resource for guidance and learning throughout this project. My approach reflects the growing trend of modern developers using AI tools to enhance their coding processes. However, all the final code presented here is my own work, based on own independently thought out prompts and without copying prompts or code from others other than snippets. I believe this practice aligns with the principles of academic honesty, as it emphasizes learning and using technology responsibly. */

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/:date?', (req, res) => {
  const dateString = req.params.date;
  let date;

  // Handle case where no date is provided (use current date)
  if (!dateString) {
    date = new Date();
  } 
  // Handle Unix timestamp in milliseconds
  else if (/^\d+$/.test(dateString)) {
    const timestamp = parseInt(dateString);
    date = new Date(timestamp); // JavaScript Date can handle milliseconds directly
  } 
  // Handle standard date string
  else {
    date = new Date(dateString);
  }

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return res.json({ error: "Invalid Date" });
  }

  // Return the response in the required format
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
