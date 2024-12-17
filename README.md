# Unheard-Frontend

# Upload Feed App

## Overview
The Upload Feed App is designed to allow users to interact with feed items. Depending on the state of the app, the feed can be viewed in either read-only mode or editable mode. The application tracks various attributes of a feed item, such as whether it is being edited, the artist name, playlist date, external links, and content descriptions.

## Features
- **Read-only Mode:** View feed items without making changes.
- **Editable Mode:** Edit feed items if permissions are granted.
- **State Tracking:**
  - `isEditing` (boolean): Tracks if the current feed is being edited.
  - `artist` (string): Stores the name of the artist.
  - `playlist` (date): Indicates the date associated with the playlist.
  - `link` (string): Stores an external link related to the feed item.
  - `content` (string): Holds the textual content of the feed item.

## State Management
The application uses a state object to manage and track the current condition of the feed items. Below is the structure of the state:

```javascript
state = {
    isEditing: false,       // Boolean: Is the feed currently in edit mode?
    artist: "",             // String: Name of the artist.
    playlist: null,          // Date: Playlist's creation date.
    link: "",               // String: URL link related to the feed.
    content: ""             // String: Description or content of the feed.
};
```

## Key Functionalities
1. **Upload New Feed Items:**
   - Add new feed entries with the required details: artist name, playlist date, external link, and content.
2. **Edit Existing Feed Items:**
   - Switch to editable mode and make changes to feed details.
3. **View Feed Items:**
   - Access and browse feed items in read-only mode.

## How It Works
1. **Rendering Feeds:**
   - Feeds are dynamically rendered based on the current state.
2. **Edit Toggle:**
   - Users can toggle between `read-only` and `editable` states by updating the `isEditing` boolean.
3. **State Updates:**
   - Changes made in the editable mode are saved and reflected in the application state.

## How to Run
1. Clone the repository.
2. Install necessary dependencies (if applicable).
3. Start the development server using the following command:
   ```bash
   npm start
   ```
4. Open your browser and navigate to `http://localhost:3000` (or the specified development server URL).

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

## Technologies Used
- **Frontend:** React.js, HTML, CSS
- **State Management:** React's useState and Context API
- **Styling:** Custom CSS

## Future Enhancements
- Add drag-and-drop functionality for uploading feeds.
- Implement a backend API for storing and retrieving feed items.
- Introduce user authentication and authorization to manage access to editable modes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.




## Development Journey 
The development of this application began with setting up the project using create-react-app to establish the foundational structure, followed by organizing the directory into logical folders for components, pages, and assets. The routing was implemented using react-router-dom to enable seamless navigation between the Signup and Home pages. Components like the Navbar were designed with React and styled using dedicated CSS files for modularity and readability. The Signup page was created with form inputs styled for user-friendly interaction, and the Home page layout was initialized. Challenges, such as resolving navigation issues caused by improper use of <a> tags instead of React Router's <Link> components, were addressed to ensure smooth client-side transitions without page reloads. The project also involved debugging errors and configuring Tailwind CSS for enhanced styling flexibility, ensuring the app's functionality and responsiveness during the development process.


## Resolving Dark Mode Persistence Across Pages
While implementing a dark mode toggle feature on the navigation bar, I initially ran into an issue where the dark mode would only apply to certain pages. This occurred because the dark mode state was being managed locally within the Navbar component. As React re-renders components when navigating between pages, the state would reset, causing the dark mode toggle to lose its persistence. To resolve this issue, I moved the dark mode state (isDarkMode) to the App.jsx file to manage it globally. By passing the state and a toggleDarkMode function as props to the Navbar component, I ensured that dark mode applies consistently across all pages. Additionally, I used a useEffect hook to dynamically add or remove a dark class to the <body> element, enabling global styling changes. This approach successfully fixed the issue and provided a seamless dark mode experience throughout the application.

## Issue Faced
The navigation links in the Navbar component were not functioning as expected, as they used standard <a> tags which caused page reloads instead of routing between components. This was resolved by replacing <a> tags with React Router's <Link> components and setting up routing in App.jsx using BrowserRouter and Routes. This ensured smooth client-side navigation between the SignupPage and HomePage, adhering to React's best practices for single-page applications.



