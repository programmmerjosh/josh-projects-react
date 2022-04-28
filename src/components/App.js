import logo from "../logo.svg";
import "../App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import myProjects from "../data/data";
import CategoryList from "./CategoryList";
import ProjectTitles from "./ProjectTitles";
import downarrow from "../faBrandIcons/chevron-down-solid.svg";
import ProjectCard from "./ProjectCard";
import cancel from "../faBrandIcons/ban-solid.svg";
import { motion } from "framer-motion";
import { instructionVariants, arrowVariants, projectTitleVariants, projecCardVariants } from '../data/animation-variants';

function App() {
  const emptyProj = {
    id: "",
    type: "",
    source: "",
    title: "",
    description: "",
    imageUrl: "",
    gitHubUrl: "",
    directLinkUrl: "",
    iconSvgs: [],
  };
  const [category, setCategory] = useState("");
  const [project, setProject] = useState(emptyProj);
  const [id, setId] = useState(null);
  const [hasCategory, setHasCategory] = useState(false);
  const [hasProject, setHasProject] = useState(false);

  function filterProjects(newCategory) {
    resetProject();
    setCategory(newCategory);
    setHasCategory(true);
  }

  function showDesiredProject(id) {
    setProject(myProjects.find((project) => project.id === id));
    setId(id);
    setHasProject(true);
  }

  function resetProject() {
    setProject(emptyProj);
    setId(null);
    setHasProject(false);
  }

  function reset() {
    setCategory("");
    resetProject();
    setHasCategory(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button className="cancel" onClick={reset}>
          <img
            className="icon-button-icon red"
            src={cancel}
            alt="cancel icon"
          />
        </button>

        <img src={logo} className="App-logo" alt="logo" />
        <h3>Josh's Projects ~ React Bootstrap Web App</h3>

        {/* visible if no category selected */}
        <motion.div variants={instructionVariants} initial="visible" animate={hasCategory ? "hidden" : "visible"}>
          <p className="small">
            Tap on any of these categories below to view projects
          </p>
        </motion.div>

        {/* always visible */}
          <CategoryList
            dataList={myProjects}
            onClick={filterProjects}
            selectedCategory={category}
          />
        
        {/* hidden if no category selected */}
        <motion.div variants={arrowVariants} initial="hidden" animate={!hasCategory ? "hidden" : "visible"}>
          <img className="faIcon mb-2" src={downarrow} alt="downward arrow" />
        </motion.div>

        {/* visible if a category has been selected AND if no project selected */}
        <motion.div variants={instructionVariants} initial="hidden" animate={!hasProject && hasCategory ? "visible" : "hidden"}>
          <p className="small">Tap on any of these projects below to view</p>
        </motion.div>

        {/* visible if category selected */}
        <motion.div variants={projectTitleVariants} initial="hidden" animate={hasCategory ? "visible" : "hidden"}>
          <ProjectTitles
            dataList={myProjects.filter((project) => project.type === category)}
            onClick={showDesiredProject}
            selectedId={id}
          />
        </motion.div>

        {/* visible if project has been selected */}
        <motion.div variants={arrowVariants} initial="hidden" animate={hasProject ? "visible" : "hidden"}>
          <img className="faIcon mb-2" src={downarrow} alt="downward arrow" />
        </motion.div>
        <motion.div variants={projecCardVariants} initial="hidden" animate={hasProject ? "visible" : "hidden"} className="container mb-5">
          <ProjectCard
            description={project.description}
            imageUrl={project.imageUrl}
            gitHubUrl={project.gitHubUrl}
            directLinkUrl={project.directLinkUrl}
            iconSvgs={project.iconSvgs}
            source={project.source}
          />
        </motion.div>
      </header>
    </div>
  );
}
export default App;
