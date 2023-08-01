# Digital Cow Hut Server

### This is a description of Digital Cow Hut Server. It is a platform that connects sellers and buyers of cows. Sellers can list cows for sale, and buyers can browse and purchase cows.

* Installation
* To run this project locally, follow these steps:

## Install the required dependencies using npm install.
### Usage
* To start the development server, run the following command:

## npm run start

* This will start the server, and you can access the application at http://localhost:5000.

## API Endpoints
* The following are the API endpoints available in this project:

* POST /api/v1/sellers/create-seller - Create a new seller.
* GET /api/v1/sellers/get-allSeller - Get all sellers.
* GET /api/v1/sellers/:id - Get a single seller by ID.
* PATCH /api/v1/sellers/:id - Update a single seller by ID.
* POST /api/v1/buyers/create-buyer - Create a new buyer.
* GET /api/v1/buyers/get-allBuyer - Get all buyers.
* GET /api/v1/buyers/:id - Get a single buyer by ID.
* PATCH /api/v1/buyers/:id - Update a single buyer by ID.
* POST /api/v1/cows/create-cow - Create a new cow.
* GET /api/v1/cows/get-allCow - Get all cows.
* GET /api/v1/cows/:id - Get a single cow by ID.
* PATCH /api/v1/cows/:id - Update a single cow by ID.