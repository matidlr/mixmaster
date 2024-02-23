import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h2>home page</h2>
  },
  {
    path: '/about',
    element: <h2>about</h2>
  },
])

export default function App() {
  return <RouterProvider router={router}/>;
}

