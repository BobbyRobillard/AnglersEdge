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
- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast development server and build tool.
- **Axios**: HTTP client for API integration.
- **Bootstrap**: For styling.

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

