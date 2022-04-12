import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Checkout from "./components/layout/checkout";
import Done from "./components/layout/done";
import Error from "./components/layout/err";
import Home from "./components/layout/home";
import Order from "./components/layout/order";

function AnimatedRoutes() {
    const location = useLocation();
  
    return (
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/done" element={<Done />} />
          <Route path="/err" element={<Error />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    );
  };

export default AnimatedRoutes