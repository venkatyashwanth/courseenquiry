import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Header from './components/Header'
import Courses from './components/Courses';
import Form from './components/Form';
import Enquirydetails from './components/Enquirydetails';

function App() {
  return (
    <>
    <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Courses/>}></Route>
      <Route path='/form' element={<Form/>}></Route>
      <Route path='/enquirydetails' element={<Enquirydetails/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
