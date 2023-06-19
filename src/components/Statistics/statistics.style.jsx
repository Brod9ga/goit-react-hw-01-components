import styled from "styled-components";

export const StatList = styled.ul`
    display: flex;
    list-style: none;
    
    border: 4px ;
    border-color: black;
    justify-content: center;
`
export const Title = styled.h2`
text-align: center;
background-color: #fff;
;
`


export const Item = styled.li`
  width: 99px;
  height: 99px;
  display: grid;
  gap: 8px;
  justify-items: center;
  align-content: center;
  flex-wrap: nowrap;
  border: 1px solid rgb(214, 214, 214);
  background-color: ${props => props.color};
`;