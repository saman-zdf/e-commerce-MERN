import {
  Container,
  Title,
  Description,
  InputContainer,
  Input,
  Button,
} from '../style/NewsLetter';
import SendIcon from '@mui/icons-material/Send';
const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder='Your Email' />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
      <Title></Title>
    </Container>
  );
};

export default NewsLetter;
