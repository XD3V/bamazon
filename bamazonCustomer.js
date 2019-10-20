// if there is enough stock of the product continues on to the next part

// if not enough product it lets the user know Insufficient quantity!

// calculalte the total cost of the total amount of product that was purchased by the user

// Then update the remaing amount of products left after purchase

// Create an inquirer response for it to be user friendly and being able to use the functions above
// Pull in required dependencies
const inquirer = require("inquirer");

const con = require("mysql");

// Query db to confirm that the given item ID exists in the desired quantity
const queryStr = "SELECT * FROM products WHERE ?";

// Define the MySQL connection parameters
var connection = con.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

displayInventory();

// Once promise goes through check to see how much is avaliable in stock and send them their products

function customerPrompt() {
  //Using iquirer prompt for the user's experience
  inquirer
    .prompt([
      {
        type: "input",
        name: "item_id",
        message:
          "What item which you would like to purchase? \n(Enter Item Id): ",
          filter: Number
      },
      {
        type: "input",
        name: "stock_quantity",
        message: "How many units would you like to purchase?",
        filter:Number
      }
    ])
    .then(input => {
      // create a new variable that replaces the item_id
      let product = input.item_id;

      console.log(product);

      let quantity = input.stock_quantity;

      console.log(quantity);

      connection.query(queryStr, { item_id: product }, function(err, res) {
        if (err) throw err;

        // If the user has selected an invalid item ID, data attay will be empty
        // console.log('data = ' + JSON.stringify(data));

        if (res.length === 0) {
          console.log("\nERROR: Invalid Item.");
          displayInventory();
        } else {
          let item = res[0];

          if (quantity <= item.stock_quantity) {
            console.log("\n");

            console.log("Your product is in stock, now placing your order!\n");

            let updatedInvetory =
              "UPDATE products SET stock_quantity = " +
              (item.stock_quantity - quantity) +
              "WHERE item_id = " +
              item;

            connection.query(updatedInvetory, funtion(err, res));
            if (err) throw err;
            {
              console.log(
                "/n---------------------------------------------------------------------"
              );
              console.log(
                "\nOrder Completed!\nYour total is $" + item.price * quantity
              );
              console.log("Thank you for your purchase!\n");

              connection.end();
            }
          } else {
            console.log(
              "---------------------------------------------------------------------"
            );
            console.log(
              "\nThere is not currently enough product in stock, Please try again.\n"
            );
            console.log(
              "---------------------------------------------------------------------"
            );

            displayInventory();
          }
        }
      });
    });
}

function displayInventory() {


  console.log(
    "------------------------------------------------------------ERROR------------------------------------------------------------"
  );
  console.log("\nHere are the products that are on SALE!!!\n");
  connection.query("SELECT * FROM products", function(err, res) {
    
    console.log("RESULTS ARE", res)

    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(
      "------------------------------------------------------------------------------------------------------------------------"
    );
    for (let i = 0; i < res.length; i++) {
      console.log(
        "Item Id: " +
          res[i].item_id +
          " || Product Name: " +
          res[i].product_name +
          " || Dept. Name: " +
          res[i].department_name +
          " || Price: $" +
          res[i].price +
          " || Stock Quantity: " +
          res[i].stock_quantity
      );
      console.log(
        "------------------------------------------------------------------------------------------------------------------------"
      );
    }
    console.log("\n");
    customerPrompt();
  });
}

