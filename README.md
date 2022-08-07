# bringmeister

Install the dependencies with npm, then you can start the development server:

npm install

run the application using 

```bash
npm run dev
# or
yarn dev
```

Unit test

npm run test

Coverage:

npm test -- --coverage


<!-- 
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

I also added some the hooks - `useGetCart` for retrieving fake cart data, and - `useGetProducts` for retrieving fake product data

Both include a delay to simulate network loading. Each hook returns an object
with the loading state as a boolean and the data if not loading finished -->

<!-- ## Work to do: -->

Project Description:
 
  - In home page added product tile with following information 
     
      -   Image 
      -   Name
      -   Base Price (formatted in German Currency format e.g. 1.2 will be "€1,20" )
      -   Base Unit

   - Added the count in cart to the product tile.

   - Added search input field with which we can able to search the product using the product name.

   - When the screen width is changed to below 480 px, the grid product item will change to list.

   - Used redux toolkit for state management.
   
   - Covered the unit test case of more than 90% of code.
   

<!-- 

Adjust the index.tsx / create necessary files to:

Display a loading info while the products are in loading state

Change index.tsx to display a tile for each product with the following infos:

-   Image (as image; you add also e.g.:"?imwidth=175" to the image url to get a 175px wide image)
-   Name
-   Base Price (formatted in German Currency format e.g. 1.2 will be "€1,20" )
-   Base Unit

The tiles should be displayed in a grid and as a list on screens
below 480px. In the grid the minimum tile width should be 300px and as many tiles
as possible should fit on screen.

Add an search input field on top that allows filtering the products that contain
the input in the product name.

Bonus:

-   Add the count in cart (amount > 0) to the product tile (Note: You have
    to use the `sku` field to find the matching products)

### Additional Information

-   Currently the project uses typescript, but you can rename / create js/jsx files
    if you want to opt out of type checking

-   Even though this project is fairly simple try to organize it like you would do
    for larger components.

-   Don't worry too much about styling

-   Feel free to reach out if you have any questions

_Good luck_ -->
