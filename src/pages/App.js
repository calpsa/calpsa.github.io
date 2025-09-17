import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home';
import Events from './Events/Events';
import Board from './Board/Board';
import JoinUs from './JoinUs/JoinUs';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/board" element={<Board/>}/>
        <Route path="/join" element={<JoinUs/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
