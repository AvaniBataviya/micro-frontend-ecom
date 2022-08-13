import {faker} from '@faker-js/faker'

const mount = (el) => {
  const cartText = `<h3>You have ${faker.random.numeric()} items in the cart.</h3>`
  el.innerHTML = cartText;
};

if(process.env.NODE_ENV === 'development') {
  const element =  document.querySelector('#dev-cart');

  if(element) {
    mount(element);
  }
};

export {mount};

