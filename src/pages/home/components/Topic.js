import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {TopicWrapper,TopicItem }from '../style'

class Topic extends Component {
    render () {
        const {list} = this.props
        return (
            <TopicWrapper>
                {
                    list.map((item)=>{
                        console.log(item)
                        return (
                            <TopicItem key={item.get('id')}>
                                <img className='topic_img'
                                     src={item.get('imgUrl')}
                                     alt=""/>
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }

            </TopicWrapper>
        )
    }
}
const mapState = (state)=>({
    list:state.get('home').get('topicList'),
})
export  default  connect(mapState,null)(Topic);