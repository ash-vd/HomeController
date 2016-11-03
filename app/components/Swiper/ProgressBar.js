import styled from 'styled-components';

const ProgressBar = styled.div`
  width: 80%;
  left: 50%;
  transform: translateX(-50%);
  height: .5em;
  background: #10c1a2;
  position: relative;

  &:after {
    position: absolute;
    content: '';
    height: 100%;
    transform: translateX(${(props) => (props.currentIndex * 100)}%);
    width: ${(props) => 100 / props.total}%
    background: #ffffff;
    transition: transform 300ms;
  }
`;

export default ProgressBar;
