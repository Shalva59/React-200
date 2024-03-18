import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { nav } from "./data/nav";
import Input from "./components/input"
import { inputData } from './data/inputData';

function App() {
 
console.log(inputData);
  return (

    <div className="App">
      <Header navigation = {nav}/>
      <Footer navigation = {nav}/>
    </div>

  );
}

export default App;


