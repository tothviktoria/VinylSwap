# MVP Vinyl swap

A platform for swapping vinyls between users.
The backened has been done.
The frontend structure is basic(no style), but functional.

One important thing that the app missing is the request action between two users.
The ability for a user to send a request and receive requests.

Another feature to be added is a login page.

# Setup

# Visual resources

Go to extra folder located in MVP folder to find api table, mySql schema and flowmapp.

# Dependencies

Run `yarn` on root folder to install dependencies related to Express.

`cd client` and run `yarn` install dependencies related to React.

# Database prep

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called facebook: `create database vinylSwap`
- Add a `.env` file to the main folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=vinylSwap
  DB_PASS=YOURPASSWORD
```

- Run `npm run migrate` in the main folder of this repository, in a new terminal window. This will create 3 tables called 'vinyls','users' and 'requests' in your database.

- Make sure you understand how the tables are constructed. In your MySQL console, you can run `use vinylSwap;` and then `show table;`, and then `describe vinyls;`etc. to see the structure of the table.

# Run your development servers

- Run `yarn start` in project directory to start the Express server on port 5000
- `cd client` and run `yarn start` to start client server in development mode with hot reloading in port 3000.
- Client is configured so all API calls will be proxied to port 5000 for a smoother development experience. Yay!
- You can test your client app in `http://localhost:3000`
- You can test your API in `http://localhost:5000/api`

## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._
