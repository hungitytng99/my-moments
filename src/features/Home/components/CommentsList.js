import Comment from '../components/Comment';

function CommentsList(props){
    const { listComments } = props;
    return (
        listComments.map((item) => {
            return <Comment key={item.user} comment={item}/>
        })
    )
}
export default CommentsList;