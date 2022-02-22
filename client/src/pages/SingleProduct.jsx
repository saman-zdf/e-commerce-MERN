import { useEffect, useState } from 'react';
import { Add, Remove } from '@mui/icons-material';
import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterContainer,
  Filter,
  FilterColor,
  FilterSizeOption,
  FilterSize,
  FilterTitle,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
} from '../style/SingleProduct';
import { Announcement, Navbar, NewsLetter, Footer } from '../components';
import { useParams } from 'react-router-dom';
import { publicRequest } from '../apiRequest';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  useEffect(() => {
    const getProduct = async (id) => {
      const res = await publicRequest.get(`/products/find/${id}`);
      setProduct(res.data);
    };
    getProduct(id);
  }, [id]);
  console.log(size, color);
  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  // const handleClick = () => {};

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.image && product.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((clr) => (
                <FilterColor
                  color={clr}
                  key={clr}
                  onClick={() => setColor(clr)}
                />
              ))}
              <FilterColor color='red' />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                style={{ cursor: 'pointer' }}
                onClick={() => handleQuantity('dec')}
              />
              <Amount>{quantity}</Amount>
              <Add
                style={{ cursor: 'pointer' }}
                onClick={() => handleQuantity('inc')}
              />
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
