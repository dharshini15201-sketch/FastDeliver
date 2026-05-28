# FastDeliver - Quick Commerce App

FastDeliver is a quick commerce application built with React.js, Java Spring Boot, and SQL database. It enables users to browse products, add them to cart, checkout, and track real-time delivery.

## Project Structure

```
FastDeliver/
├── frontend/                 # React.js application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── backend/                  # Java Spring Boot application
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/fastdeliver/
│   │   │   │   ├── controller/
│   │   │   │   ├── service/
│   │   │   │   ├── repository/
│   │   │   │   ├── model/
│   │   │   │   └── FastdeliverApplication.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   ├── pom.xml
│   └── README.md
├── database/                 # SQL scripts
│   ├── schema.sql
│   └── seed-data.sql
└── docker-compose.yml

```

## Tech Stack

- **Frontend:** React.js with Panikon UI Components
- **Backend:** Java Spring Boot
- **Database:** MySQL/PostgreSQL
- **API:** RESTful APIs

## Features

✅ User Authentication & Authorization
✅ Product Browsing & Search
✅ Shopping Cart Management
✅ Order Checkout
✅ Payment Integration
✅ Real-time Order Tracking
✅ Delivery Management
✅ Admin Dashboard

## Getting Started

### Prerequisites
- Node.js v14+
- Java 11+
- MySQL 8.0+
- npm/yarn

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

### Backend Setup

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

## API Documentation

API endpoints are documented in `backend/API.md`

## Database Setup

Run the SQL scripts in the `database/` folder to set up the schema.

```bash
mysql -u root -p < database/schema.sql
mysql -u root -p < database/seed-data.sql
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first.

## License

MIT
