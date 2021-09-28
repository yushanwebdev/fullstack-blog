SSH into EC2 instance

```sh
ssh -i ~/.ssh/fullstack-blog.pem ec2-user@ec2-3-1-100-73.ap-southeast-1.compute.amazonaws.com
```

Forever

```sh
# Intallation
npm i forever
# Run the script with logging
npx forever start -l ~/fullstack-blog/logs/forever.log -o ~/fullstack-blog/logs/out.log -e ~/fullstack-blog/logs/err.log -a -c "npm start" .
# View
npx forever list
```

Reroute Port 80 request to Port 8000

```sh
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8000
```
