const express = require('express'); // eslint-disable-line
const path = require('path'); //eslint-disable-line
const {fetchMembers, sendContactForm} = require("../utils/networkJS"); // eslint-disable-line

const apiKey = process.env.API_KEY || process.argv[2];
const PORT = process.env.PORT || 3042;
const app = express();

// cache members array to minimize hubspot api calls; update every 10 minutes
let membersCache;
// eslint-disable-next-line
fetchMembers(apiKey)
  // eslint-disable-next-line
  .then(members => membersCache = members)
  .catch(error => console.log(error))
setInterval(() => {
  // eslint-disable-next-line
  fetchMembers(apiKey)
    // eslint-disable-next-line
    .then(members => membersCache = members)
    .catch(error => console.log(error))
}, 600000);

// path to fetch dOrg active builder data
app.get("/api/members", (request, response) => {
  response.json(JSON.stringify(membersCache));
});

// send react app for all other get requests
app.use(express.static(path.resolve(__dirname, '../../build')));
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../../build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});