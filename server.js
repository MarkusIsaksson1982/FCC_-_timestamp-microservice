/* I have utilized Perplexity as a resource for guidance and learning throughout this project. My approach reflects the growing trend of modern developers using AI tools to enhance their coding processes. However, all the final code presented here is my own work, based on own independently thought out prompts and without copying prompts or code from others other than snippets. I believe this practice aligns with the principles of academic honesty, as it emphasizes learning and using technology responsibly. */

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/:date?', (req, res) => {
  const dateString = req.params.date;
  let date;

  if (!dateString) {
    date = new Date();
  } 
  else if (/^\d+$/.test(dateString)) {
    const timestamp = parseInt(dateString);
    date = new Date(timestamp > 10000000000 ? timestamp : timestamp * 1000); // Handle seconds vs. milliseconds
  } 
  else {
    date = new Date(dateString);
  }

  if (isNaN(date.getTime())) {
    res.json({ error: "Invalid Date" });
  } else {
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
