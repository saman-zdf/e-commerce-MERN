import { Container, Circle, Image, Info, Icon } from '../style/Product';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Product = ({ item: { img } }) => {
  return (
    <Container>
      <Circle />
      <Image src={img} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <SearchOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;