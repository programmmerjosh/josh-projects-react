import logo from '../logo.svg';
import '../App.css';
import { useState } from 'react';
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ProjectList from './ProjectList';
import myProjects from '../data/data';
import CategoryList from './CategoryList';
import ProjectTitles from './ProjectTitles';
import downarrow from '../faBrandIcons/chevron-down-solid.svg';

function App() {

  const [category, setCategory] = useState("");

  function filterProjects(newCategory) {
    setCategory(newCategory);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Josh's Projects ~ React Bootstrap Web App
        </h3>
        <CategoryList dataList={myProjects} onClick={filterProjects} selectedCategory={category}/>
        {category !== "" && <img className="faIcon mb-2" src={downarrow} alt="downward arrow" />}
        {category !== "" && <ProjectTitles dataList={myProjects.filter(project => project.type === category)} />}
      </header>
      {/* <ProjectList dataList={myProjects}/> */}
      
    </div>
  );
}

export default App;
