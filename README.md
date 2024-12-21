# Unheard: Music Discovery App

![Unheard Logo](./public/assets/logo.png)

## Overview
Unheard is a dynamic web application designed to revolutionize the way users discover, explore, and manage music. Featuring artist search, playlist creation, and dark mode functionality, Unheard provides an engaging and intuitive platform for music enthusiasts.

## Features
### **Artist Search**
- Integrated with Spotify's API to fetch and display artist details, genres, and profile links.
- Dynamic search bar for real-time query handling.

### **Playlist Management**
- Create, edit, and manage playlists seamlessly.
- Intuitive UI designed for ease of use.

### **Dark Mode**
- Toggle dark mode for a personalized user experience.
- Persistent across all pages using global state management.

### **Responsive Design**
- Optimized for desktop and mobile devices.
- Ensures accessibility and usability across different screen sizes.

---

## Technologies Used
### **Frontend**
- React.js
- CSS (Custom Styling)
- React Router DOM

### **Backend**
- Node.js
- Express.js
- Axios (for Spotify API integration)

### **API Integration**
- Spotify Web API

---

## Key Functionalities
### **Artist Search**
- Users can search for their favorite artists.
- Information displayed includes artist name, genres, and Spotify profile link.
- Utilizes Axios for backend-to-API communication.

### **Playlist Management**
- Create and customize playlists.
- Edit playlists with ease.
- Future enhancement: drag-and-drop functionality for reordering tracks.

### **Dark Mode**
- Seamless toggle for light and dark themes.
- Ensures user preference is consistent across pages.

---

## How to Install and Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/unheard.git
   ```
2. Navigate to the frontend directory:
   ```bash
   cd unheard-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000`.

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd unheard-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm run start
   ```

---

## Folder Structure
```
.
├── public
│   ├── index.html       // Entry point HTML
│   └── assets/          // Static assets like images
├── src
│   ├── components/      // React components for the app
│   ├── App.js           // Main app logic
│   ├── state.js         // State management file
│   └── index.js         // ReactDOM rendering
└── README.md            // Documentation (you are here)
```

---

## Deployment
The application is deployed on Netlify and connected to a cloud-hosted backend.

### Deployed Links
- **Frontend:** [Unheard Music App](https://unheard.netlify.app)
- **Backend API:** Hosted on [Heroku](https://unheard-backend.herokuapp.com)

---

## Development Journey
### **Challenges Faced**
1. **API Token Refresh**
   - **Problem:** Managing expired Spotify API tokens.
   - **Solution:** Implemented a middleware to refresh tokens dynamically before each request.

2. **Dark Mode Persistence**
   - **Problem:** Dark mode reset when navigating between pages.
   - **Solution:** Moved the dark mode state to App.js for global management and used the `useEffect` hook for DOM updates.

### **Lessons Learned**
- Importance of global state management.
- Debugging API requests and handling errors gracefully.

---

## Future Enhancements
- **User Authentication:** Enable user accounts and personalized playlists.
- **Advanced Search Filters:** Search by genre, album, or track.
- **Drag-and-Drop Playlists:** Reorder tracks within playlists using drag-and-drop functionality.
- **Mobile App Version:** Expand to iOS and Android platforms.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---


## Development Journey

The development of the Unheard frontend was a progressive and iterative process, beginning with the creation of a foundational structure using create-react-app. Emphasis was placed on a clean, modular folder structure that could easily accommodate future scalability. Navigation between pages was implemented using react-router-dom, ensuring seamless transitions and an intuitive user experience. The user interface was crafted with a focus on modern aesthetics and responsiveness, using React components and custom CSS styling. A dark mode feature was integrated to provide users with a personalized experience, offering a consistent theme across the application.

Incorporating the artist search functionality involved integrating the Spotify API, which required establishing a reliable communication channel between the frontend and backend using Axios. Error handling mechanisms were implemented to ensure the application responded gracefully to potential API issues. Debugging and testing were critical phases, during which navigation and state management issues were resolved, and the application’s design was refined for compatibility across various screen sizes and browsers. Finally, the application was deployed to Netlify, making it accessible for users and enabling further testing.


## Challenges Faced

During development, several challenges arose that required innovative solutions. One of the most significant issues was handling Spotify API token expiry, which disrupted search functionality. To address this, a middleware was implemented on the backend to refresh tokens dynamically, while the frontend incorporated error-handling mechanisms to notify users of any disruptions. Another challenge was ensuring the persistence of dark mode across all pages. Initially, dark mode was managed locally within the Navbar component, which caused it to reset during navigation. The solution was to centralize the dark mode state within App.js and use React’s useEffect hook to update the DOM dynamically, ensuring a consistent user experience.

Responsive design presented another hurdle, as the layout initially appeared distorted on smaller screen sizes. This was resolved by refining CSS styles and leveraging media queries to create a fluid and adaptive design. Additionally, navigation issues were encountered due to the use of <a> tags instead of React Router’s <Link> components, which caused unnecessary page reloads. Switching to <Link> ensured smooth client-side navigation and adhered to best practices for single-page applications. Managing shared states, such as dark mode and user inputs, became increasingly complex as the application grew. This challenge was overcome by employing React hooks like useState and useContext for streamlined state management. Despite these challenges, each issue provided an opportunity to learn and enhance the overall functionality and user experience of the application.

## Contributors
- **Jarupong Deenit** - Developer and Designer
