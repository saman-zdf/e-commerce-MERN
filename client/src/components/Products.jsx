import { Container } from '../style/Products';
import { Product } from '../components';
import { popularProducts } from '../data';
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => {
        return <Product item={item} key={item.id} />;
      })}
    </Container>
  );
};

export default Products;
