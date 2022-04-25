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

  function filterProjects(newCategory) {
    setProject(emptyProj);
    setId(null);
    setCategory(newCategory);
  }

  function showDesiredProject(id) {
    setProject(myProjects.find((project) => project.id === id));
    setId(id);
  }

  function reset() {
    setProject(emptyProj);
    setId(null);
    setCategory("");
  }

  const animateInstruction1 = { opacity: category === "" ? 1 : 0 };

  const animateInstruction2 = {
    opacity: id === null && category !== "" ? 1 : 0,
  };

  const animateProjectArrow = {
    opacity: id === null ? 1 : 0,
    marginTop: id === null ? 0 : -15,
    position: id === null ? "static" : "fixed",
  };

  const animateProjectTitles = {
    opacity: category !== "" ? 1 : 0,
    marginTop: category !== "" ? 0 : -15,
    position: category !== "" ? "static" : "fixed",
  };

  const animateProject = {
    opacity: id !== null ? 1 : 0,
    marginTop: id !== null ? 0 : -15,
    position: id !== null ? "static" : "fixed",
  };

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
        <motion.div animate={animateInstruction1}>
          <p className="small">
            Tap on any of these categories below to view projects
          </p>
        </motion.div>

        <CategoryList
          dataList={myProjects}
          onClick={filterProjects}
          selectedCategory={category}
        />
        <motion.div animate={animateProjectArrow}>
          <img className="faIcon mb-2" src={downarrow} alt="downward arrow" />
        </motion.div>

        <motion.div animate={animateInstruction2}>
          <p className="small">Tap on any of these projects below to view</p>
        </motion.div>

        <motion.div animate={animateProjectTitles}>
          <ProjectTitles
            dataList={myProjects.filter((project) => project.type === category)}
            onClick={showDesiredProject}
            selectedId={id}
          />
        </motion.div>

        <motion.div animate={animateProject}>
          <img className="faIcon mb-2" src={downarrow} alt="downward arrow" />
        </motion.div>
        <motion.div animate={animateProject} className="container mb-5">
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
