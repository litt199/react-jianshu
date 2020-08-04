import styled from 'styled-components'

export const  HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`

export const  HomeLeft = styled.div`
    width:625px;
    margin-left:15px;
    padding-top:30px;
    float:left;
    .banner_img{
        width:625px;
        height:270px;
    }
`

export const  HomeRight = styled.div`
    width:280px;
    float:right;
`

export const TopicWrapper = styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-left:-10px;
    border-bottom:1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    float:left;
    background:#f7f7f7;
    margin-left:17px;
    padding-right:10px;
    height:32px;
    line-height:32px;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    margin-bottom:18px;
    .topic_img{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;

    }
    
`
export const ListItem = styled.div`
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden;
    .list_img{
        display:block;
        width:125px;
        height:100px;
        float:right;
        width:125px;
        border-radius:10px;
    }
`

export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        font-size:13px;
        line-height:24px;
        color:#999;
    }
`

export const RecommendWrapper = styled.div`
    margin:30px 0;
    width:280px;
`

export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    
    background:url(${(props)=>props.imgUrl});
    background-size:contain;
`

export const ListMore = styled.div`
    
`
