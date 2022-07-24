const { default: Axios } = require('axios');
const fs = require('fs');
const sesid = "14657018766%3AMeGdfyO2zxSD8Q%3A4"

function getUser(username) {
    return new Promise((resolve, reject) => {
        try {
            Axios.get('https://www.instagram.com/' + username + '/?__a=1', {
                headers: {
                    Cookie: `sessionid=${sesid}`
                }
            }).then(({ data }) => {
                const user = data.graphql.user
                // console.log(data)
                // console.log(user.biography)
                resolve({
                    // link: URL.replace('/?__a=1', ''),
                    id: user.id,
                    biography: user.biography,
                    subscribersCount: user.edge_followed_by.count,
                    subscribtions: user.edge_follow.count,
                    fullName: user.full_name,
                    highlightCount: user.highlight_reel_count,
                    isBusinessAccount: user.is_business_account,
                    isRecentUser: user.is_joined_recently,
                    accountCategory: user.business_category_name,
                    linkedFacebookPage: user.connected_fb_page,
                    isPrivate: user.is_private,
                    isVerified: user.is_verified,
                    profilePic: user.profile_pic_url,
                    profilePicHD: user.profile_pic_url_hd,
                    username: user.username,
                    postsCount: user.edge_owner_to_timeline_media.count,
                    posts: user.edge_owner_to_timeline_media.edges.map(edge => {
                        let hasCaption = edge.node.edge_media_to_caption.edges[0];
                        return {
                        id: edge.node.id,
                        shortCode: edge.node.shortcode,
                        url: `https://www.instagram.com/p/${edge.node.shortcode}/`,
                        dimensions: edge.node.dimensions,
                        imageUrl: edge.node.display_url,
                        isVideo: edge.node.is_video,
                        caption: hasCaption ? hasCaption.node.text : '',
                        commentsCount: edge.node.edge_media_to_comment.count,
                        commentsDisabled: edge.node.comments_disabled,
                        timestamp: edge.node.taken_at_timestamp,
                        likesCount: edge.node.edge_liked_by.count,
                        location: edge.node.location,
                        children: edge.node.edge_sidecar_to_children ? edge.node.edge_sidecar_to_children.edges.map(edge => {
                            return {
                            id: edge.node.id,
                            shortCode: edge.node.shortcode,
                            dimensions: edge.node.dimensions,
                            imageUrl: edge.node.display_url,
                            isVideo: edge.node.is_video,
                                }
                            }) : []
                        }
                    }) || []
                });
            }).catch(() => resolve({ status: 404 }))
        } catch (e) {
            console.log(e)
        }
    })
}




function getPost(code) {
    return new Promise(function (resolve, reject) {
        if (!code) return reject(new Error('Argument "code" must be specified'));

        Axios.get('https://www.instagram.com/p/' + code + '/?__a=1', {
                headers: {
                    Cookie: `sessionid=${sesid}`
                }
            }).then(({ data }) => {
            const post = data.graphql.shortcode_media
            const tipe = post.__typename
            anu = [];
            if (tipe === 'GraphImage') {
                anu.push({
                    type: 'image',
                    url: data.graphql.shortcode_media.display_url
                });
            } else if (tipe === 'GraphVideo') {
                anu.push({
                    type: 'video',
                    thumbnail: data.graphql.shortcode_media.display_url,
                    url: data.graphql.shortcode_media.video_url
                });
            } else if (tipe === 'GraphSidecar') {
                type = 'campuran'
                data.graphql.shortcode_media.edge_sidecar_to_children.edges.map((item) => {
                    if (item.node.__typename == 'GraphImage') {
                        anu.push({
                            type: 'image',
                            url: item.node.display_url
                        });
                    }
                    if (item.node.__typename == 'GraphVideo') {
                        anu.push({
                            type: 'video',
                            thumbnail: item.node.display_url,
                            url: item.node.video_url
                        });
                    }
                });
            };
            resolve({
                media_id: post.id,
                shortcode: post.shortcode,
                text: post.accessibility_caption,
                capt: post.edge_media_to_caption.edges[0] ? post.edge_media_to_caption.edges[0].node.text : '',
                post: anu,
                owner_user: post.owner.username,
                date: post.taken_at_timestamp,
            })
        }).catch(() => resolve({ status: 404 }))
    });
}

function searchUser(query) {
    return new Promise((resolve, reject) => {
        Axios.get('https://www.instagram.com/web/search/topsearch/?query=' + query , {
                headers: {
                    Cookie: `sessionid=${sesid}`
                }
            }).then(({ data }) => {
                const all = data.users
                const result = []
                for (let i = 0; i < all.length; i++) {
                    result.push({
                        number: all[i].position + 1,
                        pk_id: all[i].user.pk,
                        username: all[i].user.username,
                        name: all[i].user.full_name,
                        latest_reel: all[i].user.latest_reel_media,
                        is_private: all[i].user.is_private,
                        is_verified: all[i].user.is_verified,
                        pic: all[i].user.profile_pic_url
                    })
                }
                resolve(result)
            }).catch(reject)
    })
}

function igstory (username) {
    return new Promise((resolve, reject) => {
    require("axios")({ 
	    url: "https://www.instagramsave.com/",
	    method: "GET",
	    headers: {
		"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36"
	    }
	}).then((response) => {
	Promise.all([require("axios")({
		url: "https://www.instagramsave.com/system/action.php",
		method: "POST",
		headers: {
		    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36",
		    "cookie": response.headers["set-cookie"][0].split(";")[0]
		},
		data: new URLSearchParams(Object.entries({
		    url: "https://www.instagram.com/"+username,
		    action: "story",
		    token: String((require("cheerio")).load(response.data)("#token").attr("value")),
		    json: ""
		}))
	    })]).then((respon) => {
		 resolve(respon[0].data)
	    })
	})
  })
}

module.exports.getUser = getUser
module.exports.getPost = getPost
module.exports.searchUser = searchUser
module.exports.igstory = igstory