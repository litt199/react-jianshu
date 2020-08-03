import React,{Component} from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight

} from './style'

class Home extends Component{
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner_img" src="https://upload.jianshu.io/admin_banners/web_images/4995/af694827b911ab360fe44d5252422109849c5760.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )

    }
}
export default Home;