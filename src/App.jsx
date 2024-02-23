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
    element: <HomeLayout/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/landing',
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
])

export default function App() {
  return <RouterProvider router={router}/>;
}

