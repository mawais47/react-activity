
import './App.css';
import Exercise_1 from './Exercise_1';
import Exercise_2 from './Exercise_2';
import Exercise_3 from './Exercise_3';
import Exercise_4 from './Exercise_4';
import about from './about';
import {Link,Route, Routes} from 'react-router-dom';


function App() {
  return (
    
    <div className="App">
      <nav>
        <Link to='Exercise_1'>Exercise 1</Link>
        <Link to='Exercise_2'>Exercise 2</Link>
        <Link to='Exercise_3'>Exercise 3</Link>
        <Link to='Exercise_4'>Exercise 4</Link>
        <Link to='about'>About US</Link>
      </nav>
      <Exercise_1/>
      <Exercise_2/>
      <Exercise_3/>
      <Exercise_4/>
      <Routes>
        <Route path='/Exercise_1' element={<Exercise_1/>} />
        <Route path='/Exercise_2' element={<Exercise_2/>} />
        <Route path='/Exercise_3' element={<Exercise_3/>} />
        <Route path='/Exercise_4' element={<Exercise_4/>} />
        <Route path='/about' element={<about/>} />
      </Routes>
    </div>
  );
}

export default App;
