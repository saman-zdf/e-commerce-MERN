import { Link } from 'react-router-dom';
import { Container, Image, Info, Title, Button } from '../style/CategoryItem';

const CategoryItem = ({ item }) => {
  const { img, title, cat } = item;
  return (
    <Container>
      <Link to={`/products/${cat}`}>
        <Image src={img} />
        <Info>
          <Title>{title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
