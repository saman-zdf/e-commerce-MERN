import { Container } from '../style/Categories';
import { categories } from '../data';
import { CategoryItem } from '.';
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => {
        return <CategoryItem key={item.id} item={item} />;
      })}
    </Container>
  );
};

export default Categories;
