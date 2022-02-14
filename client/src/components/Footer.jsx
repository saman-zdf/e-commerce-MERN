import {
  Container,
  Left,
  Right,
  Center,
  Logo,
  Desc,
  SocialContainer,
  SocialIcon,
} from '../style/Footer';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
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
      <Center>Center</Center>
      <Right>Right</Right>
    </Container>
  );
};

export default Footer;
