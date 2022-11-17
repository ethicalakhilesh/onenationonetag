import './App.css';
import Home from './components/home';
import Operator from './components/operator';
import OperatorPage from './components/operator-page';
import PayBill from './components/paybill';

function App() {
  return (
    <div className="App">
      <Home />
      <PayBill />
      <Operator />
      <OperatorPage />
       
    </div>
  );
}

export default App;
