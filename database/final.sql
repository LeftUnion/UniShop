--address
CREATE TABLE IF NOT EXISTS shop.addresses (
    id SERIAL PRIMARY KEY,
    town TEXT.
    address TEXT,
    comment TEXT
);

CREATE TABLE IF NOT EXISTS shop.clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    address VARCHAR(100),
    phone VARCHAR(20)
);
CREATE TABLE IF NOT EXISTS shop.products (
    id SERIAL PRIMARY KEY,
    src TEXT,
    description TEXT,
    price DECIMAL(10,2)
)

---------------
CREATE TABLE IF NOT EXISTS shop.clientsproducts (
	id SERIAL PRIMARY KEY,
	product_id INTEGER  references shop.products(id),
	client_id INTEGER references shop.clients(id)
);

CREATE TABLE IF NOT EXISTS shop.requests (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	email VARCHAR(100),
    message TEXT
);
