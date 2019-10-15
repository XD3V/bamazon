drop database if exists bamazon;

create database bamazon;

use bamazon;

create table products(
item_id int NOT NULL ,
product_name varchar(50) NOT NULL ,
department_name varchar(50) NOT NULL ,
price  varchar(50) NOT NULL ,
stock_quantity int NOT NULL,
primary key (item_id)
); 

INSERT INTO products(product_name, department_name, price, stock_quantity)

values 
('americano', 'drinks', 2.45,200),
('macchiato', 'drinks', 3.45,150),
('mocha', 'drinks', 3.45,120),
('latte', 'drinks', 2.75,400),
('espresso', 'drinks', 2.00,1000),
('Affogato', 'drinks', 3.75,650),
('nitro brew', 'drinks', 4.45,45),
('veranda', 'drinks', 2.45,12),
('Pike', 'drinks', 2.45,340),
('Eiskaffee', 'drinks', 3.20,50)
