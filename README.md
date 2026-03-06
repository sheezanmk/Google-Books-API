## Google Books Search Engine

A React application that allows users to search the Google Books database, browse paginated results, and view detailed information about each book

## Goal

The goal of this project was to build a book search interface using the Google Books API.

- Users should be able to:

- Search for books by keyword

- View results returned by the Google Books API

- Browse results in a responsive layout

- See additional details for each book

## Purpose of the project

This project focuses on practicing:

- Asynchronous API requests

- State management in React

- Conditional rendering

- Component-based architecture

- UI feedback for loading, errors and empty results

## Stack used

# React

- Used to build a component-driven UI and manage application state.

# JavaScript (ES6+)

- Handles application logic, async API calls, and state updates.

- Google Books API

- Provides access to a large database of book information.

# SCSS Modules

- Allows scoped styling per component and better maintainability.

# Vite

Fast development environment with hot reloading.

## Build Steps

- Clone the repository
- git clone https://github.com/your-username/google-books-search.git
- Navigate to project
- cd google-books-search
- Install dependencies
- npm install
- Run the development server
- npm run dev

- Open the application at:

- http://localhost:5173

# Design Goals

The application was designed to:

- Provide a clean and intuitive search experience

- Clearly communicate system state (loading, errors, empty results)

- Keep the UI responsive across screen sizes

- Maintain separation of concerns between UI and data fetching

## Implementation Approach

- App.jsx acts as the central controller managing search, pagination, and modal state.

- API calls are isolated in a dedicated helper file (googlebooksapi.js) to separate networking logic from UI.

- Pagination logic was extracted into helper utilities to avoid duplicating code.

- UI components were broken down into smaller reusable pieces:

App
├── SearchBar
├── BookGrid
│ └── BookCard
├── Pagination
└── BookDetails (Modal)

This structure improves readability and scalability.

## Features

- Book Search
  - Users can search for books using keywords.

  - Google Books API Integration

  - Data is fetched asynchronously from the Google Books API.

- Pagination
  - Results are paginated using the API parameters:
    - startIndex
    - maxResults

- Book Details Modal
  - Clicking a book card opens a modal showing:
    - Title

    - Author(s)

    - Publisher

    - Published date

    - Description

- Loading and Error States
  - The UI communicates when:
    - data is loading

    - no results were found

    - a request fails

- Responsive Layout

Books are displayed in a responsive flex layout that adapts to screen size.

## Known Issues

- Google Books API fuzzy matching

- The API often returns results even for unrelated queries because it performs fuzzy matching across multiple metadata fields.

- Result count accuracy
  - The totalItems field returned by the API can be an approximate value and may show large rounded numbers (e.g. 50,000).

- API Rate Limiting
  - Without an API key, Google Books can occasionally return a 429 Too Many Requests response.

## Future Goals

Given more time, the following improvements would be implemented:

- Debounced search to prevent rapid API calls

- URL query parameters for shareable searches

- Accessibility improvements for modal focus management

- Unit tests for pagination logic

- Skeleton loading placeholders

- Improved relevance filtering for search results
