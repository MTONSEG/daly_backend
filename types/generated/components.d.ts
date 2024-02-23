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

export interface ProductProperties extends Schema.Component {
  collectionName: 'components_product_properties';
  info: {
    displayName: 'Properties';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    memory: Attribute.String;
    ram: Attribute.String;
    resolution: Attribute.String;
    color: Attribute.String;
    cpu: Attribute.String;
    diagonale: Attribute.String;
    display: Attribute.String;
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
      'product.properties': ProductProperties;
      'product.trands': ProductTrands;
    }
  }
}
