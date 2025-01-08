<style>
.comment{
    color:#aaa;
}
</style>

# Frontend Documentation - Overview

## Summary
The frontend for Anglers Edge is built with **Vite** and **React**. It provides a responsive user interface for users to explore fishing species, locations, and tips.

---

## Key Technologies
- **npm**: JavaScript package manager (^10.9.0)
- **NodeJS**: JavaScript runtime (dev server) (^20.0.0)
- **React**: JavaScript library for building user interfaces (^18.2.0)
- **Vite**: Fast development server and build tool (^6.0.0)
- **Axios**: HTTP client for API integration (^1.7.0)
- **Bootstrap**: For styling (^5.1.0)

---

## File Structure
frontend/  
├── public/          <span class="comment"># Static assets</span>  
├── src/  
│   ├── assets/  <span class="comment"># Media (Images, MP3, MP4)</span>  
│   ├── components/  <span class="comment"># Reusable React components</span>  
│   ├── pages/       <span class="comment"># Page-level components</span>  
│   ├── services/    <span class="comment"># API calls and helpers</span>  
│   ├── App.jsx      <span class="comment"># Main app entry point</span>  
│   └── index.js     <span class="comment"># Application entry point</span>  
├── index.html     <span class="comment"># Index file for displaying application</span>  
├── package.json     <span class="comment"># Project dependencies and scripts</span>  
└── vite.config.js   <span class="comment"># Vite configuration</span>  

