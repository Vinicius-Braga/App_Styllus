const mongoose = require('mongoose');
const URI = '';

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnidiedTopology', true);

mongoose
    .connect(URI)
    .then(() => console.log('DB is Up!'))
    .catch(() => console.log('DB is Down!'));