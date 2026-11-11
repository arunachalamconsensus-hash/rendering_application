
import { useState } from "react";
import Login from "./Login";
import Home from "./Home";
import "./App.css";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app-container">

      {isLoggedIn ? (
        <Home handleLogout={handleLogout} />
      ) : (
        <Login handleLogin={handleLogin} />
      )}

    </div>
  );
}

export default App;
