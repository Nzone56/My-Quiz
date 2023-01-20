
export const getFruits = async () => {
  
    const url = `https://api.predic8.de/shop/products/?page=1&limit=32`;
    const resp = await fetch(url); 
    const { products } = await resp.json(); 

    const fruits = products.map( (product, index, arr) => {
        return product.name; 
    })   
    const uniqueFruits = fruits.filter( (fruit, index, arr) => { return arr.indexOf(fruit ) === index; })

    const uniqueFruits2  =  Object.keys(fruits.reduce( (acum, curr) => {
        acum[curr] ? acum[curr] += 1 : acum[curr] = 1;  
        return acum; 
    }, {}))

    

    const uniqueFruits3 = [...new Set(fruits)]; 
    console.log(uniqueFruits3); 
    return uniqueFruits; 
}

