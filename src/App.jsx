import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { 
  About,
  HomeLayout,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    children: [
      {
        index: true,
        element: <Landing/>
      },
      {
        path: '/error',
        element: <Error/>
      },
      {
        path: '/newsletter',
        element: <Newsletter/>
      },
      {
        path: '/cocktail',
        element: <Cocktail/>
      },
      {
        path: '/about',
        element: <About/>,
      }
    ]
  },
])

export default function App() {
  return <RouterProvider router={router}/>;
}

