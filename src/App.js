
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Main from './Components/MAIN';
import Membership from './MembershipPage/Membership';

function App() {
  return (
   <div className='layout'>
     <Router>
     
     
     
        <Routes>
            <Route path="/" element={ <Main /> }/>
            <Route path="/membership" element={ <Membership /> }/>
        </Routes>
     </Router>

   </div>
  );
}

export default App;
