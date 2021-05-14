import './ListPosts.scss';
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from 'react';
import ApiHelper from 'helpers/ApiHelper';
import PostCard from './PostCard';
import { Row } from 'reactstrap';
import { Col } from 'react-bootstrap';
function ListPosts(props) {
    const [items, setItems] = useState(Array.from({ length: 20 }));
    const fetchMoreData = () => {
        setTimeout(() => {
            setItems(items.concat(Array.from({ length: 20 })));
        }, 1500);
    };
    const listPosts = ApiHelper.getOwnPostParser(props.listPosts)
    console.log(listPosts);
    return (
        <div>
            <Row>
                {
                    listPosts.posts.map((post, index) => {
                        return (
                            <Col key={index} xs="12" md="6" lg="4">
                                <PostCard post={post} key={index} />
                            </Col>)
                    })
                }
            </Row>
            {/* <InfiniteScroll
                dataLength={items.length} //This is important field to render the next data
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {items.map((i, index) => (
                    <div key={index}>
                        div - #{index}
                    </div>
                ))}
            </InfiniteScroll> */}
        </div>
    );

}
export default ListPosts;