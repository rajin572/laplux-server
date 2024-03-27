# Laplux Server

## Live Link:

Server Live Link [Laplux-Server](https://laplux-server.vercel.app/).

## Installation:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Rename `.env.example` to `.env`.
4. Run the server using `npm run dev`.

### Before Pushing Code:

1. Before pushing your code to the remote repository, ensure that you have run the following command in your terminal (Git Bash):
   ```bash
   rm -rf .git
   ```

## Configuration:

- Environment Variables:
  - `PORT`: Port number the server listens on. Default: 3000
  - `MONGODB_URI`: URI for MongoDB database.

## Usage:

- API Endpoints:

  - Description: Registers a new user.
  - Request:
    ```json
    {
      "name": "John",
      "email": "example@email.com",
      "password": "password"
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "message": "Login successful",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBoMkBleGFtcGxlLmNvbSIsImlhdCI6MTcwNzg1MDYyMSwiZXhwIjoxNzA3OTM3MDIxfQ.7EahSgmPLPNuZ_T9ok-B6TayWCJVdxPzi_Nx4UfrhvY"
    }
    ```
  - POST `/api/v1/laptop`
    - Description: Creating a new laoptop post.
    - Request:
      ```json
      {
        "name": "name",
        "image": "url",
        "brand": "brand",
        "price": 0,
        "discount": 0,
        "flashSale": false,
        "rating": 0,
        "ram": "ram",
        "ssd": "ssd",
        "processor": "processor",
        "display": "display",
        "os": "os",
        "description": "description"
      }
      ```
    - Response:
      ```json
      {
        "success": true,
        "message": "Successfully laptop create!",
        "result": {
          "acknowledged": true,
          "insertedId": "65f2ca6c5b6b39e13c4884d2"
        }
      }
      ```
  - GET `/api/v1/laptop`
    - Description: Get All laptop post.
    - Response:
      ```json
      {
        "success": true,
        "message": "successfully retrieve laptop!",
        "data": []
      }
      ```
  - GET `/api/v1/laptop/65f2ca6c5b6b39e13c4884d2`
    - Description: Get a single laptop post.
    - Response:
      ```json
      {
        "success": true,
        "message": "successfully retrieve laptop!",
        "data": {}
      }
      ```
  - GET `/api/v1/laptop/brand/Apple`
    - Description: Get a laptop post by brands.
    - Response:
      ```json
      {
        "success": true,
        "message": "successfully retrieve laptop  for brand!",
        "data": {}
      }
      ```

## Dependencies:

- `cors`: Express middleware for enabling CORS.
- `dotenv`: Loads environment variables from .env file.
- `express`: Web framework for Node.js.
- `mongodb`: MongoDB driver for Node.js.
- `nodemon`: Utility for automatically restarting the server during development.
