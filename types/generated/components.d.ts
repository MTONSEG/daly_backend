import type { Schema, Attribute } from '@strapi/strapi';

export interface CatalogBrands extends Schema.Component {
  collectionName: 'components_catalog_brands';
  info: {
    displayName: 'brands';
    icon: 'priceTag';
    description: '';
  };
  attributes: {
    brand: Attribute.Relation<'catalog.brands', 'oneToOne', 'api::brand.brand'>;
    active: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface CatalogCategories extends Schema.Component {
  collectionName: 'components_catalog_categories';
  info: {
    displayName: 'categories';
    icon: 'apps';
    description: '';
  };
  attributes: {
    category: Attribute.Relation<
      'catalog.categories',
      'oneToOne',
      'api::category.category'
    >;
    active: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface CatalogOptions extends Schema.Component {
  collectionName: 'components_catalog_options';
  info: {
    displayName: 'Options';
    icon: 'grid';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    active: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

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

export interface ProductProducts extends Schema.Component {
  collectionName: 'components_product_products';
  info: {
    displayName: 'products';
    icon: 'bulletList';
  };
  attributes: {
    product: Attribute.Relation<
      'product.products',
      'oneToOne',
      'api::product.product'
    >;
    quantity: Attribute.Integer;
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
      'catalog.brands': CatalogBrands;
      'catalog.categories': CatalogCategories;
      'catalog.options': CatalogOptions;
      'home.hero-banners': HomeHeroBanners;
      'images.products': ImagesProducts;
      'product.products': ProductProducts;
      'product.properties': ProductProperties;
      'product.trands': ProductTrands;
    }
  }
}
