// Pull in required dependencies
var inquirer = require('inquirer');
var mysql = require('mysql');

// Define the MySQL connection parameters
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	// Your username
	user: 'root',

	// Your password
	password: '',
	database: 'Bamazon'
});




// Validate the persons request with a promise method

 function validation(){


 }


// Once promise goes through check to see how much is avaliable in stock and send them their products

function customerPrompt(){

	//Using iquirer prompt for the user's experience 
	var inquirer = require('inquirer');
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
		name: "product_name",
		message:
			"What item which you would like to purchase? \n(Enter Product Name): ",
		filter: Number
	  },
  ])
  .then( (input) =>  {
	// create a new variable that replaces the item_id
	let item = item_id;

  });
}

customerPrompt()
// if there is enough stock of the product continues on to the next part



// if not enough product it lets the user know Insufficient quantity!



// calculalte the total cost of the total amount of product that was purchased by the user




// Then update the remaing amount of products left after purchase




// Create an inquirer response for it to be user friendly and being able to use the functions above


