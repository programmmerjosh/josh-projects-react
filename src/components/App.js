import logo from '../logo.svg';
import '../App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import myProjects from '../data/data';
import CategoryList from './CategoryList';
import ProjectTitles from './ProjectTitles';
import downarrow from '../faBrandIcons/chevron-down-solid.svg';
import ProjectCard from './ProjectCard';
import cancel from '../faBrandIcons/ban-solid.svg';

function App() {

  const [category, setCategory] = useState("");
  const [project, setProject] = useState(null);
  const [id, setId] = useState(null);

  function filterProjects(newCategory) {
    setProject(null);
    setId(null);
    setCategory(newCategory);
  }

  function showDesiredProject(id) {
    setProject(myProjects.find(project => project.id === id));
    setId(id);
  }

  function reset() {
    setProject(null);
    setId(null);
    setCategory("");
  }

  return (
    <div className="App">
      
      <header className="App-header">
        <button className='cancel' onClick={reset}><img className='icon-button-icon red' src={cancel} alt="cancel icon" /></button>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Josh's Projects ~ React Bootstrap Web App
        </h3>
        {category === "" && <p className="small">Tap on any of these categories below to view projects</p>}
        <CategoryList dataList={myProjects} onClick={filterProjects} selectedCategory={category}/>
        {category !== "" && <img className="faIcon mb-2" src={downarrow} alt="downward arrow" />}
        {project === null && category !== "" && <p className="small">Tap on any of these projects below to view</p>}
        {category !== "" && <ProjectTitles dataList={myProjects.filter(project => project.type === category)} onClick={showDesiredProject} selectedId={id} />}
        {project !== null && <img className="faIcon mb-2" src={downarrow} alt="downward arrow" />}
        <div className='container mb-5'>
        {project !== null && <ProjectCard description={project.description} imageUrl={project.imageUrl} 
        gitHubUrl={project.gitHubUrl} directLinkUrl={project.directLinkUrl} iconSvgs={project.iconSvgs} 
        source={project.source} />}
        </div>
      </header>
    </div>
  );
}
export default App;
