import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NutritionPage from './pages/NutritionPage';
import MediCare from './pages/MediCare';
import AboutUs from './pages/AboutUs';
import GetInTouch from './pages/GetInTouch';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/nutrition",
    element:<NutritionPage/>
  },

  {
    path:"/mediCare",
    element:<MediCare/>
  },
  {
    path:"/about-us",
    element:<AboutUs/>
  },
  {
    path:"/get-in-touch",
    element:<GetInTouch/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
