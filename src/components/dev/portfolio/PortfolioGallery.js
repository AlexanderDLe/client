import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import PortfolioGalleryItem from './PortfolioGalleryItem';
import XAN from './XAN';
import VVN from './VVN';
import GRSI from './GRSI';
import Lambada from './Lambada';

export default class PortfolioGallery extends Component {
  constructor() {
    super();

    this.state = {
      gallerySelect: <VVN />
    };

    this.selectXANOnClick = this.selectXANOnClick.bind(this);
    this.selectVVNOnClick = this.selectVVNOnClick.bind(this);
    this.selectLambadaOnClick = this.selectLambadaOnClick.bind(this);
    this.selectGRSIOnClick = this.selectGRSIOnClick.bind(this);
  }
  selectXANOnClick() {
    this.setState({ gallerySelect: <XAN /> });
  }
  selectVVNOnClick() {
    this.setState({ gallerySelect: <VVN /> });
  }
  selectLambadaOnClick() {
    this.setState({ gallerySelect: <Lambada /> });
  }
  selectGRSIOnClick() {
    this.setState({ gallerySelect: <GRSI /> });
  }
  render() {
    const { gallerySelect } = this.state;
    return (
      <Container className="conditional-padding">
        <div className="portfolio-gallery-select">
          {gallerySelect ? gallerySelect : 'Loading'}
        </div>
        <Row className="center-items-horizontally">
          <PortfolioGalleryItem onClick={this.selectVVNOnClick} num="2" />
          <PortfolioGalleryItem onClick={this.selectXANOnClick} num="1" />
          <PortfolioGalleryItem onClick={this.selectGRSIOnClick} num="3" />
          <PortfolioGalleryItem onClick={this.selectLambadaOnClick} num="4" />
        </Row>
      </Container>
    );
  }
}
