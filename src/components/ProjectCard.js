import { FaIcon } from '../data/data';
import { Row, Col, Card } from 'react-bootstrap';
import IconButton from './IconButton';
import github from '../faBrandIcons/github.svg';
import plane from '../faBrandIcons/paper-plane-solid.svg';

function ProjectCard(props) {
    // incoming props: description, imageUrl, gitHubUrl, directLinkUrl, iconSvgs, source

    const projectColor = props.source === "Personal" ? {color: "#786CA4"} : props.source === 'Client' ? {color: "#6912EB"} : {color: "#AB3535"};
    const projectEmoji = props.source === 'Personal' ? '⭐' : props.source === 'Client' ? '💼' : '📚';
    const icons = props.iconSvgs ?? [];

    return <div className='proj-card'>
    <Card>
    {/* title */}
    <h6 style={projectColor} key={props.id}>{props.title}</h6>

    <Row>
        <Col>
            {/* image */}
            {<img className="d-block project-img mx-auto mb-3" src={props.imageUrl} alt="project preview" />}
        </Col>
        
        <Col>
            <Row className="align-items-center">
                {/* type */}
                <p className="project-note" style={projectColor}>{projectEmoji} {props.source} Project {projectEmoji}</p>
                {/* description */}
                <p className="lead pt-1 px-5 pb-5">{props.description}</p>
            </Row>

            <Row className="mb-5">
                {/* links */}
                <Col className=" d-flex justify-content-around">
                <IconButton icon={github} text="View on GitHub" href={props.gitHubUrl} />
                {props.directLinkUrl !== "" && <IconButton icon={plane} text={props.source === "Course" ? "View Course" : "View Project Live"} href={props.directLinkUrl} />}
                </Col>
            </Row>
        </Col>
    </Row>
    <Row>
        {/* stack */}
        <Col>{icons.map(svg => icons.length > 0 ? <FaIcon key={props.title + svg} svg={svg} alt="icon" /> : <div />)}</Col>
    </Row>
    </Card>
    </div>;
}
export default ProjectCard;