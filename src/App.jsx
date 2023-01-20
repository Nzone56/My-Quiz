import { useEffect, useRef, useState } from 'react';
import './App.css'
import { getFruits } from './getFruits'

export const App = () => {

  const[ products, setProducts ] = useState([]); 
  const [fruits, setFruits] = useState(products)
  const inputFruit = useRef(0); 

  const getProducts = async ()  => {
    const  fruits  = await getFruits(); 
    setProducts( fruits ); 
  }
  
  useEffect(() => {
    getProducts(); 
  }, [])

  const onSubmitChange = ( event ) => {
      setFruits(getFruitsByName(event.target.value));
  }
  const getFruitsByName = ( name='' ) => {

    name = name.toLowerCase().trim(); 
    if(name.length === 0) return []; 

    return products.filter( product =>
        { product = product.toLowerCase(); 
          return product.includes(name)}
    )
    
  } 
  return (
    <>
      <div>
        <input ref={inputFruit} type="text"  onChange={onSubmitChange} />
      </div>
      <div>
        <ul>
          {
            fruits.map((product) => {
              return <li key={ product }> { product } </li>
            })
      
          }
        </ul>
      </div>
    </>
  );
}

