import { Container, Image, Info, Title, Button } from '../style/CategoryItem';

const CategoryItem = ({ item }) => {
  const { img, title } = item;
  return (
    <Container>
      <Image src={img} />
      <Info>
        <Title>{title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
