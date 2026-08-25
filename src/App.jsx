import './App.css'
import LoginPage from './components/Login'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './components/dashboard';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Support from './components/Support';
import Namma_uru from './components/Namma_uru';
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "/dashboard",
    element: <Header />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "support", element: <Support /> },
      { path: "Namma_uru", element: <Namma_uru /> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
