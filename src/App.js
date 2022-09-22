import styled, { createGlobalStyle } from 'styled-components';
import PostForm from './components/Post';

const GlobalStyle = createGlobalStyle`
  body{
    background-color: powderblue;
    font-family: 'SEBANG_Gothic_Bold';
  }

  @font-face {
    font-family: 'SEBANG_Gothic_Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SEBANG_Gothic_Bold.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;

    hr {
      width: 100%;
      margin-bottom: 30px;
    }
  }
`;

const Box = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 500px;
  height: 700px;
  border: 10px black;
  border-radius: 7%;
  background-color: white;
  box-shadow: 1px 1px 3px 1px #dadce0;
  line-height: 1;
  margin: auto;
`;

const Header = styled.h1`
  flex: 5;
  align-self: center;
`;

const DoingBox = styled.div`
  flex: 30;
  overflow: auto;
`;

const DoneBox = styled.div`
  flex: 30;
  overflow: auto;
`;

const Text = styled.span`
  padding-left: 30px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Box>
        <Header>My To Do List ^^</Header>
        <PostForm />
        <hr />
        <DoingBox>
          <Text>Doing</Text>
        </DoingBox>
        <hr />
        <DoingBox>
          <Text>Done</Text>
        </DoingBox>
      </Box>
    </>
  );
}

export default App;
