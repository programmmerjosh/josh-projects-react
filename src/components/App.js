import logo from '../logo.svg';
import '../App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectList from './ProjectList';
import myProjects from '../data/data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          This is React Bootstrap
        </h3>
        <Button variant='primary' className='my-2'>primary bootstrap button</Button>
        <Button variant='success' className='mb-2'>success bootstrap button</Button>
        <Button variant='warning' className='mb-2'>warning bootstrap button</Button>
        <Button variant='secondary' className='mb-2'>secondary bootstrap button</Button>
      </header>
      <ProjectList dataList={myProjects}/>
    </div>
  );
}

export default App;
