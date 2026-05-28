-- Insert Sample Users
INSERT INTO users (email, password, name, phone_number, address, role, active) VALUES
('user1@fastdeliver.com', 'hashed_password_1', 'John Doe', '9876543210', '123 Main St, City', 'USER', true),
('user2@fastdeliver.com', 'hashed_password_2', 'Jane Smith', '9876543211', '456 Oak St, City', 'USER', true),
('delivery1@fastdeliver.com', 'hashed_password_3', 'Raj Kumar', '9876543212', '789 Elm St, City', 'DELIVERY_PARTNER', true),
('delivery2@fastdeliver.com', 'hashed_password_4', 'Priya Singh', '9876543213', '321 Pine St, City', 'DELIVERY_PARTNER', true),
('admin@fastdeliver.com', 'hashed_password_5', 'Admin User', '9876543214', '555 Admin St, City', 'ADMIN', true);

-- Insert Sample Products - Grocery
INSERT INTO products (name, description, price, stock, category, image_url, available, sku) VALUES
('Rice (1kg)', 'Premium Basmati Rice', 150.00, 100, 'grocery', '/images/rice.jpg', true, 'SKU001'),
('Wheat Flour (1kg)', 'Whole Wheat Flour', 45.00, 150, 'grocery', '/images/flour.jpg', true, 'SKU002'),
('Sugar (1kg)', 'Refined Sugar', 50.00, 80, 'grocery', '/images/sugar.jpg', true, 'SKU003'),
('Dal (1kg)', 'Yellow Moong Dal', 120.00, 120, 'grocery', '/images/dal.jpg', true, 'SKU004'),
('Oil (1L)', 'Sunflower Oil', 200.00, 60, 'grocery', '/images/oil.jpg', true, 'SKU005');

-- Insert Sample Products - Dairy
INSERT INTO products (name, description, price, stock, category, image_url, available, sku) VALUES
('Milk (1L)', 'Fresh Milk', 60.00, 200, 'dairy', '/images/milk.jpg', true, 'SKU006'),
('Yogurt (500g)', 'Fresh Yogurt', 40.00, 100, 'dairy', '/images/yogurt.jpg', true, 'SKU007'),
('Cheese (200g)', 'Processed Cheese', 120.00, 50, 'dairy', '/images/cheese.jpg', true, 'SKU008'),
('Butter (200g)', 'Salted Butter', 200.00, 40, 'dairy', '/images/butter.jpg', true, 'SKU009'),
('Ghee (500ml)', 'Pure Ghee', 500.00, 30, 'dairy', '/images/ghee.jpg', true, 'SKU010');

-- Insert Sample Products - Fruits & Vegetables
INSERT INTO products (name, description, price, stock, category, image_url, available, sku) VALUES
('Tomatoes (1kg)', 'Fresh Tomatoes', 50.00, 150, 'fruits', '/images/tomatoes.jpg', true, 'SKU011'),
('Onions (1kg)', 'Fresh Onions', 35.00, 200, 'fruits', '/images/onions.jpg', true, 'SKU012'),
('Potatoes (1kg)', 'Fresh Potatoes', 30.00, 250, 'fruits', '/images/potatoes.jpg', true, 'SKU013'),
('Bananas (1kg)', 'Fresh Bananas', 60.00, 100, 'fruits', '/images/bananas.jpg', true, 'SKU014'),
('Apples (1kg)', 'Fresh Apples', 150.00, 80, 'fruits', '/images/apples.jpg', true, 'SKU015');

-- Insert Sample Products - Bakery
INSERT INTO products (name, description, price, stock, category, image_url, available, sku) VALUES
('Bread (500g)', 'Brown Bread', 40.00, 100, 'bakery', '/images/bread.jpg', true, 'SKU016'),
('Cookies (200g)', 'Chocolate Chips Cookies', 80.00, 80, 'bakery', '/images/cookies.jpg', true, 'SKU017'),
('Cake (500g)', 'Chocolate Cake', 250.00, 30, 'bakery', '/images/cake.jpg', true, 'SKU018'),
('Biscuits (200g)', 'Marie Biscuits', 60.00, 120, 'bakery', '/images/biscuits.jpg', true, 'SKU019'),
('Pastry (100g)', 'Butter Pastry', 120.00, 40, 'bakery', '/images/pastry.jpg', true, 'SKU020');
