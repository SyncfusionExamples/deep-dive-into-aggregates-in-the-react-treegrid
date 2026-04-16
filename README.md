# Deep Dive into Aggregates in the React TreeGrid

This repository is a focused sample application that demonstrates how to configure and use aggregate calculations with the React TreeGrid component from Syncfusion's component library. The example shows how to display built-in aggregate values (sum, average, count, min, max), how to add and render custom aggregate functions, and how to customize the footer area to present the aggregate results in a useful and user-friendly way.

Key highlights:
- Illustrated usage of TreeGrid column aggregates and footer templates.
- Example of custom aggregate function implementation and registration.

Documentation: https://ej2.syncfusion.com/react/documentation/treegrid/aggregate/
Online demo: https://ej2.syncfusion.com/react/demos/#/material/treegrid/aggregate-default

## Project prerequisites

Before running this project, ensure you have the following installed on your development machine:
- Node.js (LTS recommended)
- npm (bundled with modern Node.js releases)
- A modern code editor such as Visual Studio Code

## Installation and quick start

1. Clone this repository to your local machine.
2. Open the project folder in Visual Studio Code or your preferred editor.
3. Install dependencies by running:

```
npm install
```

4. Start the development server with:

```
npm start
```

The app will start in development mode and open in your default browser (usually at `http://localhost:3000`). Changes to source files will trigger a hot-reload so you can iterate quickly.

## Customization notes

- To add a new aggregate type, add a function that computes the value across the rows and register it with the grid's aggregate settings.
- Use footer templates to control the exact display markup and localization of aggregate values.

## Files of interest
- `src/App.tsx` — main application and TreeGrid setup.
- `src/datasource.js` — example dataset used for the demo.
