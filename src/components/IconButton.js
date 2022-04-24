import { Anchor } from 'react-bootstrap';

function IconButton(props) {
    return <Anchor className="icon-button-a" href={props.href} target="_blank">
    <div className="icon-button d-flex justify-content-center align-items-center">
        <img className='d-block icon-button-icon' src={props.icon} alt="icon" />
        <h5 className="d-inline mb-0">{props.text}</h5>
    </div>
</Anchor>;
}
export default IconButton;