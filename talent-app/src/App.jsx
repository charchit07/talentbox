
import './App.css';
import { AllRoutes } from './Components/AllRoute';
import Navbar from './Components/Navbar';
// import Middle from './Components/Middle';
// import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
     {/* <Navbar/>
     <Middle/> */}
     <Navbar/>
     <AllRoutes/>
    </div>
  );
}

export default App;
