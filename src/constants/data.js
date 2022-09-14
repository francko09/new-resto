import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '1000fr',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '1500fr',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '2000fr',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '1500fr',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '2000fr',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '1000fr',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '1500fr',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '2000fr',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '2000fr',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },

];
const pizza = [
  {
    title: 'Aperol Sprtiz',
    price: '5000fr',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '7500fr',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '6000fr',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '7000fr',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  
];
const burger = [
  {
    title: 'Aperol Sprtiz',
    price: '1500fr',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '2500fr',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '2000fr',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '3500fr',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards, burger, pizza };
