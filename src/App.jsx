import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root from './routes/partials/Root';

const router = createBrowserRouter([
  {
    // This is technically our root route, not '/', since GitHub Pages 
    // uses the repo name as the path to the root of the web app.
    path: '/Personal-Web-App/',
    element: <Root />,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
