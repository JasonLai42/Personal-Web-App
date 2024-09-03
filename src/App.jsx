import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './routes/partials/NavBar';
import {
  Routes,
  Route
} from 'react-router-dom';
import Root from './routes/pages/Root';
import AboutMe from './routes/pages/AboutMe';
import Resume from './routes/pages/Resume';
import Art from './routes/pages/Art';
import ContactMe from './routes/pages/ContactMe';
import NotFound from './routes/pages/errors/NotFound';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" Component={Root}/>
        <Route path="/about-me" Component={AboutMe}/>
        <Route path="/resume" Component={Resume}/>
        <Route path="/art" Component={Art}/>
        <Route path="/contact-me" Component={ContactMe}/>
        <Route path="/*" Component={NotFound}/>
      </Routes>
    </div>
  );
}

export default App;
