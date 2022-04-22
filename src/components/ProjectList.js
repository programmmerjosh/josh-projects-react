import ProjectCard from "./ProjectCard";
import ProjectTitle from "./ProjectTitle";

function ProjectList(props) {

    var categories = new Set();
    props.dataList.forEach((project) => categories.add(project.type));
    categories = [...categories].sort();  // Set to Array transformation
    
    var display = [];
    categories.forEach(category => {
        display.push(<ProjectTitle key={category} text={category}/>);
        props.dataList.map(project => 
            project.type === category && 
            display.push(<ProjectCard 
            key={project.id} id={project.id} title={project.title} 
            description={project.description} imageUrl={project.imageUrl}
            gitHubUrl={project.gitHubUrl} directLinkUrl={project.directLinkUrl}
            iconSvgs={project.iconSvgs} source={project.source}
            />))
    })

    return <div>{display}</div>;
}
export default ProjectList;