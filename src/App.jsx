import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './routes/partials/NavBar';
import Footer from './routes/partials/Footer';
import {
  Routes,
  Route
} from 'react-router-dom';
import Root from './routes/pages/Root';
import Art from './routes/pages/Art';
import NotFound from './routes/pages/errors/NotFound';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" Component={Root}/>
        <Route path="/art" Component={Art}/>
        <Route path="/*" Component={NotFound}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
