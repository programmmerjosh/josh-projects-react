import { FaIcon } from '../data/data';
import { Row, Col, Card, Anchor } from 'react-bootstrap';

function ProjectCard(props) {

    // incoming props:
    // props.description
    // props.imageUrl
    // props.gitHubUrl
    // props.directLinkUrl
    // props.iconSvgs
    // props.source

    const projectColor = props.source === "Personal" ? {color: "#786CA4"} : props.source === 'Client' ? {color: "#6912EB"} : {color: "#AB3535"};
    const projectEmoji = props.source === 'Personal' ? '⭐' : props.source === 'Client' ? '💼' : '📚';

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

            <Row>
                {/* links */}
                <Col className=" d-flex justify-content-around">
                <Anchor><img src="" alt="github icon" /></Anchor>
                <Anchor><img src="" alt="direct link icon" /></Anchor>
                </Col>
            </Row>
        </Col>
    </Row>
    <Row>
        {/* stack */}
        <Col>{props.iconSvgs.map(svg => <FaIcon key={props.title + svg} svg={svg} alt="icon" />)}</Col>
    </Row>
    </Card>
    </div>;
    }
export default ProjectCard;