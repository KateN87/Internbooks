import styled from 'styled-components';
import DoorImage from '../../../public/assets/door-image.jpg';

export const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 94vh;
  padding: 10px 30px;
  background-image: url(${DoorImage});
  overflow: hidden;
  background-position: center;
  background-repeat: repeat;
  background-size: cover;

  & p {
    display: flex;
    position: absolute;
    align-self: flex-end;
    bottom: 10px;
  }
`;

export const StyledTextContainer = styled.div`
  width: 50%;
  & h1,
  h2,
  h3,
  p {
    color: #ffffff;
    margin-bottom: 20px;
  }
`;
