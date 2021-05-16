const listApiUri = {
    SIGN_UP: '/api/auth/signup',
    LOGIN: '/api/auth/login',
    VERIFY: (token) => {
        return '/api/auth/verify/' + token;
    },
    LOGOUT: '/api/auth/logout',
}
// const listPostTemplate = {
//     "timestamp": {
//         "minScore": "1612422235848",
//         "maxScore": "1612422235848",
//     },
//     "total": 1,
//     "140737488419056": {
//         "href": "/admin/140737488419056",
//         "caption": "hello",
//         "images":
//             [
//                 {
//                     "userId": "1",
//                     "url": "",
//                     "mime": "",
//                     "width": "",
//                     "height": "",
//                     "size": "",
//                 },
//             ],
//         "comments":
//             [
//                 {
//                     "version": 2,
//                     "href": "/mhung99",
//                     "username": "mhung99",
//                     "content": "Content tmh",
//                 },
//                 {
//                     "version": 2,
//                     "href": "/tta9799",
//                     "username": "tta9799",
//                     "content": "Content tta",
//                 },
//                 {
//                     "version": 3,
//                     "href": "/aaa",
//                     "username": "aaa",
//                     "content": "Content aaa",
//                 },
//             ],
//         "createdAt": "Feb 12 2021",
//         "updateAt": "Feb 12 2021",
//     }

// }
const getOwnPostParser = (post) => {
    let result;
    for (const [key, value] of Object.entries(post.HasPost)) {
        console.log(post, key, value);
        result = {
            "total": value.total,
            "timestamp": {
                "minScore": value.minScore,
                "maxScore": value.maxScore,
            },
            posts: [],
        }
        const listPostsId = value.itemIds;
        listPostsId.forEach((postId) => {
            let listImages = [];
            const listAttachmentIds = post.HasAttachment[postId].itemIds;
            listAttachmentIds.forEach((attachmentId) => {
                let attachment = post.Attachment[attachmentId];
                let image = {
                    "userId": attachment.data.userId,
                    "url": attachment.data.url,
                    "alt": attachment.data.name,
                    "mime": attachment.data.mime,
                    "size": attachment.data.size,
                    "version": attachment.version,
                }
                listImages.push(image);
            })
            //
            const listCommentId = post.HasComment[postId].itemIds;
            let listCommentsData = [];
            listCommentId.forEach((commentId) => {
                let comment = post.Comment[commentId];
                let commentData = {
                    "version": comment.version,
                    "href": comment.href,
                    "username": "ttamta",
                    "content": comment.data.content,
                };
                listCommentsData.push(commentData);
            })
            const reactionCount = post.HasReaction[postId] ? post.HasReaction[postId].itemIds.length : 0;
            const postsTmp = {
                [postId]: {
                    "comments": listCommentsData,
                    "caption": post.Post[postId].data.caption,
                    "href": post.Post[postId].href,
                    "images": listImages,
                    "updateAt": "Feb 2021",
                    "createdAt": "Feb 2020",
                    "liked": reactionCount,
                }
            };
            result.posts.push(postsTmp);
        });
    }
    return result;
}
export default {
    listApiUri,
    getOwnPostParser,
}