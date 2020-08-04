import React ,{Component} from 'react'
import {ListItem,ListInfo,ListMore} from '../style'
import {connect} from 'react-redux'

class List extends Component{
    render(){
        const {list} = this.props;
        return(
            <div>
                {
                    list.map((item)=>{
                        return(
                            <ListItem key={item.get('id')}>
                                <img className='list_img' src={item.get("imgUrl")} alt=""/>
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                            
                        )
                    })
                }
                <ListMore>加载更多</ListMore>

            </div>

        )
    }
}
const mapState = (state)=>({
    // list:state.get('home').get('articleList')
    list:state.getIn(['home','articleList'])
})
export default connect(mapState,null)(List);
