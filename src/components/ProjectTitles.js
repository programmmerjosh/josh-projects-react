import { Button } from "react-bootstrap";

function ProjectTitles(props) {
  //props: dataList, onClick

  function handleClick(id) {
    props.onClick(id);
  }

  var projects = [];

  props.dataList.map((project) =>
    projects.push(
      <Button
        className="mx-1 mb-2"
        onClick={() => handleClick(project.id)}
        key={project.id}
        id={project.id}
        variant={
          props.selectedId !== null && props.selectedId === project.id
            ? "warning"
            : "primary"
        }
      >
        {project.title}
      </Button>
    )
  );
  return <div>{projects}</div>;
}
export default ProjectTitles;
