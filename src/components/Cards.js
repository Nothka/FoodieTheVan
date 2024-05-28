import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>

<h1>🍔 Check out these new Burgers ! 🍔</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <CardItem
            src='/images/cheeseburger.jpeg'
            text='Indulge in perfection, savor every bite, our signature Cheeseburger is a masterpiece that turns hunger into a delight'
            label='NEW'
            category='New'
            details={{
            kcal: 531,
            allergies: 'Garlic',
            description: 'Delicious cheeseburger description.',
            
            }}
            />

            <CardItem
              src='/images/chicken-salad.jpeg'
              text='Elevate your palate with our Chicken Salad – a fresh, vibrant medley of flavors that transforms every bite into a wholesome and delicious experience'
              label='NEW'
              path='/destinations'
              category='New'
              details={{
                kcal: 731,
                allergies: 'Butter',
                description: 'Delicious cheeseburgers description.',
                }}
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/burger-3.jpeg'
              text='Savor the crunch and delight in every bite with our Crispy Burger – a symphony of crispy perfection that takes your taste buds on a tantalizing journey'
              label='BEST SELLING'
              path='/destinations'
              category='New'
              details={{
                kcal: 721,
                allergies: 'Butter',
                description: 'Delicious cheeseburgers description.',
                }}
            />
            <CardItem
              src='/images/burger-4.jpeg'
              text='Embark on a gourmet adventure with our Foodie Burger – a symphony of flavors crafted to satisfy the cravings of every true food enthusiast'
              label='BEST SELLING'
              path='/products'
              category='New'
              details={{
                kcal: 721,
                allergies: 'Butter',
                description: 'Delicious cheeseburgers description.',
                }}
            />
            <CardItem
              src='/images/crispy-chicken-tortilla.jpeg'
              text='Crunch into culinary bliss with our Chicken Crispy Tortilla – where savory meets crunchy in a symphony of flavors that will have your taste buds dancing with delight'
              label='BEST SELLING'
              path='/sign-up'
              category='New'
              details={{
                kcal: 721,
                allergies: 'Butter',
                description: 'Delicious cheeseburgers description.',
                }}
            />
          </ul>
          
        </div>
      </div>
        <div className='News-Text'>
          <h1>Explore our most recent updates and stay informed with our latest news!</h1>
          </div>
        <div className='News'>
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02SHrNksSCfPudAbc3hPjG2aay1N9QKTn3XcmzmSQ48qSFCQA1KTJaM6JMB6qBReyil%26id%3D100075875232574&show_text=true&width=500"  frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" className='news-padding' title='news-1'></iframe>
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02rFDtoDB1Ntjg5Ad5LfDHMuPkc9gGpEMDukBenKK5t9cMRoee8NFBtUaQzu32GAGil%26id%3D100075875232574&show_text=true&width=500"  frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" className='news-padding' title='news-2'></iframe>
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02myejozhjsw5bywSRGzSVn6JKWDZiqkRLDYVWCiWiTZLyeMbs29n3vaeSkCs6eUA5l%26id%3D100075875232574&show_text=true&width=500"  frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" className='news-padding' title='news-3'></iframe>

        </div>
     
    </div>
  );
}

export default Cards;
