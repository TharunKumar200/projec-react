import logo from './logo.svg';
import './App.css';
import ClassState from './Component/ClassState';

function App() {
  return (
    <BrowserRouter>
    <ul>
      <li>
        <Link to='/list'>List</Link>
      </li>
    <li>
      <Link to='/user'>User</Link>
      </li>
      </ul>
      <Routes>
        <Route path='/list' element={<ClassCompnent/>}/>
        <Route path='/user' element={<ArrowFunc/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
