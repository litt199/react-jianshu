import React,{Component} from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import {actionCreators} from './store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style'
import {Link} from 'react-router-dom'

class Header extends Component{
    render (){
        const {focused,list,handleInputBlur,handleInputFocus}=this.props
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>

                <Nav>
                    <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载App</NavItem>
                        <NavItem className="right">登陆</NavItem>
                        <NavItem className="right">
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={()=>handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</span>
                        {this.getAreaList()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting">
                        <span className="iconfont">&#xe615;</span>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    };
    getAreaList(){
        const {focused,list,page,totalPage,mouseIn,handleMouseEnter,handleMouseLeave,handleChangePage}=this.props;
        const pageList = [];
        const newList= list.toJS();
        if(newList.length){
            for(let i = (page-1)*10;i<page*10;i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }

        if(focused||mouseIn){
            return(
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage)}>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null
        }
    }
}
const mapStateToProps = (state)=>{
    return {
        focused: state.get('header').get('focused'),
        list:state.get('header').get('list'),
        page:state.get('header').get('page'),
        totalPage:state.get('header').get('totalPage'),
        mouseIn:state.get('header').get('mouseIn')
    }
}
const mapDispathToProps = (dispath)=>{
    return {
        handleInputFocus(list){
            (list.size===0)&&dispath(actionCreators.getAreaList());
            dispath(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispath(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispath(actionCreators.mouseEnter())
        },
        handleMouseLeave(){
            dispath(actionCreators.mouseLeave())
        },
        handleChangePage(page,totalPage){
            if(page<totalPage){
                dispath(actionCreators.changePageList(page+1))
            }else {
                dispath(actionCreators.changePageList(1))
            }

        }

    }
}
export default connect(mapStateToProps,mapDispathToProps)(Header);
