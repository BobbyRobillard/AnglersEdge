<style>
.comment{
    color:#aaa;
}
</style>

# Backend Documentation - Overview

## Summary
The backend for the Anglers Edge project is built using **Django** and **Django Rest Framework (DRF)**. It acts as an API provider for the frontend, serving endpoints for fish species, locations, and user data.

---

## Key Technologies
- Python (^3.1.0)
- Django (5.1.0)
- Django Rest Framework (3.15.2)
- SQLite (default database) (3.35.4)
- Docker (Latest Downloadable Release)
- GitHub CLI (2.30.0)

---

## File Structure
<span class="comment"># Folder containg the app and required files</span>  
backend  
├── db.sqlite3 <span class="comment"># SQLite database</span>  
├── manage.py <span class="comment"># Django management script</span>  
├── requirements.txt <span class="comment"># Python dependencies</span>  
├── secrets.txt <span class="comment"># Environment variables</span>  
├── settings.py         <span class="comment"># Django settings</span>  
├── urls.py             <span class="comment"># Project URL routing</span>  
└── wsgi.py             <span class="comment"># WSGI application entry point</span>
<br><br>
<span class="comment"># Main files and Application Management</span>  
├── ae/  
│   ├── settings.py     <span class="comment"># Manage the settings of the django application</span>
<br><br>
<span class="comment"># API for accessing fish and location data</span>  
├── api/  
│   ├── tests/          <span class="comment"># See "Testing" Tab for Details</span>    
│   ├── migrations/     <span class="comment"># Changes in the API models over time</span>  
│   ├── admin.py        <span class="comment"># Which models to display in admin interface</span>  
│   ├── models.py       <span class="comment"># Data structures to create in database</span>  
│   ├── serializers.py  <span class="comment"># Turns model details into a formatted API response</span>  
│   ├── urls.py         <span class="comment"># Manage local routing for the API app</span>  
│   ├── views.py        <span class="comment"># Handle tasks</span>
<br><br>
<span class="comment"># Default data and setup material for immediate app useage</span>  
├── config/  
│   ├── fixtures/       <span class="comment"># Folder Containing all the default database entries</span>   
│   &nbsp;&nbsp;&nbsp;├── *.json      <span class="comment"># Files containing pre-created models as json, to load into database at sta</span>  
