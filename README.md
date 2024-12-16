# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# installed the packages
 -npm create vite@latest my-project -- --template react
  -created a new project.

 -I installed the Tailwind CSS for styling and 
  set up the necessary configurations. 

 -I installed react-icons using npm (npm install react-icons) and used the icons from the package.

 -I installed the reduxjs toolkit using npm (npm install @reduxjs/toolkit) and set up the store for state management.

 -I installed the react-redux using npm (npm react-redux) and conneted the store with the app.

 -I installed the framer-motion package using npm (npm install framer-motion) and used it to add animations to the app.

 -I installed the react-router-dom package using npm(npm react-router-dom) and used it for routing.

# Created the NavBar

 -I created the navbar which includes an image, searchbar, home, services, astrologers, getapp. On clicking each we land on the respective page.

# Astrologer Page

 -A grid system was used for didplaying the cards of astrologers.

 -it was responsvie for both mobile and laptop views.

# Filtered Data page was added 

 -Upon searching for an astrologer's name, it will redirect to the filter data page with the results. if no data is found, it will display "No astrologers found".

# Redux installed

-I Built a store that holds the state.

-we can connect the store with the app using the provider wich is from react-redux.

-I created slices that contain actions and reducers.

-To get data from the store we can use the useSelector hook.
-Currently i am using sample data but we can fetch this data from an API provided by backend.


# Button Element
 -I created a reusable button component with props.

# Created the Responsive Menu

 -I created a responsive menu for mobile view with a hamburger menu and used framer-motion for animations.

 -I Added the onclick functionality for the routes. 

# How to install and run the project

 -clone the project from github with the provided link

 -git clone (provided link)

 -run the command npm install

 -run the comman npm run dev
 
 -we will the link to view the website locally with the name  ["http://localhost:"]