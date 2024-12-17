import mongoose from "mongoose";
import validator from "validator";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    minlength: [3, "Name must be at least 3 characters long"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be a positive number"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
    validate: {
      validator: function (value) {
        // Custom validation using `validator` to check allowed categories
        return ["electronics", "fashion", "food"].includes(value.toLowerCase());
      },
      message: "Category must be either electronics, fashion, or food",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  description: {
    type: String,
    maxlength: [150, "Description cannot exceed 150 characters"],
  },
});

// Pre-save Hook to Capitalize Name
productSchema.pre("save", function (next) {
  this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
  next();
});

const Product = mongoose.model("Product", productSchema);
export default Product;

{
  /**
   * Using validator in Product.js

  Validate Strings with validator: 

  While the enum validator is working fine for categories, we can add an additional layer of validation using the validator package for custom checks.

  Example Use Case: 

  Ensure the category field is one of the specified values (as an extra safeguard) or validate strings like email, URLs, or other custom formats
  Why Use validator Instead of enum?
  Flexibility:
  The validator package allows for custom logic, like checking strings dynamically or running regular expressions.
  Consistency:
  If other fields need custom validations in the future, we can reuse the validator logic.
  Scalability: For validations that may grow more complex (like user-defined categories or remote checks), validator offers a broader toolkit.
  */
}
