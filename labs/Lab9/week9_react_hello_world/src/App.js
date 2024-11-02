import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Greetings from './Greetings';
import SayHello from './SayHello';

function App() {
  return (<div className='App'>
  <h1>Hello</h1>
  <h1>Test</h1>
  <Welcome></Welcome>
  <Greetings name="sammy"/>
  <SayHello/>
  <SayHello fname = "Pritesh"/>
  <SayHello fname = "Juan"/>
  <SayHello fname = "John" lname="Doe"/>
  </div>)
}

export default App;
