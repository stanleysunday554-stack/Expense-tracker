# Expense Tracker API

A simple REST API for managing income and expenses.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

1. Clone this repository.
2. Open the project folder.
3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

5. Start the server:

```bash
npm run dev
```

Server URL: `http://localhost:5000`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/transactions | Create transaction |
| GET | /api/transactions | Get all transactions |
| GET | /api/transactions/:id | Get one transaction |
| PATCH | /api/transactions/:id | Update transaction |
| DELETE | /api/transactions/:id | Delete transaction |
| GET | /api/transactions/summary | Get financial summary |
| GET | /api/transactions/summary/categories | Get category summary |

## Features
- Record income and expenses.
- View all transactions.
- Update and delete transactions.
- Filter transactions by type and category.
- Filter by date and amount.
- Pagination.
- Financial summary.
- Category breakdown.

## Testing

The API was tested using Thunder Client.

## Author

Stanley Sunday
