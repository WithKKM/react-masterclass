import styled, {keyframes} from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;
// styled-component기본 사용법

// const Box = styled.div`
//   background-color: ${props => props.bgColor};
//   width: 100px;
//   height: 100px;
// `;
// // 컴포넌트 변경
// const Circle = styled(Box)`
//   border-radius: 50px;
// `;
// // 컴포넌트 확장
// const Btn = styled.button`
//   color: white;
//   background-color: tomato;
//   border: 0;
//   border-radius: 15px;
// `;
// 버튼 만들기
{
  /* as="?"를 통해 태그를 바꿀 수 있음 */
}
// const Input = styled.input.attrs({required: true, minLength: 10})`
//   background-color: tomato;
// `;
// 속성값 한 번에 넣는 법

const rotationAnimation = keyframes`
0% {
  transform: rotate(0deg);
  border-radius: 0px;
}
50% {
  transform: rotate(360deg);
  border-radius: 100px;
}
100%{
  transform: rotate(0deg);
  border-radius: 0px;
}
`;

const Emoji = styled.span`
  font-size: 36px;
`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 70px;
    }
    &:active {
      opacity: 0;
    }
  }
`;
function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😊</Emoji>
      </Box>
      <Emoji>🔥</Emoji>
    </Wrapper>
  );
}

export default App;
