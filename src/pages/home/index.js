import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import {actionCreators} from './store'
import {BackTop} from './style'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight

} from './style'

class Home extends PureComponent{
    handleScrollTop(){
        window.scrollTo(0,0);
    }
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
                </HomeRight>
                <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData()
        
    }
}
const mapDispath = (dispatch)=>({
    changeHomeData(){
        const action = actionCreators.getHomeInfo()
        dispatch(action)
    }
})
export default connect(null,mapDispath)(Home);