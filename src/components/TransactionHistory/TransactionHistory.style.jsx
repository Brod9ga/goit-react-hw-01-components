import styled from 'styled-components';

export const Table = styled.table`
  width: 500px;
  margin: 0 auto;
  padding-bottom: 20px;
`;
export const TableHead = styled.thead`
  background-color: rgb(122, 190, 245);
  color: #fff;
  height: 40px;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const Row = styled.tr`
  :nth-child(even) {
    background-color: rgb(189, 226, 255);
  }

  :nth-child(odd) {
    background-color: rgb(231, 243, 253);
  }

  :hover {
    background-color: #fff;
    box-shadow: 0px 0px 49px 7px rgba(0, 60, 128, 1);
  }
`;
