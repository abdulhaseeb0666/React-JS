import React from 'react'
import Imagecards from './imagecards.jsx'

// const cardsData = [
//   {
//     number: 1,
//     text: "Prime customers that have access to bank credit and are satisfied with the current product",
//     image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
//     button: "Satisfied"
//   },
//   {
//     number: 2,
//     text: "Prime customers that have access to bank credit but are not satisfied with the current service",
//     image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
//     button: "Underserved"
//   },
//   {
//     number: 3,
//     text: "Customers from near-prime and sub-prime segments with no access to bank credit",
//     image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
//     button: "Underbanked"
//   }
// ];

const cardsData = [
  {
    number: 1,
    text: "Prime customers that have access to bank credit and are satisfied with the current product",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    button: "Satisfied"
  },
  {
    number: 2,
    text: "Prime customers that have access to bank credit but are not satisfied with the current service",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    button: "Underserved"
  },
  {
    number: 3,
    text: "Customers from near-prime and sub-prime segments with no access to bank credit",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    button: "Underbanked"
  },
  {
    number: 4,
    text: "Young professionals exploring financial products for the first time",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    button: "New Users"
  },
  {
    number: 5,
    text: "Self-employed individuals with irregular income and limited banking history",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    button: "Self Employed"
  },
  {
    number: 6,
    text: "Rural customers with minimal access to formal banking infrastructure",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    button: "Rural"
  },
  {
    number: 7,
    text: "Students seeking basic financial tools and educational credit products",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    button: "Students"
  },
  {
    number: 8,
    text: "Small business owners looking for short-term working capital solutions",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    button: "SME"
  },
  {
    number: 9,
    text: "Retired individuals focused on savings, pensions, and low-risk investments",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    button: "Retired"
  },
  {
    number: 10,
    text: "Digitally active users preferring app-based banking and instant services",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    button: "Digital First"
  }
];

const rightcontent = () => {
  return (
    <div className='h-130px w-full flex flex-row flex-nowrap justify-between gap-3 overflow-x-auto'>
      {cardsData.map((card, idx) =>
          Imagecards(card, idx)
        )
      }
    </div>
  )
}

export default rightcontent
