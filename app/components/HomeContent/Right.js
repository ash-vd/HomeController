import styled from 'styled-components';

const Right = styled.div`
  position: relative;
  padding-top: 1em;
  flex: 5;

  &:before {
    position: absolute;
    content: '';
    height: .5em;
    width: 10em;
    background: #1aa28a;
    top: 0;
  }
`;

export default Right;
