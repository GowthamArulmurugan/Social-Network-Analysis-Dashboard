# Social Network Analysis (SNA) Dashboard

This project is a Social Network Analysis (SNA) dashboard built using React and Power BI. It provides insights into social networks by embedding Power BI reports into a React application.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/sna-dashboard.git
   cd sna-dashboard
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the App

To start the development server, run:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

### Building the App

To build the app for production, run:
```bash
npm run build
```

This will create a `build` folder containing the production build of the app. The build is minified and the filenames include the hashes. Your app is ready to be deployed!

### Running Tests

To run tests in the interactive watch mode, run:
```bash
npm test
```

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Ejecting

If you need to customize the build tool and configuration choices, you can `eject` the app:
```bash
npm run eject
```

**Note: This is a one-way operation. Once you `eject`, you can't go back!**

### Deployment

For deployment instructions, refer to the [Create React App deployment documentation](https://facebook.github.io/create-react-app/docs/deployment).

## Code Structure

### `index.js`

This is the entry point of the React application. It renders the `App` component inside the root DOM node.

### `App.js`

This component contains the main structure of the application, including the Power BI embed configuration.

### `App.css`

This file contains the styles for the `App` component.

### `reportWebVitals.js`

This file is used to measure and log performance metrics of the app. For more information, visit the [CRA vitals documentation](https://bit.ly/CRA-vitals).

## Embedding Power BI

The application uses the `powerbi-client-react` library to embed Power BI reports. The `PowerBIEmbed` component is configured with the necessary parameters such as `type`, `id`, `embedUrl`, `accessToken`, and `tokenType`. Event handlers are also provided to log events such as report load, render, and errors.

## Available Scripts

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner in interactive watch mode.
- `npm run build`: Builds the app for production.
- `npm run eject`: Ejects the app for customization.

## Learn More

To learn more about React and Create React App, check out the following resources:

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Create React App](https://github.com/facebook/create-react-app)
- [Power BI Client React](https://github.com/microsoft/powerbi-client-react)

