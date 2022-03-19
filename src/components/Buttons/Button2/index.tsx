import { Container } from "./styles"

interface ButtonProps{
    color: string
}

const Button2: React.FC<ButtonProps> = ({children, color}) => (
    <Container color={color}>
        {children}
    </Container>
)

export default Button2