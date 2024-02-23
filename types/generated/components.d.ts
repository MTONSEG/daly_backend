import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeHeroBanners extends Schema.Component {
  collectionName: 'components_home_hero_banners';
  info: {
    displayName: 'banners';
    icon: 'picture';
    description: '';
  };
  attributes: {
    banner: Attribute.Media;
    url: Attribute.String;
  };
}

export interface ImagesProducts extends Schema.Component {
  collectionName: 'components_images_products';
  info: {
    displayName: 'Products';
    icon: 'picture';
  };
  attributes: {
    url: Attribute.String;
  };
}

export interface ProductTrands extends Schema.Component {
  collectionName: 'components_product_trands';
  info: {
    displayName: 'Trands';
    icon: 'grid';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.hero-banners': HomeHeroBanners;
      'images.products': ImagesProducts;
      'product.trands': ProductTrands;
    }
  }
}
