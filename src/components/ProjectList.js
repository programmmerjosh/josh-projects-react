import ProjectCard from "./ProjectCard";

function ProjectList(props) {

    var categories = new Set();
    props.dataList.forEach((project) => categories.add(project.type));
    categories = [...categories].sort();  // Set to Array transformation
    
    var display = [];
    categories.forEach(category => {
        props.dataList.map(project => 
            project.type === category && 
            display.push(<div key={project.id} id={project.id} className="p-5"><ProjectCard 
              title={project.title} 
            description={project.description} imageUrl={project.imageUrl}
            gitHubUrl={project.gitHubUrl} directLinkUrl={project.directLinkUrl}
            iconSvgs={project.iconSvgs} source={project.source}
            /></div>))
    })

    return <div>{display}</div>;
}
export default ProjectList;