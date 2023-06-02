const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// Set up database connection
mongoose.connect('mongodb://localhost/user_task_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Include route files
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
