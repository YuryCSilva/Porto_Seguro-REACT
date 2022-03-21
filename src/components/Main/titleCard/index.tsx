import { Line, Title } from "./styles";

const TitleCard: React.FC = ({ children }) => (
  <>
    <Title>{children}</Title>
    <Line />
  </>
);

export default TitleCard;
