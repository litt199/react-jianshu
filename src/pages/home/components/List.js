import React ,{PureComponent} from 'react'
import {ListItem,ListInfo,ListMore} from '../style'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import {Link} from 'react-router-dom'

class List extends PureComponent{
    render(){
        const {list,getMoreList,page} = this.props;
        return(
            <div>
                {
                    list.map((item,index)=>{
                        return(
                            <Link key={index} to={'./detail/'+item.get('id')}>
                            <ListItem>
                                <img className='list_img' src={item.get("imgUrl")} alt=""/>
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                            </Link>
                            
                        )
                    })
                }
                <ListMore onClick={()=>getMoreList(page)}>更多文章</ListMore>

            </div>

        )
    }
}
const mapState = (state)=>({
    // list:state.get('home').get('articleList')
    list:state.getIn(['home','articleList']),
    page:state.getIn(['home','articlePage'])
});
const mapDispatch=(dispatch)=>({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page))
    }
})
export default connect(mapState,mapDispatch)(List);
