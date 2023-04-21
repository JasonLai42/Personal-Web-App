import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './routes/partials/NavBar';
import Root from './routes/pages/Root';
import AboutMe from './routes/pages/AboutMe';
import Resume from './routes/pages/Resume';
import ContactMe from './routes/pages/ContactMe';

const router = createBrowserRouter([
  {
    // This is technically our root route, not '/', since GitHub Pages 
    // uses the repo name as the path to the root of the web app.
    path: '/personal-web-app/',
    element: <Root />,
  },
  {
    path: '/personal-web-app/about-me/',
    element: <AboutMe />,
  },
  {
    path: '/personal-web-app/resume/',
    element: <Resume />,
  },
  {
    path: '/personal-web-app/contact-me/',
    element: <ContactMe />,
  }
]);

function App() {
  return (
    <div className="App">
      <NavBar/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
