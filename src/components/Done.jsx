import styled from 'styled-components';

const ListContainer = styled.ul`
  flex: 30;
  overflow: auto;
  margin: 0;
  padding-left: 0;
  overflow: auto;

  li {
    list-style-type: none;
  }
`;

const Done = () => {
  return <ListContainer />;
};

export default Done;