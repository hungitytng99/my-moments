import UserApi from "api/UserApi";
import { Post } from "constants/fake";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import FeedsPost from "./FeedsPost";
import './Feeds.scss'

class Feeds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: Post.splice(0, 3),
        }
        this.getPost = this.getPost.bind(this);
    }
    getPost = async () => {
        try {
            const response = await UserApi.getPost();
            this.setState({
                post: this.state.post.concat(response)
            });
            console.log(this.state.post);
        } catch (error) {
            console.log('Failed to fetch post list:', error);
        }
    }
    render() {
        return (
            <InfiniteScroll
                dataLength={this.state.post.length}
                next={this.getPost}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {this.state.post.map((i, index) => {
                    return (
                        <div key={i.id} className="feeds">
                            <FeedsPost post={i}></FeedsPost>
                        </div>
                    )
                }
                )}
            </InfiniteScroll>
        )
    }

}
export default Feeds;