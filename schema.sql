CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price INT NOT NULL,
stock_quantity INT NOT NULL,
PRIMARY KEY (item_id));
SELECT * FROM products;
​
INSERT INTO products (product_name, department_name, price, stock_quantity)
values 
('americano', 'drinks', 2,200),
('macchiato', 'drinks', 3,150),
('mocha', 'drinks', 3,120),
('latte', 'drinks', 2,400),
('espresso', 'drinks', 2,1000),
('Affogato', 'drinks', 3,650),
('nitro brew', 'drinks', 4,45),
('veranda', 'drinks', 4,12),
('Pike', 'drinks', 2,340),
('Eiskaffee', 'drinks', 3,50);
