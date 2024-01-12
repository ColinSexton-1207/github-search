import React from 'react';
import axios from 'axios';

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production') {
   githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
   githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}
else {
   githubClientId = process.env.GITHUB_CLIENT_ID;
   githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GitHubState = props => {
   
}

export default GitHubState;