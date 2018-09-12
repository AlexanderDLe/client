import React from 'react';
import { Container, Row } from 'reactstrap';
import PortfolioGalleryItem from './PortfolioGalleryItem';

export default () => {
  return (
    <Container className="conditional-padding">
      <Row className="center-items-horizontally">
        <PortfolioGalleryItem num="1" />
        <PortfolioGalleryItem num="2" />
        <PortfolioGalleryItem num="3" />
        <PortfolioGalleryItem num="4" />
      </Row>
    </Container>
  );
};
