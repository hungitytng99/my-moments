import { useState } from 'react';
import Comment from '../components/Comment';

function CommentsList(props){
    const { listComments } = props;
    const [ countComment, setCountComment ] = useState(2);
    console.log("Length of list comment: ", listComments.length);
    return (
        listComments.map((item) => {
            return <Comment key={item.id} comment={item}/>
        })
    )
}
export default CommentsList;