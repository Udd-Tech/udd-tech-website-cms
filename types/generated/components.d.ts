import type { Schema, Struct } from '@strapi/strapi';

export interface PageAbout extends Struct.ComponentSchema {
  collectionName: 'components_page_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    kuva: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    mainoslause: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Kunnon kova mainoslause'>;
    otsikko: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Otsikko'>;
    teksti: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet'>;
  };
}

export interface PageContact extends Struct.ComponentSchema {
  collectionName: 'components_page_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    lomake: Schema.Attribute.Component<'shared.form', false> &
      Schema.Attribute.Required;
    otsikko: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Ota yhteytt\u00E4'>;
    teksti: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo sem eu laoreet viverra. Curabitur vel turpis a purus tristique accumsan at vel nisl. '>;
  };
}

export interface PageHero extends Struct.ComponentSchema {
  collectionName: 'components_page_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    kuva: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    mainoslause: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Huutava mainoslause'>;
    taustatiedot: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Taustatiedot firmasta: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo sem eu laoreet viverra. Curabitur vel turpis a purus tristique accumsan at vel nisl. Sed eleifend nisi et nulla consequat, eget dictum purus hendrerit.'>;
  };
}

export interface PageProjects extends Struct.ComponentSchema {
  collectionName: 'components_page_projects';
  info: {
    displayName: 'Projects';
  };
  attributes: {
    mainoslause: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Kunnon mainoslause'>;
    otsikko: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Meid\u00E4n projektit'>;
    teksti: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo sem eu laoreet viverra. Curabitur vel turpis a purus tristique accumsan at vel nisl. Sed eleifend nisi et nulla consequat, eget dictum purus hendrerit. Curabitur vel turpis a purus tristique accumsan at vel nisl. Sed eleifend nisi et nulla consequat, eget dictum purus hendrerit.'>;
  };
}

export interface PageServices extends Struct.ComponentSchema {
  collectionName: 'components_page_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    otsikko: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Palvelut'>;
    palvelut: Schema.Attribute.Component<'shared.service', true> &
      Schema.Attribute.Required;
  };
}

export interface SharedForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    aiheet: Schema.Attribute.Component<'shared.subject', true> &
      Schema.Attribute.Required;
    kuvaus: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'>;
    otsikko: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Yhteydenottolomake'>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedProject extends Struct.ComponentSchema {
  collectionName: 'components_shared_projects';
  info: {
    displayName: 'Project';
  };
  attributes: {
    kuvat: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    kuvaus: Schema.Attribute.Text & Schema.Attribute.Required;
    nimi: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    pikkukuva: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedService extends Struct.ComponentSchema {
  collectionName: 'components_shared_services';
  info: {
    displayName: 'Service';
  };
  attributes: {
    kuva: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    kuvaus: Schema.Attribute.Text & Schema.Attribute.Required;
    nimi: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSubject extends Struct.ComponentSchema {
  collectionName: 'components_shared_subjects';
  info: {
    displayName: 'Subject';
  };
  attributes: {
    nimi: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page.about': PageAbout;
      'page.contact': PageContact;
      'page.hero': PageHero;
      'page.projects': PageProjects;
      'page.services': PageServices;
      'shared.form': SharedForm;
      'shared.media': SharedMedia;
      'shared.project': SharedProject;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.service': SharedService;
      'shared.slider': SharedSlider;
      'shared.subject': SharedSubject;
    }
  }
}
