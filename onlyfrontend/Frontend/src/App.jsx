import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { Signin } from "./Pages/Signin";
import { Dashboard } from "./Pages/Dasboard";

import { Composemail } from "./Pages/Composemail";


function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/composemail" element={<Composemail/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
