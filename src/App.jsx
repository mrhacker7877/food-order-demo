import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home.jsx";
import Loader from "./components/Loader.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Toaster position="top-right" />
      {loading ? <Loader /> : <Home />}
    </>
  );
}

export default App;
