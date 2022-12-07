import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bank_Nifty from "./pages/Bank_Nifty";
import Home from "./pages/Home";
import Demo from "./nse/demo";
import Nifty from "./pages/Nifty";
import Login from "./admin/Login";
import LiveNse from "./admin/Nse";
import History_data from "./admin/History_nse";
import Setting_liveNse from "./admin/Setting_nse";
import Update_settingdata from "./admin/Update_setting";
import Add_settingdata from "./admin/Add_settingdata";

function App() {
  const token = localStorage.getItem("token");

  return (
    <div className='App'>
      <div>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/bank-nifty' element={<Bank_Nifty />} />
            <Route path='/nifty-50' element={<Nifty />} />
            <Route path='/demo' element={<Demo />} />

            <Route path='/admin/login' element={<Login />} />
            {token && <Route path='/admin/live' element={<LiveNse />} />}
            <Route path='/admin/history' element={<History_data />} />
            <Route path='/admin/settings' element={<Setting_liveNse />} />
            <Route path='/Add_settingdata' element={<Add_settingdata />} />

            <Route
              path='/admin/Update_settingdata/:empid'
              element={<Update_settingdata />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
