// import ProjectCard from "./ProjectCard";
import { Button } from 'react-bootstrap';

function CategoryList(props) {

    function handleClick(selectedCategory) {
        props.onClick(selectedCategory);
    }
    
    var categoryButtons = [];
    var categories = new Set();

    props.dataList.forEach((project) => categories.add(project.type));
    categories = [...categories].sort();  // Set to Array transformation
    
    categories.forEach(category => {
        categoryButtons.push(<Button className="mx-1 mb-2" key={category} 
        variant={props.selectedCategory === category ? "secondary" : "success" } 
        onClick={() => handleClick(category)}>{category}(s)</Button>);
    })

    return <div>{categoryButtons}</div>;
}
export default CategoryList;