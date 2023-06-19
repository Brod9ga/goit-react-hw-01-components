import styled from "styled-components";


export const FriendCard = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 4px
    ;

` 
export const FriendCardItem = styled.li`
width: 800px;
display: flex;
gap: 24px;
align-items: center;
background-color: aqua;
`
export const IsOnline = styled.span`
 margin-left: 24px;
 border-radius: 50%;
 
 width: 16px;
    height: 16px;
   background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`