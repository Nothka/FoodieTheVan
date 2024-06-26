// import React, { useState, useEffect } from "react";
// import './Menu.css';
// import CardItem from '../CardItem';
// import Footer from "../Footer";
// import TuneIcon from '@mui/icons-material/Tune';

// const Menu = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [isMenuVisible, setIsMenuVisible] = useState(false);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     toggleMenu();
//   };

//   const toggleMenu = () => {
//     setIsMenuVisible(!isMenuVisible);
//   };

//   const categories = ['All', 'Burger', 'Sandwich', 'Tortilla','Salad','Fries&Chicken','Pancakes'];

//   useEffect(() => {
//     setSelectedCategory('All');
//   }, []);

//   const items = [
//     {
//               src: '/images/cheeseburger.jpeg',
//               text: 'Indulge in perfection, savor every bite, our signature Cheeseburger is a masterpiece that turns hunger into a delight',
//               label: '28 LEI',
//               category: 'Burger',
//               details: {
//                 kcal: 500,
//                 allergies: 'all',
//                 description: 'Delicious cheeseburger description.',
//               },
//             },
//             {
//               src: '/images/chicken-salad.jpeg',
//               text: 'Elevate your palate with our Chicken Salad – a fresh, vibrant medley of flavors that transforms every bite into a wholesome and delicious experience',
//               label: '33 LEI',
//               category: 'Salad',
//               details: {
//                 kcal: 500,
//                 allergies: 'all',
//                 description: 'Delicious cheeseburger description.',
//               },
//             },
//             {
//               src: '/images/burger-3.jpeg',
//               text: 'Savor the crunch and delight in every bite with our Crispy Burger – a symphony of crispy perfection that takes your taste buds on a tantalizing journey',
//               label: '31 LEI',
//               category: 'Burger',
//               details: {
//                 kcal: 500,
//                 allergies: 'all',
//                 description: 'Delicious cheeseburger description.',
//               },
//             },
//             {
//               src: '/images/burger-4.jpeg',
//               text: 'Embark on a gourmet adventure with our Foodie Burger – a symphony of flavors crafted to satisfy the cravings of every true food enthusiast',
//               label: '33 LEI',
//               category: 'Burger',
//               details: {
//                 kcal: 500,
//                 allergies: 'all',
//                 description: 'Delicious cheeseburger description.',
//               },
//             },
//             {
//               src: '/images/crispy-chicken-tortilla.jpeg',
//               text: 'Crunch into culinary bliss with our Chicken Crispy Tortilla – where savory meets crunchy in a symphony of flavors that will have your taste buds dancing with delight',
//               label: '31 LEI',
//               category: 'Tortilla',
//               details: {
//                 kcal: 500,
//                 allergies: 'all',
//                 description: 'Delicious cheeseburger description.',
//               },
//             },
//             {
//               src: '/images/special-grilled-cheese.jpeg',
//               text: 'Embrace the extraordinary with our Special Grilled Cheese – a melt-in-your-mouth masterpiece that turns every bite into a celebration of gooey, savory perfection',
//               label: '22 LEI',
//               category: 'Burger',
//               details: {
//                 kcal: 500,
//                 allergies: 'all',
//                 description: 'Delicious cheeseburger description.',
//               },
//             },
//             {
//               src: '/images/loaded-fries.jpeg',
//               text: 'Indulge in pure satisfaction with our Loaded Fries – a flavor-packed fiesta that turns ordinary fries into an extraordinary experience, loaded with savory delights in every crispy bite',
//               label: '31 LEI',
//               category: 'Fries&Chicken',
//               details: {
//                 kcal: 500,
//                 allergies: 'all',
//                 description: 'Delicious cheeseburger description.',
//               },
//             },
//             {
//               src: '/images/halloumi-salad.jpeg',
//               text: 'Savor the crunch and delight in every bite with our Crispy Burger – a symphony of crispy perfection that takes your taste buds on a tantalizing journey',
//               label: '31 LEI',
//               category: 'Salad',
//               details: {
//                 kcal: 500,
//                 allergies: 'all',
//                 description: 'Delicious cheeseburger description.',
//               },
//             },
//             {
//               src: '/images/egg-toast-sandwich.jpeg',
//               text: 'Embark on a gourmet adventure with our Foodie Burger – a symphony of flavors crafted to satisfy the cravings of every true food enthusiast',
//               label: '24 LEI',
//               category: 'Sandwich',
//               details: {
//                 kcal: 500,
//                 allergies: 'all',
//                 description: 'Delicious cheeseburger description.',
//               },
//             },
//             {
//               src: '/images/pulled-pork-tortilla.jpeg',
//               text: 'Satisfy your cravings with our Pulled Pork Tortilla – a savory sensation wrapped in perfection, where tender pulled pork meets the rich flavors of a tortilla for a taste adventure like no other',
//               label: '34 LEI',
//               category: 'Tortilla',
//               details: {
//                 kcal: 500,
//                 allergies: 'all',
//                 description: 'Delicious cheeseburger description.',
//               },
//             },
//             {
//               src: '/images/chicken-breast-tortilla.jpeg',
//               text: 'Delight in culinary elegance with our Grilled Chicken Tortilla – a harmonious fusion of succulent chicken and savory delights, wrapped in a tortilla for a taste that transcends the ordinary',
//               label: '31 LEI',
//               category: 'Tortilla',
//               details: {
//                 kcal: 500,
//                 allergies: 'all',
//                 description: 'Delicious cheeseburger description.',
//               },
//             },
//             {
//               src: '/images/pulled-pork-sandwich.jpeg',
//               text: 'Embark on a flavor journey with our Pulled Pork Sandwich – a symphony of slow-cooked perfection, where tender pulled pork meets soft, pillowy bread, creating a sandwich experience that is truly exceptional',
//               label: '32LEI',
//               category: 'Sandwich',
//               details: {
//                 kcal: 500,
//                 allergies: 'all',
//                 description: 'Delicious cheeseburger description.',
//               },
//             },
//             {
//               src: '/images/crispy-menu.jpeg',
//               text: 'Crispy cravings meet culinary innovation in our Crispy Menu – a tantalizing selection that promises to elevate your taste experience with a delightful crunch in every bite. Explore crispy perfection like never before',
//               label: '31 LEI',
//               category: 'Fries&Chicken',
//               details: {
//                 kcal: 500,
//                 allergies: 'all',
//                 description: 'Delicious cheeseburger description.',
//               },
//             },
//             {
//               src: '/images/blue-cheese-burger.jpeg',
//               text: 'Embark on a gourmet adventure with our Foodie Burger – a symphony of flavors crafted to satisfy the cravings of every true food enthusiast',
//               label: '32 LEI',
//               category: 'Burger',
//               details: {
//                 kcal: 500,
//                 allergies: 'all',
//                 description: 'Delicious cheeseburger description.',
//               },
//             },
//             {
//               src: '/images/nutella-banana-pancake.jpeg',
//               text: 'Awaken your taste buds with our Nutella Banana Biscuit Pancake – a breakfast sensation that brings together the richness of Nutella, bananas, and the delightful crunch of biscuits.',
//               label: 'Random Price',
//               category: 'Pancakes',
//               details: {
//                 kcal: 390,
//                 allergies: 'all',
//                 description: 'Delicious cheeseburger description.',
//               },
//             },
          
//   ];

//   const filteredItems = selectedCategory !== 'All'
//     ? items.filter(item => item.category === selectedCategory)
//     : items;

//   const itemsPerPage = 5;

//   const groupedItems = [];
//   for (let i = 0; i < filteredItems.length; i += itemsPerPage) {
//     groupedItems.push(filteredItems.slice(i, i + itemsPerPage));
//   }

//   return (
//     <>
//       <div>
//         <h1 className="title">MENU</h1>
//         <div className={`filter ${isMenuVisible ? 'open' : ''}`}>
//           <TuneIcon className="style" onClick={toggleMenu} />
//           {isMenuVisible && (
//             <div className="category-menu">
//               {categories.map((category, index) => (
//                 <span
//                   key={index}
//                   className={`category-button ${selectedCategory === category ? 'active' : ''}`}
//                   onClick={() => handleCategoryClick(category)}
//                 >
//                   {category}
//                 </span>
//               ))}
//             </div>
//           )}
//         </div>
//         <div className="menu">
//           {groupedItems.map((group, groupIndex) => (
//             <ul key={groupIndex} className='cards__items'>
//               {group.map((item, index) => (
//                 <CardItem
//                   key={index}
//                   src={item.src}
//                   text={item.text}
//                   label={item.label}
//                   category={item.category}
//                   details={item.details}
//                 />
//               ))}
//             </ul>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Menu;

import React, { useState, useEffect } from "react";
import './Menu.css';
import CardItem from '../CardItem';
import Footer from "../Footer";
import TuneIcon from '@mui/icons-material/Tune';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    toggleMenu();
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const updateItemsPerPage = () => {
    const width = window.innerWidth;
    if(width <=1342 && width >= 1024){
      setItemsPerPage(4);
    }
    else if (width <= 1024 && width >= 768) {
      setItemsPerPage(3);
    } else if (width <=768 && width >= 574) {
      setItemsPerPage(2);
    }
    else if (width <= 574) {
      setItemsPerPage(1);
    }
    else{
      setItemsPerPage(5)
    }
  };

  useEffect(() => {
    setSelectedCategory('All');
    updateItemsPerPage();

    // Add event listener to update itemsPerPage on window resize
    window.addEventListener('resize', updateItemsPerPage);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  const categories = ['All', 'Burger', 'Sandwich', 'Tortilla','Salad','Fries&Chicken','Pancakes'];

  const items = [
        {
                  src: '/images/cheeseburger.jpeg',
                  text: 'Indulge in perfection, savor every bite, our signature Cheeseburger is a masterpiece that turns hunger into a delight',
                  label: '28 LEI',
                  category: 'Burger',
                  details: {
                    kcal: 820,
                    allergies: 'all',
                    description: 'Delicious cheeseburger description.',
                  },
                },
                {
                  src: '/images/chicken-salad.jpeg',
                  text: 'Elevate your palate with our Chicken Salad – a fresh, vibrant medley of flavors that transforms every bite into a wholesome and delicious experience',
                  label: '33 LEI',
                  category: 'Salad',
                  details: {
                    kcal: 700,
                    allergies: 'all',
                    description: 'Delicious cheeseburger description.',
                  },
                },
                {
                  src: '/images/burger-3.jpeg',
                  text: 'Savor the crunch and delight in every bite with our Crispy Burger – a symphony of crispy perfection that takes your taste buds on a tantalizing journey',
                  label: '31 LEI',
                  category: 'Burger',
                  details: {
                    kcal: 604,
                    allergies: 'all',
                    description: 'Delicious cheeseburger description.',
                  },
                },
                {
                  src: '/images/burger-4.jpeg',
                  text: 'Embark on a gourmet adventure with our Foodie Burger – a symphony of flavors crafted to satisfy the cravings of every true food enthusiast',
                  label: '33 LEI',
                  category: 'Burger',
                  details: {
                    kcal: 721,
                    allergies: 'all',
                    description: 'Delicious cheeseburger description.',
                  },
                },
                {
                  src: '/images/crispy-chicken-tortilla.jpeg',
                  text: 'Crunch into culinary bliss with our Chicken Crispy Tortilla – where savory meets crunchy in a symphony of flavors that will have your taste buds dancing with delight',
                  label: '31 LEI',
                  category: 'Tortilla',
                  details: {
                    kcal: 520,
                    allergies: 'all',
                    description: 'Delicious cheeseburger description.',
                  },
                },
                {
                  src: '/images/special-grilled-cheese.jpeg',
                  text: 'Embrace the extraordinary with our Special Grilled Cheese – a melt-in-your-mouth masterpiece that turns every bite into a celebration of gooey, savory perfection',
                  label: '22 LEI',
                  category: 'Burger',
                  details: {
                    kcal: 810,
                    allergies: 'all',
                    description: 'Delicious cheeseburger description.',
                  },
                },
                {
                  src: '/images/loaded-fries.jpeg',
                  text: 'Indulge in pure satisfaction with our Loaded Fries – a flavor-packed fiesta that turns ordinary fries into an extraordinary experience, loaded with savory delights in every crispy bite',
                  label: '31 LEI',
                  category: 'Fries&Chicken',
                  details: {
                    kcal: 530,
                    allergies: 'all',
                    description: 'Delicious cheeseburger description.',
                  },
                },
                {
                  src: '/images/halloumi-salad.jpeg',
                  text: 'Savor the crunch and delight in every bite with our Crispy Burger – a symphony of crispy perfection that takes your taste buds on a tantalizing journey',
                  label: '31 LEI',
                  category: 'Salad',
                  details: {
                    kcal: 553,
                    allergies: 'all',
                    description: 'Delicious cheeseburger description.',
                  },
                },
                {
                  src: '/images/egg-toast-sandwich.jpeg',
                  text: 'Embark on a gourmet adventure with our Foodie Burger – a symphony of flavors crafted to satisfy the cravings of every true food enthusiast',
                  label: '24 LEI',
                  category: 'Sandwich',
                  details: {
                    kcal: 612,
                    allergies: 'all',
                    description: 'Delicious cheeseburger description.',
                  },
                },
                {
                  src: '/images/pulled-pork-tortilla.jpeg',
                  text: 'Satisfy your cravings with our Pulled Pork Tortilla – a savory sensation wrapped in perfection, where tender pulled pork meets the rich flavors of a tortilla for a taste adventure like no other',
                  label: '34 LEI',
                  category: 'Tortilla',
                  details: {
                    kcal: 345,
                    allergies: 'all',
                    description: 'Delicious cheeseburger description.',
                  },
                },
                {
                  src: '/images/chicken-breast-tortilla.jpeg',
                  text: 'Delight in culinary elegance with our Grilled Chicken Tortilla – a harmonious fusion of succulent chicken and savory delights, wrapped in a tortilla for a taste that transcends the ordinary',
                  label: '31 LEI',
                  category: 'Tortilla',
                  details: {
                    kcal: 532,
                    allergies: 'all',
                    description: 'Delicious cheeseburger description.',
                  },
                },
                {
                  src: '/images/pulled-pork-sandwich.jpeg',
                  text: 'Embark on a flavor journey with our Pulled Pork Sandwich – a symphony of slow-cooked perfection, where tender pulled pork meets soft, pillowy bread, creating a sandwich experience that is truly exceptional',
                  label: '32LEI',
                  category: 'Sandwich',
                  details: {
                    kcal: 802,
                    allergies: 'all',
                    description: 'Delicious cheeseburger description.',
                  },
                },
                {
                  src: '/images/crispy-menu.jpeg',
                  text: 'Crispy cravings meet culinary innovation in our Crispy Menu – a tantalizing selection that promises to elevate your taste experience with a delightful crunch in every bite. Explore crispy perfection like never before',
                  label: '31 LEI',
                  category: 'Fries&Chicken',
                  details: {
                    kcal: 445,
                    allergies: 'all',
                    description: 'Delicious cheeseburger description.',
                  },
                },
                {
                  src: '/images/blue-cheese-burger.jpeg',
                  text: 'Embark on a gourmet adventure with our Foodie Burger – a symphony of flavors crafted to satisfy the cravings of every true food enthusiast',
                  label: '32 LEI',
                  category: 'Burger',
                  details: {
                    kcal: 532,
                    allergies: 'all',
                    description: 'Delicious cheeseburger description.',
                  },
                },
                {
                  src: '/images/nutella-banana-pancake.jpeg',
                  text: 'Awaken your taste buds with our Nutella Banana Biscuit Pancake – a breakfast sensation that brings together the richness of Nutella, bananas, and the delightful crunch of biscuits.',
                  label: 'Random Price',
                  category: 'Pancakes',
                  details: {
                    kcal: 390,
                    allergies: 'all',
                    description: 'Delicious cheeseburger description.',
                  },
                },
              
      ];

  const filteredItems = selectedCategory !== 'All'
    ? items.filter(item => item.category === selectedCategory)
    : items;

  const groupedItems = [];
  for (let i = 0; i < filteredItems.length; i += itemsPerPage) {
    groupedItems.push(filteredItems.slice(i, i + itemsPerPage));
  }

  return (
    <>
      <div>
        <h1 className="title">MENU</h1>
        <div className={`filter ${isMenuVisible ? 'open' : ''}`}>
          <TuneIcon className="style" onClick={toggleMenu} />
          {isMenuVisible && (
            <div className="category-menu">
              {categories.map((category, index) => (
                <span
                  key={index}
                  className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="menu">
          {groupedItems.map((group, groupIndex) => (
            <ul key={groupIndex} className='cards__items' style={{ display: 'flex' }}>
              {group.map((item, index) => (
                <CardItem
                  key={index}
                  src={item.src}
                  text={item.text}
                  label={item.label}
                  category={item.category}
                  details={item.details}
                />
              ))}
            </ul>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Menu;
