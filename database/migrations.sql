
DROP SCHEMA IF EXISTS shop CASCADE;
CREATE SCHEMA IF NOT EXISTS shop;




-- Дроп бд



-- + Удаление схемы

-- categories
CREATE TABLE IF NOT EXISTS shop.product_categories (
    id SERIAL PRIMARY KEY,
    cathegory VARCHAR(50)
);

--products
CREATE TABLE IF NOT EXISTS shop.products (
    id SERIAL PRIMARY KEY,
    src TEXT,
    description TEXT,
    price DECIMAL(10,2),
    product_category_id INTEGER REFERENCES shop.product_categories(id)
);
--clients
-- 3. Таблица "Клиенты"
-- - id (тип данных: SERIAL PRIMARY KEY)
-- - имя клиента (тип данных: VARCHAR(50))
-- - фамилия клиента (тип данных: VARCHAR(50))
-- - адрес клиента (тип данных: VARCHAR(100))
-- - телефон клиента (тип данных: VARCHAR(20))

CREATE TABLE IF NOT EXISTS shop.clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    second_name VARCHAR(50),
    address VARCHAR(100),
    phone VARCHAR(20) UNIQUE
);

-- 4. Таблица "Заказы"
-- - id (тип данных: SERIAL PRIMARY KEY)
-- - дата заказа (тип данных: DATE)
-- - id клиента (тип данных: INTEGER, FOREIGN KEY REFERENCES "Клиенты"(id))
CREATE TABLE IF NOT EXISTS shop.orders (
    id SERIAL PRIMARY KEY,
    date DATE,
    client_id INTEGER REFERENCES shop.clients(id)
);

-- 5. Таблица "Состав заказа"
-- - id (тип данных: SERIAL PRIMARY KEY)
-- - id заказа (тип данных: INTEGER, FOREIGN KEY REFERENCES "Заказы"(id))
-- - id товара (тип данных: INTEGER, FOREIGN KEY REFERENCES "Товары"(id))
-- - количество товара (тип данных: INTEGER)
CREATE TABLE IF NOT EXISTS shop.order_lists (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES shop.orders(id),
    product_id INTEGER REFERENCES shop.products(id),
    count INTEGER
);

-- 6. Таблица "Склад"
-- - id (тип данных: SERIAL PRIMARY KEY)
-- - название товара (тип данных: VARCHAR(100))
-- - количество товара на складе (тип данных: INTEGER)
CREATE TABLE IF NOT EXISTS shop.stock (
    id SERIAL PRIMARY KEY,
    product_name INTEGER REFERENCES shop.products(id),
    stock_count INTEGER
);

-- 7. Таблица "Поставщики"
-- - id (тип данных: SERIAL PRIMARY KEY)
-- - название компании (тип данных: VARCHAR(100))
-- - адрес компании (тип данных: VARCHAR(100))
-- - телефон компании (тип данных: VARCHAR(20))
CREATE TABLE IF NOT EXISTS shop.suppliers (
    id SERIAL PRIMARY KEY,
    company_name VARCHAR(100),
    company_address VARCHAR(100),
    company_phone VARCHAR(20) UNIQUE
) ;

-- 8. Таблица "Поставки"
-- - id (тип данных: SERIAL PRIMARY KEY)
-- - дата поставки (тип данных: DATE)
-- - id поставщика (тип данных: INTEGER, FOREIGN KEY REFERENCES "Поставщики"(id))
CREATE TABLE IF NOT EXISTS shop.supplies (
    id SERIAL PRIMARY KEY,
    delievery DATE,
    supplier_id INTEGER REFERENCES shop.suppliers(id)
);

-- 9. Таблица "Состав поставки"
-- - id (тип данных: SERIAL PRIMARY KEY)
-- - id поставки (тип данных: INTEGER, FOREIGN KEY REFERENCES "Поставки"(id))
-- - id товара (тип данных: INTEGER, FOREIGN KEY REFERENCES "Товары"(id))
-- - количество товара (тип данных: INTEGER)
CREATE TABLE IF NOT EXISTS shop.delivery_scopes (
    id SERIAL PRIMARY KEY,
    supply_id INTEGER REFERENCES shop.supplies(id),
    product_id INTEGER REFERENCES shop.products(id),
    count INTEGER
);

-- 10. Таблица "Продажи"
-- - id (тип данных: SERIAL PRIMARY KEY)
-- - дата продажи (тип данных: DATE)
-- - id товара (тип данных: INTEGER, FOREIGN KEY REFERENCES "Товары"(id))
-- - количество товара (тип данных: INTEGER)
CREATE TABLE IF NOT EXISTS shop.sales (
    id SERIAL PRIMARY KEY,
    sell_date DATE,
    product_id INTEGER REFERENCES shop.products(id),
    count INTEGER
);