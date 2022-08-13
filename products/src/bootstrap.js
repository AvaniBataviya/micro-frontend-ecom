import { faker }  from '@faker-js/faker';

const mount = (element) => {
  let products = '';

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    const description = faker.commerce.productDescription();
    products += `<div>${i+1}. ${name}</div> <div>${description}</div><br/>`;
  };
  // document.querySelector('#product-list').innerHTML = products;
  element.innerHTML = products;
};


// case 1: we are running this file individual in development in isolation mode 
// and using local index.html file which defnitely have elment with id product-list
if(process.env.NODE_ENV === 'development') {
  const element =  document.querySelector('#product-list');

  if(element) {
    mount(element);
  }
};

export { mount };
