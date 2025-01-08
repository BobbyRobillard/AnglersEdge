# AE - FAQ

Due to the significant variations in software stacks, intended use cases, best practices, business logic, and organizational responsibilities across companies, I chose to limit certain implementations and features in this project. These aspects would need to be re-evaluated and adapted to align with the specific standards and requirements of any given organization.

TLDR: I'm not lazy, I'm efficient and don't want to code something that won't ever be used/seen.

---

### 1. Why doesn’t the app implement location-based trends or species-specific techniques?
- This app is designed as a demonstration project to showcase my skills in building a full-stack application, rather than as a production-ready app. Implementing the business logic for location-based trends and techniques would require significantly more time and domain-specific data, which is unnecessary for this proof-of-concept.

<b>If this were a production application, I would:  </b>
 - Implement data analysis tools to calculate location-based trends.  
 - Integrate with real-time APIs for environmental data like weather or water conditions.  
 - Use machine learning models or a rules-based system for species-specific suggestions.  

---

### 2. Why is there no front-end testing?
- This app does not include front-end testing because it is intended only as a demonstration of my abilities, not a production-ready product. That said, I have outlined in the documentation how I would implement front-end testing if needed.  

<b>For instance, I would:</b>  
 - Use Jest and React Testing Library for unit and integration testing of components.  
 - Mock API responses using tools like Mock Service Worker (MSW) to simulate real-world scenarios.  
 - Include snapshot tests for UI consistency and end-to-end tests using Cypress.  
 - This omission was a trade-off to save time and focus on showcasing other areas of the application.  

 ---

### 3. Why don’t the Dockerfiles support hot-reloading in development?
 - Hot-reloading for a development environment can be tricky to implement consistently across different systems due to differences in file system behaviors, especially with Docker's volume mounts on non-Linux systems. For this project, I opted to prioritize simplicity and reliability by providing instructions for setting up a custom development environment instead of over-complicating the Dockerfiles.  

<b>If this were a production app with active development, I would:</b>  
- Include Docker Compose configurations specifically tailored for development.  
- Use tools like docker-sync or configure file system polling to enable hot-reloading across platforms.

 ---

### 4. Why is the documentation's markdown code not fully optimized?
- The primary goal of this project was to demonstrate my ability to build a functional full-stack application, not to create perfectly optimized production code. While I formatted and styled the Markdown documentation to ensure it is easy to read, optimizing the code was not a priority.

<b>Given more time, I would:</b>   
 - Refactor repetitive code into reusable components.  
 - Follow stricter linting rules and enforce consistent formatting.  
 - Optimize API calls to reduce latency and improve performance.  

---

### 5. Is this app secure for real-world use?
- No, this app is not intended for production use.  

<b>It lacks:</b>  
- Proper user authentication and authorization.   
- Secure handling of environment variables.  
- Robust error handling for edge cases.  
- These omissions are intentional, as the focus of the project is to demonstrate functionality, not production-level security.