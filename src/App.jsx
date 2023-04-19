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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
