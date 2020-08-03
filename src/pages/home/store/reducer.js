import {fromJS} from 'immutable'

const defaultState=fromJS({
    topicList:[{
        id:1,
        title:'社会热点',
        imgUrl:'https://upload-images.jianshu.io/upload_images/2191527-c9410b6490ce7e98?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id:2,
        title:'手绘',
        imgUrl:'https://upload-images.jianshu.io/upload_images/17180993-38f64531580789a1?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }],
    articleList:[{
        id:1,
        title:'撒贝宁说：我对自己的婚姻非常失望',
        desc:'在参加一档节目中,谈到婚姻，撒贝宁公开说道：“我觉得自己的婚姻非常的无望，也没有继续维持下去的必要。”惹得现场观众大吃一惊。 事实上当时马东故意...',
        imgUrl:'https://upload-images.jianshu.io/upload_images/17180993-38f64531580789a1?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }, {
        id:2,
        title:'小撒说：我对自己的婚姻非常失望',
        desc:'在参加一档节目中,谈到婚姻，撒贝宁公开说道：“我觉得自己的婚姻非常的无望，也没有继续维持下去的必要。”惹得现场观众大吃一惊。 事实上当时马东故意...',
        imgUrl:'https://upload-images.jianshu.io/upload_images/9938806-b38571295b143fcf?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id:3,
        title:'我对自己的婚姻非常失望',
        desc:'在参加一档节目中,谈到婚姻，撒贝宁公开说道：“我觉得自己的婚姻非常的无望，也没有继续维持下去的必要。”惹得现场观众大吃一惊。 事实上当时马东故意...',
        imgUrl:'https://upload-images.jianshu.io/upload_images/9070317-667ffcc6ed135166.JPEG?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }],
    recommendList:[{
        id:1,
        imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    },{
        id:2,
        imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },{
        id:3,
        imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },{
        id:4,
        imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    }]
});
export default (state=defaultState,action)=>{
    switch (action.type) {
        default:
            return state
    }

}