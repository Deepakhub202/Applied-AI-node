require("dotenv").config();
const app = require('./app');
const connectDB = require('./services/connectDB');

connectDB();

app.listen(9000, () => {
    console.log('Server is running on port 9000');
});

