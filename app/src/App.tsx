import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {GiftCardsList} from './pages/giftCards/GiftCardsList';
import {GiftCardDetails} from './pages/giftCards/GiftCardDetails';


function App() {
  return (
    <Router>
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<GiftCardsList />} />
        <Route path="/item/:id" element={<GiftCardDetails />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
