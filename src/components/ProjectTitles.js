import { Button } from 'react-bootstrap';

function ProjectTitles(props) { //props: dataList, onClick
    var projects = [];

    props.dataList.map(project => 
        projects.push(
            <Button className='mx-1 mb-2' onClick={props.onClick} key={project.id} id={project.id}>{project.title}</Button>));
    return <div>{projects}</div>;
}
export default ProjectTitles;