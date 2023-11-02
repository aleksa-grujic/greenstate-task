## Introduction

This is a test project for managing tasks, developed using the React library with Create-React-App and TypeScript.

## Project Setup

To set up the project, install the dependencies using `yarn`, and then run `yarn start` to launch the application on `localhost:3000`.

## Features

The project encompasses the following functionalities:

- User Login
- User Registration
- Task Creation
- Task Editing
- Task Deletion
- Pagination
- Task Filtering by Priority
- User Logout

## Project Structure

The main project structure consists of:

- `Index.tsx` alongside `index.css`
- `App.tsx` alongside `App.css`
- `AppRoutes.tsx` for handling UI routes based on user authentication status

The project is organized into the following directories:

- Api
- Assets
- Components
  - Atoms
  - Molecules
  - Organisms
- Constants
- Contexts
- Hooks
- Pages

The `Components` directory is further organized into `Atoms`, `Molecules`, and `Organisms`, each containing three files: `ComponentName.tsx`, `ComponentName.types.ts`, and `ComponentName.module.css`. These components are focused solely on the UI, devoid of any application logic.

The `Pages` directory assembles the entire layout and contains the logic, while the core business logic is encapsulated within the `Hooks` directory, orchestrating all operations around Authentication and Task management.

## Implementation

Initially, the focus was on establishing a complete Design System, ensuring each component mirrored its design specification. The subsequent step involved creating pages with mock data and the intended layout.

Following the layout phase, the API integration was performed to establish communication with the backend. Custom hooks were then developed to utilize these API calls for data manipulation and representation.

Finally, the data was integrated with the UI, and a thorough verification was carried out to ensure all functionalities operated as expected.
