# blog-api-express

### Task:

**Build a RESTful API with Express, Mongoose, dotenv, and validator to manage a collection of products in a MongoDB database.**

### Objectives

1. Use Mongoose to define a `Product` schema with validation using the `validator` library.
2. Implement backend routes with Express to perform CRUD operations.
3. Use Mongoose queries like `select()`, `limit()`, `sort()`, `find()`, and `findById()`.

### Requirements

#### 1. Define a Product Schema

##### The schema should include the following fields:

- **name:** `String`, required, minimum length of 3, trimmed.
- **price:** `Number`, required, must be a positive number.
- **category:** `String`, required, must match one of the categories (`electronics`, `fashion`, `food`). Use `validator` for custom validation.
- **createdAt:** `Date`, defaults to the current timestamp.
- **inStock:** `Boolean`, defaults to `true`.
- **description:** `String`, optional, with a maximum length of 150 characters.

#### 2. Mongoose Pre-Save Hooks

- Capitalize the first letter of the `name` before saving to the database.

#### 3. Backend Routes with Express

##### Create the following routes:

- **POST /api/products**
  - Add a new product to the database. Ensure the validation works as expected.
- **GET /api/products**
  - Fetch all products with the following Mongoose query methods:
    - `select()`: Return only the name, price, and category fields.
    - `limit()`: Limit the results to the first 10 products.
    - `sort()`: Sort products by price in ascending order.
- **GET /api/products/:id**
  - Use `findById()` to fetch a single product by its id.
- **PUT /api/products/:id**
  - Update an existing product’s details using its id.
- **DELETE /api/products/:id**
  - Remove a product from the database using its id.

### Additional Information

1. **Environment Variables**

   - Use the dotenv package to store the database URL and server port in a .env file.

2. **Testing**
   - Test your routes using Postman or similar tools. Verify all CRUD operations and validation logic work correctly.

### Additional Notes

- Use clean and modular code.
- Organize your project into models, controllers, and routes folders.
- Provide meaningful error messages for failed validations and invalid requests.

### Hints

- Use `validator` to ensure the category matches the allowed values (electronics, fashion, food).
- Use `sort()` to display products in ascending order based on price.
- Use `select()` to display specific fields such as name, price, and category.

#####Please feel free to contact me for further information!
