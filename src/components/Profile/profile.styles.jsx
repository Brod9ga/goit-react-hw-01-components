import styled from 'styled-components'

export const UserCard = styled.div`
       justify-content: center;
    display: flex;
    text-align: center;
    flex-wrap: nowrap;
    flex-direction: column;

`

export const Avatar = styled.img`
    max-height: 250px;
    
    
`
export const StatsList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
   
`
export const StatsItem = styled.li`
    background-color: #0bdcf8;
    width: 160px;
    height: 80px;
    border-radius: 16px;
    border: 4px;
    
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
:hover{background-color: white;}
;
`