import { CreateSvg } from '../data/data';

function ProjectCard(props) {
    // incoming props:
            // props.description
            // props.imageUrl
            // props.gitHubUrl
            // props.directLinkUrl
            // props.faSvgs
            // props.source
            
    return <div><h6 
    style={props.source === "Josh" ? {color: "#786CA4"} : {color: "#AB3535"}} 
    key={props.id}>{props.title}
    </h6>
    {props.faSvgs.map(svg => <CreateSvg key={props.title + svg} svg={svg} alt="icon" />)}
    </div>;
    }
export default ProjectCard;