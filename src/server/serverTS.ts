import express from 'express';
import {fetchMembers} from "../utils/network";
import {Member} from "../constants/members";

const apiKey = process.env.API_KEY || process.argv[2];
const PORT = process.env.PORT || 3001;
const app = express();

// cache members array to minimize hubspot api calls; update every 10 minutes
let membersCache: Member[];
fetchMembers(apiKey)
  .then(members => membersCache = members)
  .catch(error => console.log(error))
setInterval(() => {
  fetchMembers(apiKey)
    .then(members => membersCache = members)
    .catch(error => console.log(error))
}, 600000);

app.get("/api/members", (request, response) => {
  response.json(JSON.stringify(membersCache));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});