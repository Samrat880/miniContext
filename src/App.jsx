// App.js
import { useState } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center  space-y-8">
        <h1 className="text-3xl font-bold text-center text-indigo-700">
          React with Samrat
        </h1>
        <p className="text-center text-gray-600 text-base">
          Learning is important — keep growing every day.
        </p>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
