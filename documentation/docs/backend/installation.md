# Backend Documentation - Installation & setup

#### <span style="color:red">Important Note</span>
This DOES NOT setup the frontend, you MUST do this seperate, unless you're using the docker-compose function.

## Setup Instructions
1. Clone the repository:
    * `Clone the Repository` - gh repo clone BobbyRobillard/AnglersEdge  
    (Note: You need the GitHub CLI tool installed)
    * `Enter Working Directory` - cd backend

2. Setup venv for local enviornment
    * `Venv Setup`: python -m venv venv
    * `Activate Venv`: source ./venv/bin/activate

3. Install dependencies:
    * `Install All Reqs.` - pip install -r requirements.txt

4. Setup the Database:
    * `Make Migrations` - python manage.py makemigrations
    * `Force Migrations` - python manage.py migrate

5. Load data into database:
    * `Executable to load-fixtures` - chmod +x ./load-fixtures
    * `Load in the fixtures` - ./load-fixtures

6. Run the server:
    * `Start Server`: python manage.py runserver 0.0.0.0:8000

