# Backend Documentation - Installation & setup

#### <span style="color:red">Important Note</span>
This DOES NOT setup the frontend, you MUST do this seperate, unless you're using the docker-compose function.  
This assumes you already have the repo cloned and are in that folder.

---

## Setup Instructions
1. <b>Enter working directory</b>
    * Change to backend - `cd backend`

2. <b>Setup venv for local enviornment</b>
    * Venv Setup: `python -m venv venv`
    * Activate Venv: `source ./venv/bin/activate`

3. <b>Install dependencies</b>
    * Install All Reqs. - `pip install -r requirements.txt`

4. <b>Setup the Database</b>
    * Make Migrations - `python manage.py makemigrations`
    * Force Migrations - `python manage.py migrate`

5. <b>Load data into database</b>
    * Executable to load-fixtures - `chmod +x ./load-fixtures`
    * Load in the fixtures - `./load-fixtures`

6. <b>Run the server</b>
    * Start Server: `python manage.py runserver 0.0.0.0:8000`

