# AE - Server Setup

<b>NOTE:</b> this assumes you have a clean ubuntu instance ready to go!

---

#### 1. Update the blank server
`sudo apt update && sudo apt upgrade -y`

#### 2. Install dependancies
`sudo apt install python3 python3-pip python3-venv nginx curl git -y`

#### 3. Change into working directory
`cd /var/www/`

#### 4. Clone the github repo
`git clone https://github.com/BobbyRobillard/AnglersEdge.git`

#### 5. Change into project folder
`cd AnglersEdge`

#### 6. Create and start a new virtual enviornment
- `python3 -m venv venv`
- `source venv/bin/activate`

#### 7. Upgrade pip and install python requirements
- `pip install --upgrade pip`
- `pip install -r requirements.txt`
- `pip install gunicorn` # Note, this is seperate from reqs as it's only needed in production


#### 8. Create Gunicorn service
`sudo nano /etc/systemd/system/gunicorn.service`

<b>Insert the follow text into new file</b>

[Unit]  
Description=gunicorn daemon for AnglersEdge  
After=network.target  
<br>
[Service]  
User=root  
Group=root  
WorkingDirectory=/var/www/AnglersEdge/backend  
ExecStart=/var/www/AnglersEdge/backend/venv/bin/gunicorn --workers 3 --bind 127.0.0.1:8000 ae.wsgi:application  
<br>
[Install]  
WantedBy=multi-user.target

#### 9. Reload daemon, start Gunicorn service
- `sudo systemctl daemon-reload`  
- `sudo systemctl start gunicorn`  
- `sudo systemctl enable gunicorn`  

- `sudo systemctl status gunicorn` (Confirm the new service is working as expected)


#### 10. Create the nginx site and .conf file
- `sudo nano /etc/nginx/sites-available/anglersedge` # Paste the code from "nginx.conf"
- `sudo ln -s /etc/nginx/sites-available/anglersedge /etc/nginx/sites-enabled/`
- `sudo rm /etc/nginx/sites-enabled/default` # Remove default site
- `sudo nginx -t` # Test syntax before restarting
- `sudo systemctl restart nginx`

#### 11. Setup firewall rules
- `sudo ufw allow 'Nginx Full'`
- `sudo ufw allow 80`
- `sudo ufw allow 22`
- `sudo ufw allow 8000`
- `sudo ufw enable`
- `sudo ufw status`

#### 12. Https Setup
- `sudo apt install certbot python3-certbot-nginx -y`
- `sudo certbot --nginx -d <your-domain>`