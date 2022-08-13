import {mount as productMount} from 'productsApp/ProductsIndex';
import {mount as cartMount} from 'cartApp/CartIndex';

productMount(document.querySelector("#container-products"));
cartMount(document.querySelector("#container-cart"));
console.log('containers ------>')