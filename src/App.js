import './App.css';
import { Routes, Route } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="details/" element={<DetailsPage />} />
        <Route exact path="details/:coin_id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
