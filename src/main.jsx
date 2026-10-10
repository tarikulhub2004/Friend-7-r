import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import MainLayout from './layout/MainLayout'
import HomeP from './components/HomeP/HomeP'
import BookDetails from './components/BookDetails/BookDetails'
import Timeline from './components/Timeline/Timeline'
import Stats from './components/Stats/Stats'
import BookProvider from './BookContext/BookContext'
import { ToastContainer } from 'react-toastify'
import ErrorPage from './components/ErrorPage/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomeP></HomeP>
      },
      {
        path: '/bookDetails/:id',
        loader: () => fetch("/users.json"),
        Component: BookDetails,
      },
      {
        path: '/timeline',
        Component: Timeline,
      },
      {
        path: '/stats',
        Component: Stats,
      }
    ]
  },
  {
    path:'*',
    element: <ErrorPage></ErrorPage>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router}></RouterProvider>
    </BookProvider>
     <ToastContainer />
  </StrictMode>,
)
