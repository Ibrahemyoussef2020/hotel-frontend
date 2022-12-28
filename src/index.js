import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import './index.css';

import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import LayOut from './pages/layOut'
import Home from './pages/home';
import RoomD from './pages/roomsDetails';
import Rooms from './pages/rooms';
import RoomBook from './pages/roomsBook';
import ErrorPage from './pages/errorPage';
import HasSent from './pages/hasSent';


if(process.env.NODE_ENV ===  'production') disableReactDevTools()


const router = createBrowserRouter([
  {
    path:'/',
    element:<LayOut/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        index:true,
        element:<Home/>,
        errorElement:<ErrorPage/>,
      },
      {
        path:'rooms',
        element:<Rooms/>,
        errorElement:<ErrorPage/>,
      },
      {
        path:'/roomDetails',
        element:<RoomD/>,
        errorElement:<ErrorPage/>,
      },
      {
        path: 'roomBook',
        element:<RoomBook/>,
        errorElement:<ErrorPage/>,
      },
      {
        path: 'hasSent',
        element:<HasSent/>,
        errorElement:<ErrorPage/>,
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <StrictMode>
        <Provider store={Store}>
          <RouterProvider router={router} />
        </Provider>
      </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
