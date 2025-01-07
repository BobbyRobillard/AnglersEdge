<style>
.comment{
    color:#aaa;
}
</style>


# Welcome to Angler's Edge Documentaion

This applications allows users to easily find information about a species of fish, as well as how to catch that species in a specific location of their choosing.


## Clone and Run the Application
1. Clone the GitHub Repo: `gh repo clone BobbyRobillard/AnglersEdge`
2. Run Docker Compose: `docker-compose up --build`
3. Access App in Browser: `localhost:5173`


---

## Development Stack
* `Frontend` - Vite-React, Typescript
* `Backend` - Django (5.1.0)
* `Server` - Nginx
* `Database` - SQLite

---

## Resources

* `Version Control` - [GitHub Repo](https://github.com)
* `Project Management` - [ClickUp Project](https://clickup.com)
* `Design Files` - [Figma Mockups](https://figma.com)

---

## Project layout

AnglersEdge/  
├── backend/ <span class="comment"># Folder containing the backend portion of the app</span>  
├── frontend/ <span class="comment"># Folder containing the frontend portion of the app</span>  
├── documentation/ <span class="comment"># Folder containing the documentation portion of the app</span>  
├── docker-compose.yml <span class="comment"># File to tell docker to build the app</span>  
├── README.md <span class="comment"># GitHub Repo Read-Me</span>

