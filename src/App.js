import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';

import Navbar from './components/Navbar/Navbar';
import { SettingUp } from './components/Insurance/SettingUp';
import MotorInsuranceLandingPage from './Pages/Motor insurance/MotorInsuranceLandingPage';
import SignPage from './Pages/Signin-signup/SignPage';
import MotorInsuranceCalculator from './Pages/Motor insurance/quotation/Instant quote/MotorInsuranceCalculator';
import MotorInsurQuotaionRequest from './Pages/Motor insurance/quotation/full/MotorInsurQuotaionRequest';



function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/InsurancePlans' element={<SettingUp/>} />
      <Route path='/MotorInsurance' element={<MotorInsuranceLandingPage/>} />
      <Route path='/MotorInsur-calculator' element = {<MotorInsuranceCalculator/>}/>
      <Route path='/MotorInsur-quotaion-Request' element= {<MotorInsurQuotaionRequest/>} />
      <Route path='/Authentication' element={<SignPage/>}/>
    </Routes>
    <Footer/>
    </Router>

    </div>
  );
}

export default App;
