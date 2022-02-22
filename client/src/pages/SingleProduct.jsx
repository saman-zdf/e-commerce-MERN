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
import axios from 'axios';
import { publicRequest } from '../apiRequest';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async (id) => {
      const res = await publicRequest.get(`/products/find/${id}`);
      setProduct(res.data);
    };
    getProduct(id);
  }, [id]);

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
              {product.color.map((clr) => (
                <FilterColor color={clr} key={clr} />
              ))}
              <FilterColor color='red' />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                {product.size.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{ cursor: 'pointer' }} />
              <Amount>1</Amount>
              <Add style={{ cursor: 'pointer' }} />
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
