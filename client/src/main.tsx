import './index.css';
import './global.css';
import ReactDOM from 'react-dom/client';
import { Home, Signup, Login, About, Pet } from './app/screens';
import { QueryClientProvider, QueryClient } from 'react-query';
import { AddPet } from './app/screens/pet/Add';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/addpet',
    element: <AddPet />
  },
  {
    path: '/pet/:id',
    element: <Pet />
  }
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
