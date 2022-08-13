# Micro-frontend-ecom example

This repository serves to demonstrate an example of micro-frontend implementation. It consists of the container app and two micro-frontend app `products` and `cart` in the respective directories.

## Getting started

1. Clone the repo

```bash
https://github.com/AvaniBataviya/micro-frontend-ecom.git
```
2. Install dependencies in respective directories & start app

```bash
cd container
yarn install
yarn start
```

```bash
cd products
yarn install
yarn start
```

```bash
cd cart
yarn install
yarn start
```
3.Visit the following URLS:


```
import foobar

# renders both apps
http://localhost:8080/

# renders only products
http://localhost:8081/

# renders only cart
http://localhost:8083/
```

## Output
![image](https://user-images.githubusercontent.com/35954780/184478718-6d3a4026-dd62-4ba4-91a9-9859f1e6300f.png)
![image](https://user-images.githubusercontent.com/35954780/184478852-a3eab966-1a7e-4ea4-89ae-ba9e8752cc4c.png)
![image](https://user-images.githubusercontent.com/35954780/184478874-3d7312e4-e2aa-481c-906d-3cbffb9d168e.png)
