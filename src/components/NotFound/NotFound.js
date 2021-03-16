import Images from 'constants/images';
import './NotFound.scss'
import ProtoTypes from 'prop-types'
NotFound.protoTypes = {
    hasImage : ProtoTypes.bool,
    text : ProtoTypes.string,
}
NotFound.defaultProps = {
    hasImage : true,
    text : "Opps... May be link is broken or the page has been removed. Check that the link you're trying to open is correct.",
    title: "Page isn't working!"
}
function NotFound(props){
    return (
        <div className="not-found f-screen-background flex-center">
            {props.hasImage && <img className="not-found__img" src={Images.NOT_FOUND} alt="Not found"/>}
            <p className="not-found__text">{props.text}</p>
        </div>
    )
}
export default NotFound;