import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GiftCardsList } from "./pages/giftCards/GiftCards";
import { GiftCardDetails } from "./pages/giftCards/giftCardDetails/GiftCardDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<GiftCardsList />} />
          <Route path="/gift_card/:id" element={<GiftCardDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
