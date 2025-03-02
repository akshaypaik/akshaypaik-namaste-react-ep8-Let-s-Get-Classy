// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppLayout from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/Header/About/About.jsx';
import ContactClass from './components/Header/Contact/Contact.jsx'; //this is class based component
import Error from './components/Error/Error.jsx';
import Body from './components/Body/Body.jsx';
import RestaurantMenu from './components/Body/RestaurantContainer/RestaurantMenu/RestaurantMenu.jsx';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <ContactClass />
      }, {
        path: '/restaurant/:resturantId',
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }

]);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <RouterProvider router={appRouter} />
  // </StrictMode>,
)


