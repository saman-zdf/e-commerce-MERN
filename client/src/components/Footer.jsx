import {
  Container,
  Left,
  Right,
  Center,
  Logo,
  Desc,
  SocialContainer,
  SocialIcon,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment,
} from '../style/Footer';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>The Iconic</Logo>
        <Desc>
          THE ICONIC delivers a stylish and current collection of men, women and
          kids apparel sourced from the most coveted Australian and
          international brands. With everything from dresses to jeans, ankle
          boots to sneakers, watches to wallets, beauty essentials and toys, our
          selection of over 20,000 products has something for every style.
        </Desc>
        <SocialContainer>
          <SocialIcon bg='3b5999'>
            <FacebookOutlinedIcon />
          </SocialIcon>
          <SocialIcon bg='e4405f'>
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon bg='55acee'>
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon bg='e60023'>
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <FmdGoodIcon style={{ marginRight: '10px' }} />
          Mitchel Ave, Yongah Hill, Perth, Wa, Australia
        </ContactItem>
        <ContactItem>
          <PhoneAndroidIcon style={{ marginRight: '10px' }} />
          +61431157370
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: '10px' }} />
          samanfyz68@gmail.com
        </ContactItem>
        {/* <Payment src='https://i.ibb.co/QFvn4z6/payment.png' /> */}
      </Right>
    </Container>
  );
};

export default Footer;
