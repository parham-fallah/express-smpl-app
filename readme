# e-commerce


# Database
aiven.io


## Schema


### Users Table
create table
```sql
CREATE TABLE public.users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
);
```

insert sample data
```sql 
-- Insert sample data into the users table
INSERT INTO public.users (username, password, email, created_at, last_login) VALUES
('user1', 'password1', 'user1@example.com', '2024-01-01 10:00:00', '2024-01-02 10:00:00'),
('user2', 'password2', 'user2@example.com', '2024-01-01 11:00:00', '2024-01-02 11:00:00'),
('user3', 'password3', 'user3@example.com', '2024-01-01 12:00:00', '2024-01-02 12:00:00'),
('user4', 'password4', 'user4@example.com', '2024-01-01 13:00:00', '2024-01-02 13:00:00'),
('user5', 'password5', 'user5@example.com', '2024-01-01 14:00:00', '2024-01-02 14:00:00'),
('user6', 'password6', 'user6@example.com', '2024-01-01 15:00:00', '2024-01-02 15:00:00'),
('user7', 'password7', 'user7@example.com', '2024-01-01 16:00:00', '2024-01-02 16:00:00'),
('user8', 'password8', 'user8@example.com', '2024-01-01 17:00:00', '2024-01-02 17:00:00'),
('user9', 'password9', 'user9@example.com', '2024-01-01 18:00:00', '2024-01-02 18:00:00'),
('user10', 'password10', 'user10@example.com', '2024-01-01 19:00:00', '2024-01-02 19:00:00'),
('user11', 'password11', 'user11@example.com', '2024-01-01 20:00:00', '2024-01-02 20:00:00'),
('user12', 'password12', 'user12@example.com', '2024-01-01 21:00:00', '2024-01-02 21:00:00'),
('user13', 'password13', 'user13@example.com', '2024-01-01 22:00:00', '2024-01-02 22:00:00'),
('user14', 'password14', 'user14@example.com', '2024-01-01 23:00:00', '2024-01-02 23:00:00'),
('user15', 'password15', 'user15@example.com', '2024-01-02 00:00:00', '2024-01-03 00:00:00'),
('user16', 'password16', 'user16@example.com', '2024-01-02 01:00:00', '2024-01-03 01:00:00'),
('user17', 'password17', 'user17@example.com', '2024-01-02 02:00:00', '2024-01-03 02:00:00'),
('user18', 'password18', 'user18@example.com', '2024-01-02 03:00:00', '2024-01-03 03:00:00'),
('user19', 'password19', 'user19@example.com', '2024-01-02 04:00:00', '2024-01-03 04:00:00'),
('user20', 'password20', 'user20@example.com', '2024-01-02 05:00:00', '2024-01-03 05:00:00'),
('user21', 'password21', 'user21@example.com', '2024-01-02 06:00:00', '2024-01-03 06:00:00'),
('user22', 'password22', 'user22@example.com', '2024-01-02 07:00:00', '2024-01-03 07:00:00'),
('user23', 'password23', 'user23@example.com', '2024-01-02 08:00:00', '2024-01-03 08:00:00'),
('user24', 'password24', 'user24@example.com', '2024-01-02 09:00:00', '2024-01-03 09:00:00'),
('user25', 'password25', 'user25@example.com', '2024-01-02 10:00:00', '2024-01-03 10:00:00'),
('user26', 'password26', 'user26@example.com', '2024-01-02 11:00:00', '2024-01-03 11:00:00'),
('user27', 'password27', 'user27@example.com', '2024-01-02 12:00:00', '2024-01-03 12:00:00'),
('user28', 'password28', 'user28@example.com', '2024-01-02 13:00:00', '2024-01-03 13:00:00'),
('user29', 'password29', 'user29@example.com', '2024-01-02 14:00:00', '2024-01-03 14:00:00'),
('user30', 'password30', 'user30@example.com', '2024-01-02 15:00:00', '2024-01-03 15:00:00');
```

### Products Table
create table
```sql
CREATE TABLE public.products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) CHECK(price > 0),
    stock INT CHECK(stock >= 0),
    is_enable BOOLEAN NOT NULL DEFAULT False
);
```

insert sample data
```sql
-- Insert sample data into the products table
INSERT INTO public.products (name, description, price, stock, is_enable) VALUES
('Product1', 'Description for product 1', 10.99, 100, TRUE),
('Product2', 'Description for product 2', 20.99, 200, TRUE),
('Product3', 'Description for product 3', 30.99, 300, TRUE),
('Product4', 'Description for product 4', 40.99, 400, TRUE),
('Product5', 'Description for product 5', 50.99, 500, TRUE),
('Product6', 'Description for product 6', 60.99, 600, TRUE),
('Product7', 'Description for product 7', 70.99, 700, TRUE),
('Product8', 'Description for product 8', 80.99, 800, TRUE),
('Product9', 'Description for product 9', 90.99, 900, TRUE),
('Product10', 'Description for product 10', 100.99, 1000, TRUE),
('Product11', 'Description for product 11', 110.99, 1100, TRUE),
('Product12', 'Description for product 12', 120.99, 1200, TRUE),
('Product13', 'Description for product 13', 130.99, 1300, TRUE),
('Product14', 'Description for product 14', 140.99, 1400, TRUE),
('Product15', 'Description for product 15', 150.99, 1500, TRUE),
('Product16', 'Description for product 16', 160.99, 1600, TRUE),
('Product17', 'Description for product 17', 170.99, 1700, TRUE),
('Product18', 'Description for product 18', 180.99, 1800, TRUE),
('Product19', 'Description for product 19', 190.99, 1900, TRUE),
('Product20', 'Description for product 20', 200.99, 2000, TRUE),
('Product21', 'Description for product 21', 210.99, 2100, TRUE),
('Product22', 'Description for product 22', 220.99, 2200, TRUE),
('Product23', 'Description for product 23', 230.99, 2300, TRUE),
('Product24', 'Description for product 24', 240.99, 2400, TRUE),
('Product25', 'Description for product 25', 250.99, 2500, TRUE),
('Product26', 'Description for product 26', 260.99, 2600, TRUE),
('Product27', 'Description for product 27', 270.99, 2700, TRUE),
('Product28', 'Description for product 28', 280.99, 2800, TRUE),
('Product29', 'Description for product 29', 290.99, 2900, TRUE),
('Product30', 'Description for product 30', 300.99, 3000, TRUE);
```

