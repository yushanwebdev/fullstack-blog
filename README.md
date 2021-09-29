# Fullstack Blog

## Motivation

I always had an aspiration to develop an application from UI to hosting using the latest technologies. As a big fan of JavaScript, I discover that it is possible with JavaScript.

## Tasks

### Frontend Devlopment

- Develop necessary components UI & its functionalities.
- Use React Router to handle routing.
- Use React Hooks & Functional Components.

### Backend Development

- Setup **Babel** to use the latest JavaScript features.
- Setup **Nodemon** to monitor for any changes & restart the server.
- Setup **Express** as the backend application framework for **Node.js**.
- Setup the DB in a cluster that exists in **MongoDB Atlas**.
- Connect the application directly to that cluster using **MongoDB’s native drivers**.
- Setup **dotenv-flow** to add DB credentials.
- Develop the Express Server to run both Frontend & Backend.
- Use **Postman** to test the API requests.

### Hosting

- Create the **AWS EC2** instance.
- Use **SSH protocol** to connect with the EC2 instance.
- Setup **Forever** package to ensure server script runs forever.
- All the requests received to Port 80 reroute to Port 8000.

## Features

- View Blog Article Details. (Title, Description, Vote Count, Comments)
- Upvote an article
- Comment about an article

## Install Dependencies

### _Frontend_

### `yarn install`

### _Backend_

### `npm install`

## Running

### _Frontend_

### `yarn build`

### _Backend_

### `npm start`

### _SSH into EC2 instance_

```sh
ssh -i ~/.ssh/fullstack-blog.pem ec2-user@ec2-3-1-100-73.ap-southeast-1.compute.amazonaws.com
```

### _Forever_ https://github.com/foreversd/forever

```sh
# Intallation
npm i forever
# Run the script with logging
npx forever start -l ~/fullstack-blog/logs/forever.log -o ~/fullstack-blog/logs/out.log -e ~/fullstack-blog/logs/err.log -a -c "npm start" .
# View
npx forever list
```

### _Reroute Port 80 requests to Port 8000_

```sh
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8000
```

## Credits

- This project develops as a follow along exercise with Shaun Wassell in his [React: Creating and Hosting a Full-Stack Site](https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site) Course.
- The frontend of the application was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Very simple & easy to understand documentation about [MongoDB Atlas](https://docs.atlas.mongodb.com/getting-started/).
