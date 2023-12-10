import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import axios from "axios";
import './App.css';



function App() {

    return (
      <div className='App'>

        <Navbar />
        <Outlet />

      </div>
    );
  }



  export default App
