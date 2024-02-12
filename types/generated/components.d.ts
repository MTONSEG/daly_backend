import type { Schema, Attribute } from '@strapi/strapi';

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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'images.products': ImagesProducts;
    }
  }
}
