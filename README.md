Juspay Dashboard Assignment
hostedlink: https://juspay-dashboard-assignmnet-7pnmi5ati-samardips-projects.vercel.app

This project is a dashboard application that displays data using visual components like charts and tables, with additional features like dark mode and customization. This repository includes code that demonstrates how to create an interactive and responsive dashboard using modern frontend tools.

Interactive Charts: Display dynamic bar charts and other visual elements.
Dark Mode: Supports light and dark themes for improved user experience.
Data Visualization: Provides visual insights into data with customizable features.


Design Decisions

During the development of the dashboard, several design adjustments were made to ensure smooth functionality and better user experience:

Table Design Adjustments:
The initial table designs were altered slightly to incorporate additional lines and a more defined structure, using the @mui/x-data-grid library to enhance readability and alignment with the overall dashboard aesthetics.

Pie Chart Customization:
Due to the limitations in customizing the MUI Pie Chart component, the design was revised to maintain simplicity and ensure the chart was functional and visually appealing. A more standard pie chart was implemented to meet the design requirements.

Responsive Design:
The original design provided was not mobile-friendly. However, I have optimized the layout to be responsive up to tablet (iPad) screen sizes. The website can also be viewed effectively on mobile devices desktop mode (preferably tested in chrome browser desktop mode).

Challenges Faced

Some aspects of the dashboard's design posed challenges, particularly around the chart components:

Line and Bar Chart Design:
Creating the exact design for line and bar charts as per the provided guidelines was challenging. The MUI library required extensive customization to align with the desired design, but after some effort, the charts were closely matched to the original design, including accurate data representation and style adjustments.

Pie Chart Customization:
Customizing the pie chart proved to be more complex than anticipated, leading to a decision to simplify the design. The difficulty stemmed from the inherent limitations of MUI's charting components, which required additional effort to implement custom styling.

Improvements Made

To enhance the user experience and add more functionality to the dashboard, the following improvements were made:

Dropdown Animation:
Added smooth animations for dropdown menus, enhancing the interaction and feel of the application. This ensures that user interactions are more fluid and visually engaging.

Workable Routes and Page Navigation:
Implemented routing for page transitions, making the dashboard fully functional with different pages. This includes handling route changes and ensuring that users can navigate seamlessly between different parts of the app.

404 Page:
Added a custom "404 - No Data Found" page that is displayed when users attempt to access routes or pages that do not exist. This prevents broken experiences and provides users with clear feedback when navigation errors occur.


Installation
To get a local copy of the project up and running, follow these steps:

Clone the repository:
git clone https://github.com/Samardip/Juspay-Dashboard-Assignmnet.git

Navigate to the project directory:
cd Juspay-Dashboard-Assignmnet

Install dependencies: Ensure that you have Node.js installed on your machine. Then run the following command:
npm install


Run the project: After installing the dependencies, you can start the development server:
npm start

Open your browser and navigate to http://localhost:3000 to view the dashboard.

Usage
The dashboard allows users to:

View interactive bar charts that update dynamically based on data input.
Switch between light and dark modes for better visualization.
Customize chart appearance such as bar colors and text based on dark mode.

Dark Mode Styling
The app includes a toggle feature for switching between light and dark themes.
Background color, text color, and chart colors adapt to the selected theme.

BarChart Component
A key component of the dashboard, displaying data with customizable bars.
Dynamic updates based on the provided data set and theme selection.


Project Structure

├── public
│   └── index.html 
│   └── assests              # where all the images are stored
├── src
│   ├── components           # Contains all Reusable components
│   ├── common               # Contains all common similiar like components
│   ├── container            # Contains the layout of all the component
│   ├── useHooks             # files contains all the state and variables
│   ├── styles               # CSS files and Tailwind configurations
│   ├── App.js               # Main app component
│   ├── index.js             # Entry point for React
│   
├── package.json             # Project metadata and dependencies
└── README.md                # Documentation

Dependencies
This project uses the following dependencies:

React: A JavaScript library for building user interfaces.
Tailwind CSS: A utility-first CSS framework for styling.
@mui/x-charts: A composable charting library built on React for data visualization.
To view the full list of dependencies, refer to the package.json file.