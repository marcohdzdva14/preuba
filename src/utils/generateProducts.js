// src/utils/generateProducts.js

const baseProducts = [
    { image: 'images/imagen1.jpg', name: 'Producto 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras enim massa, sollicitudin vel metus at, ultricies eleifend tortor. Nunc ex mauris, viverra non feugiat consectetur, tempus facilisis ex. In eros nibh, suscipit id erat in, hendrerit rutrum lacus.', price: '$10.00' },
    { image: 'images/imagen2.jpg', name: 'Producto 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras enim massa, sollicitudin vel metus at, ultricies eleifend tortor. Nunc ex mauris, viverra non feugiat consectetur, tempus facilisis ex. In eros nibh, suscipit id erat in, hendrerit rutrum lacus.', price: '$20.00' },
    { image: 'images/imagen3.jpg', name: 'Producto 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras enim massa, sollicitudin vel metus at, ultricies eleifend tortor. Nunc ex mauris, viverra non feugiat consectetur, tempus facilisis ex. In eros nibh, suscipit id erat in, hendrerit rutrum lacus.', price: '$30.00' },
    { image: 'images/imagen4.jpg', name: 'Producto 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras enim massa, sollicitudin vel metus at, ultricies eleifend tortor. Nunc ex mauris, viverra non feugiat consectetur, tempus facilisis ex. In eros nibh, suscipit id erat in, hendrerit rutrum lacus.', price: '$40.00' },
    { image: 'images/imagen5.jpg', name: 'Producto 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras enim massa, sollicitudin vel metus at, ultricies eleifend tortor. Nunc ex mauris, viverra non feugiat consectetur, tempus facilisis ex. In eros nibh, suscipit id erat in, hendrerit rutrum lacus.', price: '$50.00' },
    { image: 'images/imagen6.jpg', name: 'Producto 6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras enim massa, sollicitudin vel metus at, ultricies eleifend tortor. Nunc ex mauris, viverra non feugiat consectetur, tempus facilisis ex. In eros nibh, suscipit id erat in, hendrerit rutrum lacus.', price: '$60.00' },
    { image: 'images/imagen7.jpg', name: 'Producto 7', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras enim massa, sollicitudin vel metus at, ultricies eleifend tortor. Nunc ex mauris, viverra non feugiat consectetur, tempus facilisis ex. In eros nibh, suscipit id erat in, hendrerit rutrum lacus.', price: '$70.00' },
    { image: 'images/imagen8.jpg', name: 'Producto 8', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras enim massa, sollicitudin vel metus at, ultricies eleifend tortor. Nunc ex mauris, viverra non feugiat consectetur, tempus facilisis ex. In eros nibh, suscipit id erat in, hendrerit rutrum lacus.', price: '$70.00' },
    { image: 'images/imagen9.jpg', name: 'Producto 9', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras enim massa, sollicitudin vel metus at, ultricies eleifend tortor. Nunc ex mauris, viverra non feugiat consectetur, tempus facilisis ex. In eros nibh, suscipit id erat in, hendrerit rutrum lacus.', price: '$70.00' }
];
  
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  
  const generateRandomProducts = (count) => {
    let products = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = getRandomInt(baseProducts.length);
      products.push({ ...baseProducts[randomIndex], id: i + 1 });
    }
    return products;
  };
  
  export default generateRandomProducts;
  