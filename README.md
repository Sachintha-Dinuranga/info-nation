# InfoNation 🌍

InfoNation is a React-based web application that allows users to explore information about countries around the world. Users can search for countries, filter by region or language, view detailed information about a country, and save their favorite countries. The app also includes user authentication for a personalized experience.

---

## Table of Contents

- [InfoNation 🌍](#infonation-)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [APIs Used](#apis-used)
  - [Challenges and Solutions](#challenges-and-solutions)
    - [1. **Handling API Errors**](#1-handling-api-errors)
    - [2. **State Management**](#2-state-management)
    - [3. **Authentication**](#3-authentication)
    - [4. **Performance Optimization**](#4-performance-optimization)
  - [Setup Instructions](#setup-instructions)
  - [Testing](#testing)

---

## Features

- User authentication (register, login, logout) using Firebase Authentication.
- Search for countries by name.
- Filter countries by region or language.
- View detailed information about a country, including:
  - Name, Capital, Region, Population, Flag, and Languages.
- Save favorite countries for quick access.
- Responsive design for mobile and desktop.

---

## APIs Used

1. **[REST Countries API](https://restcountries.com/)**:

   - Provides data about countries, including name, population, region, languages, and flags.
   - Endpoints used:
     - `/v3.1/all` - Fetch all countries.
     - `/v3.1/name/{name}` - Search countries by name.
     - `/v3.1/region/{region}` - Filter countries by region.
     - `/v3.1/lang/{language}` - Filter countries by language.
     - `/v3.1/alpha/{code}` - Fetch details of a specific country.

2. **[Firebase](https://firebase.google.com/)**:
   - Used for user authentication and Firestore database integration.

---

## Challenges and Solutions

### 1. **Handling API Errors**

- **Challenge**: The REST Countries API sometimes returned errors for invalid queries or empty results.
- **Solution**: Implemented error handling with `try-catch` blocks and displayed user-friendly error messages.

### 2. **State Management**

- **Challenge**: Managing multiple states for search, filters, and favorites.
- **Solution**: Used React's `useState` and `useContext` hooks to manage state effectively. Created a `FavoritesContext` for managing favorite countries.

### 3. **Authentication**

- **Challenge**: Integrating Firebase Authentication with React and ensuring secure token storage.
- **Solution**: Used `react-firebase-hooks` for authentication and stored tokens securely in `localStorage`.

### 4. **Performance Optimization**

- **Challenge**: Loading all countries at once caused performance issues.
- **Solution**: Implemented lazy loading for components and paginated the country list using a "See More" button.

---

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/af-2-Sachintha-Dinuranga.git
   cd af-2-Sachintha-Dinuranga/frontend

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Create a .env file in the frontend directory and add your Firebase configuration::
   ```bash
    VITE_FIREBASE_API_KEY=your-api-key
    VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
    VITE_FIREBASE_PROJECT_ID=your-project-id
    VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    VITE_FIREBASE_APP_ID=your-app-id
    VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
   ```
4. Start the development server:
   ```bash
    npm run dev
   ```

## Testing

```bash
    npm run test
```
