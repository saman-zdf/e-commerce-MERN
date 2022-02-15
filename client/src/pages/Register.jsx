import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  Button,
} from '../style/Register';

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder='name' />
          <Input placeholder='last name' />
          <Input placeholder='username' />
          <Input placeholder='email' />
          <Input placeholder='password' />
          <Input placeholder='confirm password' />
          <Agreement>
            By creating an account, I consent to the processing of personal data
            in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
