import React from 'react';
import Header from './components/Header/Header'
import Main from './components/Main/MainA'
import './App.css';
// import Button from './components/Button/Btn';
import image1 from './assets/Main_img/img1.jpg'
import image2 from './assets/Main_img/img2.jpg'
import image3 from './assets/Main_img/img3.jpg'
import image4 from './assets/Main_img/img4.jpg'
import image5 from './assets/Main_img/img5.jpg'
import image6 from './assets/Main_img/img6.jpg'
import image7 from './assets/Main_img/img7.jpg'
import image8 from './assets/Main_img/img8.jpg'

const products = [
  {
    id: 1,
    img: image1,
    title: 'Зеленые Жорики',
    desc: 'Стильные жорики на которых не видно мох',
    price: '39',
    
  },
  {
    id: 2,
    img: image2,
    title: 'Голубые жорики',
    desc: 'для настоящих натуралов',
    price: '45',
    
  },
  {
    id: 3,
    img: image3,
    title: 'Красные жорики',
    desc: 'База, просто база',
    price: '50',
    
  },
  {
    id: 4,
    img: image4,
    title: 'Красно-белые жорики',
    desc: 'Для нетакушек в самый раз',
    price: '37',
    
  },
  {
    id: 5,
    img: image5,
    title: 'Серые жорики',
    desc: 'Скучные, унылые, для грустных людей',
    price: '33',
    
  },
  {
    id: 6,
    img: image6,
    title: 'Желтые жорики',
    desc: 'Настолько яркие что могут ослепить',
    price: '40',
    
  },
  {
    id: 7,
    img: image7,
    title: 'Оранжевые жорики',
    desc: 'Апельсин',
    price: '44',
    
  },
  {
    id: 8,
    img: image8,
    title: 'Сине-гранатовые жорики',
    desc: 'Для тех кто любит варселону',
    price: '49',
    
  }
]

function App() {
  return (
   <div className='app'>
    <Header />
    <main className='main'>
     {products.map(product => (
      <Main
       key={product.id}
       image={product.img}
       title={product.title}
       desc={product.desc}
       price={product.price}
      />
     ))}
    </main>
   </div>
  )
 }

export default App;
