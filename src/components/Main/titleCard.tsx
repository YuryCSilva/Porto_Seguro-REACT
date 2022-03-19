import styled from "styled-components";


const Title = styled.h2`
  width: 251px;
  height: 30px;
  white-space: nowrap;
  font: normal normal bold 22px/
      30px Open Sans,
    sans-serif;
  letter-spacing: 0px;
  color: #171717;
  margin-bottom: 17px;
`;

const Line = styled.hr`
    border: 1px solid #F7B53D;
    width: 162px;
    height:2px;
`;

const TitleCard: React.FC = ({ children }) => (
  <>
    <Title>{children}</Title>
    <Line />
  </>
);

export default TitleCard;
