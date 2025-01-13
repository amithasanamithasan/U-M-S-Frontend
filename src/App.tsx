// import { decrement, increment } from "./app/features/counter/counterSlice";
// import { useAppDispatch, useAppSelector } from "./app/hook";
// import { Button } from "./components/ui/button";

import { Outlet } from "react-router-dom";
import Navbar from "./components/layouts/navebar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
