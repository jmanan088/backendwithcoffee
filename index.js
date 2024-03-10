require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT

const gitData = {
    "login": "jmanan088",
    "id": 96331704,
    "node_id": "U_kgDOBb3nuA",
    "avatar_url": "https://avatars.githubusercontent.com/u/96331704?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jmanan088",
    "html_url": "https://github.com/jmanan088",
    "followers_url": "https://api.github.com/users/jmanan088/followers",
    "following_url": "https://api.github.com/users/jmanan088/following{/other_user}",
    "gists_url": "https://api.github.com/users/jmanan088/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jmanan088/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jmanan088/subscriptions",
    "organizations_url": "https://api.github.com/users/jmanan088/orgs",
    "repos_url": "https://api.github.com/users/jmanan088/repos",
    "events_url": "https://api.github.com/users/jmanan088/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jmanan088/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Manan Jain",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Hi, myself Manan from India.\r\nI'm here to collaborate with people and learn something new on the way. Currently pursuing my Bachelors.",
    "twitter_username": null,
    "public_repos": 7,
    "public_gists": 0,
    "followers": 2,
    "following": 1,
    "created_at": "2021-12-18T08:02:05Z",
    "updated_at": "2024-03-10T12:02:52Z"
  }

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/insta', (req,res)=>{
    res.send('majs_088')
})

app.get('/yt', (req,res)=>{
    res.send('<h1>azuka</h1>')
})


app.get('/github', (req,res)=>{
    res.json(gitData)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})