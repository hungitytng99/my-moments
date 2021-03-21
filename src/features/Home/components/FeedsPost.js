import { ListComment } from "constants/fake";
import CommentsList from "./CommentsList";
import './FeedsPost.scss'

function FeedsPost() {
    console.log(ListComment);
    return (
        <div className="feeds-post">
            <div className="post__comments-list">
                <CommentsList listComments={ListComment} />
            </div>
        </div>
    )
}
export default FeedsPost;