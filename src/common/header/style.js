import styled from 'styled-components'
import logoPic from '../../static/nav-logo.png'

export const HeaderWrapper = styled.div`
    position:relative;
    height:58px;
    border-bottom:1px solid #f0f0f0;
`
export const Logo = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100px;
    height:56px;
    display:block;
    height:58px;
    background:url(${logoPic});
    background-size:contain;
`
export const Nav = styled.div`
    width:960px;
    height:100%;
    padding-right:70px;
    box-sizing:border-box;
    margin:0 auto;
`
export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`
export const SearchInfo = styled.div`
    position:absolute;
    top:60px;
    left:0px;
    width:240px;
    padding:0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background:#fff;
    
`
export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`
export const SearchInfoSwitch = styled.span`
    float:right;
    font-size:13px;
    cursor:pointer;
    
`
export const SearchInfoItem = styled.a`
    display:block;
    float:left;
    font-size:12px;
    padding:0 5px;
    line-height:20px;
    border:1px solid #ddd;
    color:#787878;
    border-radius:3px;
    margin-right:10px;
    margin-bottom:15px;
`
export const SearchInfoList = styled.div`
    overflow:hidden;
`
export const SearchWrapper = styled.div`
    position:relative;
    float:left;

    .iconfont{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        height:30px;
        line-height:30px;
        text-align:center;
        border-radius:15px;
        &.focused{
            background:#969696;
            color:#fff;
        }
    }
`
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    &.slide-enter{
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
    width:160px;
    height:38px;
    margin-top:9px;
    margin-left:20px;
    padding:0 30px 0 20px;
    border:none;
    box-sizing:border-box;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    &::placeholder{
        color:#666;
    }
    &.focused{
        width:240px;
    }
`
export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`
export const Button = styled.div`
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-size:14px;
    &.reg{
        color:#ea6f5a;
    }
    &.writting{
        color:#fff;
        background:#ec6149;

    }

`
