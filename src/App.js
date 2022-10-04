import './App.css';
import AssignmentMarks from './Components/AssignmentMarks/AssignmentMarks';
import Navbar from './Components/Navbar/Navbar';
import PhoneBar from './Components/PhoneBar/PhoneBar';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
