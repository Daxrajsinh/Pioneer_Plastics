require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "*",
  credentials: true,
  // secure: true,
}));
app.use(fileUpload({ useTempFiles: true }));

// Routes
// app.use('')
app.use('/Pioneer_Plastics/user', require('./routes/userRouter'))
app.use('/Pioneer_Plastics/api', require('./routes/categoryRouter'))
app.use('/Pioneer_Plastics/api', require('./routes/upload'))
app.use('/Pioneer_Plastics/api', require('./routes/productRouter'))

// app.get('/', (req, res) => {
//   res.json({ msg: 'Hello!' });
// });

// Connect to MongoDB
const URI = process.env.MONGODB_URL;
mongoose
  .connect(URI, {
    dbName: 'ecommerce',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after successful database connection
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log('Server is running on port', PORT);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });

  if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}