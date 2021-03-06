import { Link } from "react-router-dom";
import "./DirectionBox.scss"
import PropTypes from 'prop-types';

DirectionBox.protoTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
    to: PropTypes.string,
}
DirectionBox.defaultProps = {
    text: "",
    link: "",
    to: "",
}

function DirectionBox(props){
    const { text,link,to } = props;
    return (
        <div className="direction flex-center">
            <div className="direction__text">{text}</div>
            <Link className="direction__link" to={to}>{link}</Link>
        </div>
    )
}
export default DirectionBox;