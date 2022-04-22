import { FaIcon } from '../data/data';

function ProjectCard(props) {
    // incoming props:
            // props.description
            // props.imageUrl
            // props.gitHubUrl
            // props.directLinkUrl
            // props.iconSvgs
            // props.source
            
    return <div><h6 
    style={props.source === "Josh" ? {color: "#786CA4"} : {color: "#AB3535"}} 
    key={props.id}>{props.title}
    </h6>
    {props.iconSvgs.map(svg => <FaIcon key={props.title + svg} svg={svg} alt="icon" />)}
    </div>;
    }
export default ProjectCard;