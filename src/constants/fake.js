import Images from "./images"

// Login
const SUCCESS_LOGIN_RESPONSE = {
    token: "mytoken~!!!!",
    username: "hung.it99",
}

const FollowApi = [
    {
        avatar: Images.AVA_1,
        username: "hungitytng99",
        description: "Follows you"

    },
    {
        avatar: Images.AVA_2,
        username: "hungitytng98",
        description: "Follows you"

    },
    {
        avatar: Images.AVA_3,
        username: "hungitytng97",
        description: "Follows you"

    },
    {
        avatar: Images.AVA_4,
        username: "hungitytng96",
        description: "Followed by anhplaydan + 1 more"

    },
    {
        avatar: Images.AVA_5,
        username: "hungitytng95",
        description: "Followed by 0212.mco____ + 2 more"

    },
]
const MainUser = {
    avatar: Images.AVA_6,
    username: "hung.it99",
    description: "Mạnh Hùng"

}

const ListComment = [
    {
        id: 1,
        user: "hung.it99",
        avatar: Images.AVA_7,
        linkToUserPage: "#",
        comment: "This is a beautiful picture",
        reply: [

        ],
        liked: 0,
        isLiked: false,
        dateCreated: "12w",
    },
    {
        id: 2,
        user: "tta.99",
        avatar: Images.AVA_8,
        linkToUserPage: "#",
        comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        reply: [],
        liked: 12,
        isLiked: false,
        dateCreated: "2w",
    },
    {
        id: 3,
        user: "puuu.puuu",
        avatar: Images.AVA_9,
        linkToUserPage: "#",
        comment: "It is a long established",
        reply: [

        ],
        liked: 15,
        isLiked: true,
        dateCreated: "10w",
    }
    // , {
    //     id: 4,
    //     user: "puuu.puuu",
    //     avatar: "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-1/cp0/p32x32/150554774_106593991485086_2018582545759993121_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=1eb0c7&_nc_ohc=JVZV3842GPMAX-qC1_i&_nc_ht=scontent.fhan4-1.fna&tp=27&oh=923041152da689f69564b92ffa43483f&oe=607C46A5",
    //     linkToUserPage: "#",
    //     comment: "It is a long established",
    //     reply: [

    //     ],
    //     liked: 15,
    //     isLiked: true,
    //     dateCreated: "10w",
    // }, {
    //     id: 5,
    //     user: "puuu.puuu",
    //     avatar: "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-1/cp0/p32x32/150554774_106593991485086_2018582545759993121_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=1eb0c7&_nc_ohc=JVZV3842GPMAX-qC1_i&_nc_ht=scontent.fhan4-1.fna&tp=27&oh=923041152da689f69564b92ffa43483f&oe=607C46A5",
    //     linkToUserPage: "#",
    //     comment: "It is a long established",
    //     reply: [

    //     ],
    //     liked: 15,
    //     isLiked: true,
    //     dateCreated: "10w",
    // }, {
    //     id: 6,
    //     user: "puuu.puuu",
    //     avatar: "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-1/cp0/p32x32/150554774_106593991485086_2018582545759993121_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=1eb0c7&_nc_ohc=JVZV3842GPMAX-qC1_i&_nc_ht=scontent.fhan4-1.fna&tp=27&oh=923041152da689f69564b92ffa43483f&oe=607C46A5",
    //     linkToUserPage: "#",
    //     comment: "It is a long established",
    //     reply: [

    //     ],
    //     liked: 15,
    //     isLiked: true,
    //     dateCreated: "10w",
    // }, {
    //     id: 7,
    //     user: "puuu.puuu",
    //     avatar: "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-1/cp0/p32x32/150554774_106593991485086_2018582545759993121_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=1eb0c7&_nc_ohc=JVZV3842GPMAX-qC1_i&_nc_ht=scontent.fhan4-1.fna&tp=27&oh=923041152da689f69564b92ffa43483f&oe=607C46A5",
    //     linkToUserPage: "#",
    //     comment: "It is a long established",
    //     reply: [

    //     ],
    //     liked: 15,
    //     isLiked: true,
    //     dateCreated: "10w",
    // }, {
    //     id: 8,
    //     user: "puuu.puuu",
    //     avatar: "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-1/cp0/p32x32/150554774_106593991485086_2018582545759993121_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=1eb0c7&_nc_ohc=JVZV3842GPMAX-qC1_i&_nc_ht=scontent.fhan4-1.fna&tp=27&oh=923041152da689f69564b92ffa43483f&oe=607C46A5",
    //     linkToUserPage: "#",
    //     comment: "It is a long established",
    //     reply: [

    //     ],
    //     liked: 15,
    //     isLiked: true,
    //     dateCreated: "10w",
    // }, {
    //     id: 9,
    //     user: "puuu.puuu",
    //     avatar: "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-1/cp0/p32x32/150554774_106593991485086_2018582545759993121_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=1eb0c7&_nc_ohc=JVZV3842GPMAX-qC1_i&_nc_ht=scontent.fhan4-1.fna&tp=27&oh=923041152da689f69564b92ffa43483f&oe=607C46A5",
    //     linkToUserPage: "#",
    //     comment: "It is a long established",
    //     reply: [

    //     ],
    //     liked: 15,
    //     isLiked: true,
    //     dateCreated: "10w",
    // }, {
    //     id: 10,
    //     user: "puuu.puuu",
    //     avatar: "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-1/cp0/p32x32/150554774_106593991485086_2018582545759993121_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=1eb0c7&_nc_ohc=JVZV3842GPMAX-qC1_i&_nc_ht=scontent.fhan4-1.fna&tp=27&oh=923041152da689f69564b92ffa43483f&oe=607C46A5",
    //     linkToUserPage: "#",
    //     comment: "It is a long established",
    //     reply: [

    //     ],
    //     liked: 15,
    //     isLiked: true,
    //     dateCreated: "10w",
    // }, {
    //     id: 11,
    //     user: "puuu.puuu",
    //     avatar: "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-1/cp0/p32x32/150554774_106593991485086_2018582545759993121_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=1eb0c7&_nc_ohc=JVZV3842GPMAX-qC1_i&_nc_ht=scontent.fhan4-1.fna&tp=27&oh=923041152da689f69564b92ffa43483f&oe=607C46A5",
    //     linkToUserPage: "#",
    //     comment: "It is a long established",
    //     reply: [

    //     ],
    //     liked: 15,
    //     isLiked: true,
    //     dateCreated: "10w",
    // },
]

const Post = [
    {
        id: 1,
        user: "tmh",
        linkToUserPage: "#",
        avatar: Images.AVA_10,
        location: "Địa Trung Hải-Sun Premier Village Primavera",
        img_list: [
            Images.POST_11,
            Images.POST_12,
            Images.POST_13,
            Images.POST_14,
            Images.POST_15,
        ],
        liked: 70211,
        status: "There are many variations of passages",
        comment: "",
        dateCreated: "February 20",
        isLikedProps: true,
        isFavouriteProps: false,
    },
    {
        id: 2,
        user: "dochet1989",
        linkToUserPage: "#",
        avatar: Images.AVA_11,
        location: "Địa Trung Hải-Sun Premier Village Primavera",
        img_list: [
            Images.POST_21,
            Images.POST_22,
            Images.POST_23,
            Images.POST_24,
            Images.POST_25,

        ],
        liked: 70211,
        status: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        comment: "",
        dateCreated: "February 17",
        isLikedProps: false,
        isFavouriteProps: true,
    },
    {
        id: 3,
        user: "ngoctrinh89",
        linkToUserPage: "#",
        avatar: Images.AVA_1,
        location: "Địa Trung Hải-Sun Premier Village Primavera",
        img_list: [
            Images.POST_31,
            Images.POST_32,
            Images.POST_33,
            Images.POST_34,

        ],
        liked: 33333,
        status: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        comment: ListComment,
        dateCreated: "February 17",
        isLikedProps: false,
        isFavouriteProps: false,
    },
    {
        id: 4,
        user: "tta",
        linkToUserPage: "#",
        avatar: Images.AVA_2,
        location: "Địa Trung Hải-Sun Premier Village Primavera",
        img_list: [
            Images.POST_41,
            Images.POST_42,
            Images.POST_43,
            Images.POST_44,

        ],
        liked: 22222,
        status: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        comment: ListComment,
        dateCreated: "February 17",
        isLikedProps: false,
        isFavouriteProps: false,
    },
    {
        id: 5,
        user: "lingglanhh",
        linkToUserPage: "#",
        avatar: Images.AVA_5,
        location: "",
        img_list: [
            Images.POST_51,
            Images.POST_52,
            Images.POST_53,
            Images.POST_54,

        ],
        liked: 99999,
        status: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        comment: ListComment,
        dateCreated: "February 17",
        isLikedProps: false,
        isFavouriteProps: false,
    },
    {
        id: 6,
        user: "ngocdao",
        linkToUserPage: "#",
        avatar: Images.AVA_6,
        location: "Địa Trung Hải-Sun Premier Village Primavera",
        img_list: [
            Images.POST_61,
            Images.POST_62,
            Images.POST_63,
            Images.POST_64,
        ],
        liked: 101111,
        status: "Nhìn kỹ là thiên thần.",
        comment: "",
        dateCreated: "February 17",
        isLikedProps: false,
        isFavouriteProps: false,
    },
]
const PRIVATE_POST = {
    "HasPost": {
        "100": {
            "minScore": 1612422235848,
            "maxScore": 1712334234234,
            "total": 6,
            "itemIds": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
            ]
        }
    },
    "Post": {
        "1": {
            "version": 1,
            "href": "http://137.116.132.172:8081/post/1",
            "data": {
                "caption": "post 1",
                "location": {
                    "longitude": "321f",
                    "latitude": "232a"
                }
            }
        },
        "2": {
            "version": 1,
            "href": "http://137.116.132.172:8081/post/2",
            "data": {
                "caption": "post 2",
                "location": {
                    "longitude": "321f",
                    "latitude": "232a"
                }
            }
        },
        "3": {
            "version": 1,
            "href": "http://137.116.132.172:8081/post/3",
            "data": {
                "caption": "post 3",
                "location": {
                    "longitude": "321f",
                    "latitude": "232a"
                }
            }
        },
        "4": {
            "version": 1,
            "href": "http://137.116.132.172:8081/post/4",
            "data": {
                "caption": "post 4",
                "location": {
                    "longitude": "321f",
                    "latitude": "232a"
                }
            }
        },
        "5": {
            "version": 1,
            "href": "http://137.116.132.172:8081/post/5",
            "data": {
                "caption": "post 5",
                "location": {
                    "longitude": "321f",
                    "latitude": "232a"
                }
            }
        },
        "6": {
            "version": 1,
            "href": "http://137.116.132.172:8081/post/6",
            "data": {
                "caption": "post 6",
                "location": {
                    "longitude": "321f",
                    "latitude": "232a"
                }
            }
        }
    },
    "HasAttachment": {
        "1": {
            "minScore": 1612422235848,
            "maxScore": 1612422235848,
            "total": 1,
            "itemIds": [
                "21"
            ]
        },
        "2": {
            "minScore": 1612422235848,
            "maxScore": 1612422235848,
            "total": 1,
            "itemIds": [
                "22"
            ]
        },
        "3": {
            "minScore": 1612422235848,
            "maxScore": 1612422235848,
            "total": 1,
            "itemIds": [
                "23"
            ]
        },
        "4": {
            "minScore": 1612422235848,
            "maxScore": 1612422235848,
            "total": 1,
            "itemIds": [
                "24"
            ]
        },
        "5": {
            "minScore": 1612422235848,
            "maxScore": 1612422235848,
            "total": 1,
            "itemIds": [
                "25"
            ]
        },
        "6": {
            "minScore": 1612422235848,
            "maxScore": 1612422235848,
            "total": 1,
            "itemIds": [
                "26"
            ]
        }
    },
    "Attachment": {
        "21": {
            "version": 1,
            "href": "http://137.116.132.172:8081/attachment/21",
            "data": {
                "userId": "100",
                "url": "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-9/182777880_1851930018318985_9158593335791817092_n.jpg?_nc_cat=101&_nc_map=control&ccb=1-3&_nc_sid=b9115d&_nc_ohc=dwISctLZTSoAX89Q1G7&_nc_ht=scontent.fhan3-2.fna&oh=ba3bd862ab91141a751ded4c5669f547&oe=60C5E6D2",
                "name": "sexy1.png",
                "mime": "image/png",
                "size": 122342,
                "width": 1080,
                "length": 2040
            }
        },
        "22": {
            "version": 1,
            "href": "http://137.116.132.172:8081/attachment/22",
            "data": {
                "userId": "100",
                "url": "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/186480885_3610385049066502_8974178780301432035_n.jpg?_nc_cat=108&_nc_map=control&ccb=1-3&_nc_sid=825194&_nc_ohc=PZCso2Fw3tYAX8YPaqQ&_nc_ht=scontent.fhan4-1.fna&oh=bd9a24eeafd37edecee3d80f8e891842&oe=60C5AF12",
                "name": "sexy2.png",
                "mime": "image/png",
                "size": 122342,
                "width": 1080,
                "length": 2040
            }
        },
        "23": {
            "version": 1,
            "href": "http://137.116.132.172:8081/attachment/23",
            "data": {
                "userId": "100",
                "url": "https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/184690308_1636703876522705_1120751707584534709_n.jpg?_nc_cat=102&_nc_map=control&ccb=1-3&_nc_sid=825194&_nc_ohc=LkKarMPYpbUAX_dFutL&_nc_ht=scontent.fhan3-1.fna&oh=02540b3534677ce9c7b67a036625fc94&oe=60C4FE7F",
                "name": "sexy3.png",
                "mime": "image/png",
                "size": 122342,
                "width": 1080,
                "length": 2040
            }
        },
        "24": {
            "version": 1,
            "href": "http://137.116.132.172:8081/attachment/24",
            "data": {
                "userId": "100",
                "url": "https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/185196673_1635029723356787_2116748809590947355_n.jpg?_nc_cat=110&_nc_map=control&ccb=1-3&_nc_sid=b9115d&_nc_ohc=NY0MhUSebhEAX9ckU3q&_nc_ht=scontent.fhan3-1.fna&oh=49b06d200127f4fac5b1cfcabef4fe95&oe=60C5E270",
                "name": "sexy4.png",
                "mime": "image/png",
                "size": 122342,
                "width": 1080,
                "length": 2040
            }
        },
        "25": {
            "version": 1,
            "href": "http://137.116.132.172:8081/attachment/25",
            "data": {
                "userId": "100",
                "url": "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/183337276_1849713325207321_8888494431101349692_n.jpg?_nc_cat=108&_nc_map=control&ccb=1-3&_nc_sid=825194&_nc_ohc=msHWnQgslc4AX8nygA7&_nc_ht=scontent.fhan4-1.fna&oh=e22cbe36c1ee6936d75f68846e940ea5&oe=60C50EE7",
                "name": "sexy5.png",
                "mime": "image/png",
                "size": 122342,
                "width": 1080,
                "length": 2040
            }
        },
        "26": {
            "version": 1,
            "href": "http://137.116.132.172:8081/attachment/26",
            "data": {
                "userId": "100",
                "url": "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/184643748_2946104265613542_8198938875508360380_n.jpg?_nc_cat=105&_nc_map=control&ccb=1-3&_nc_sid=b9115d&_nc_ohc=R3q-HrpNAooAX-mgua-&_nc_ht=scontent.fhan4-1.fna&oh=4a6b94ff197a764a3cccda5c1e2cbe77&oe=60C5AB26",
                "name": "sexy6.png",
                "mime": "image/png",
                "size": 122342,
                "width": 1080,
                "length": 2040
            }
        }
    },
    "HasComment": {
        "1": {
            "minScore": 1612421622876,
            "maxScore": 1612421622876,
            "total": 3,
            "itemIds": [
                "31",
                "37",
                "38",
            ]
        },
        "2": {
            "minScore": 1612421622876,
            "maxScore": 1612421622876,
            "total": 1,
            "itemIds": [
                "32"
            ]
        },
        "3": {
            "minScore": 1612421622876,
            "maxScore": 1612421622876,
            "total": 1,
            "itemIds": [
                "33"
            ]
        },
        "4": {
            "minScore": 1612421622876,
            "maxScore": 1612421622876,
            "total": 1,
            "itemIds": [
                "34"
            ]
        },
        "5": {
            "minScore": 1612421622876,
            "maxScore": 1612421622876,
            "total": 1,
            "itemIds": [
                "35"
            ]
        },
        "6": {
            "minScore": 1612421622876,
            "maxScore": 1612421622876,
            "total": 1,
            "itemIds": [
                "36"
            ]
        }
    },
    "Comment": {
        "31": {
            "version": 1,
            "href": "http://137.116.132.172:8081/commment/31",
            "data": {
                "content": "comment 1"
            }
        },
        "32": {
            "version": 1,
            "href": "http://137.116.132.172:8081/commment/32",
            "data": {
                "content": "comment 2"
            }
        },
        "33": {
            "version": 1,
            "href": "http://137.116.132.172:8081/commment/33",
            "data": {
                "content": "comment 3"
            }
        },
        "34": {
            "version": 1,
            "href": "http://137.116.132.172:8081/commment/34",
            "data": {
                "content": "comment 4"
            }
        },
        "35": {
            "version": 1,
            "href": "http://137.116.132.172:8081/commment/35",
            "data": {
                "content": "comment 5"
            }
        },
        "36": {
            "version": 1,
            "href": "http://137.116.132.172:8081/commment/36",
            "data": {
                "content": "comment 6"
            }
        },
        "37": {
            "version": 1,
            "href": "http://137.116.132.172:8081/commment/36",
            "data": {
                "content": "comment 37"
            }
        },
        "38": {
            "version": 1,
            "href": "http://137.116.132.172:8081/commment/36",
            "data": {
                "content": "comment 38"
            }
        }
    },
    "HasReaction": {
        "1": {
            "minScore": "1612421634628",
            "maxScore": "1612421634644",
            "total": 2,
            "itemIds": [
                "100",
                "101"
            ]
        },
        "5": {
            "minScore": "1612421634628",
            "maxScore": "1612421634628",
            "total": 4,
            "itemIds": [
                "100",
                "101",
                "110",
                "121"
            ]
        },
        "6": {
            "minScore": "1612421634628",
            "maxScore": "1612421634628",
            "total": 1,
            "itemIds": [
                "102",
                "121"
            ]
        }
    }
}

//     "avatar": Images.AVA_M1,
//  }; 
export { PRIVATE_POST, SUCCESS_LOGIN_RESPONSE, MainUser, FollowApi, ListComment, Post }