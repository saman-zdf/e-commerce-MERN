import { useEffect, useState } from 'react';
import { Container } from '../style/Products';
import { Product } from '../components';
import { popularProducts } from '../data';
import axios from 'axios';
const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/v1/products');
        console.log(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [cat]);
  return (
    <Container>
      {popularProducts.map((item) => {
        return <Product item={item} key={item.id} />;
      })}
    </Container>
  );
};

export default Products;
