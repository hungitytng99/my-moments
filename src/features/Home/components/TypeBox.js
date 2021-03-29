import './TypeBox.scss'
import { useState } from 'react';
TypeBox.defaultProps = {
    textHolder: "Add a comment...",
    textAction: "Post",
}
function TypeBox(props) {
    const [ displayEmoji, setDisplayEmoji ] = useState(false);
    // const [ chosenEmoji, setChosenEmoji] = useState(null);
    // const onEmojiClick = (event, emojiObject) => {
    //     setChosenEmoji(emojiObject);
    //   };

    return (
        <div className="type-box">
            <div className="emoji__box">
                <i className="type-box__emoji far fa-grin" onClick={()=>setDisplayEmoji(!displayEmoji)}></i>
                {/* <div className="emoji__box-pane">
                    {displayEmoji && <Picker onEmojiClick={onEmojiClick} disableSearchBar={true} />}
                </div> */}
            </div>
            <span className="textarea" role="textbox" contentEditable></span>
            <button className="type-box__btn-post">Post</button>
        </div>
    )
}
export default TypeBox;