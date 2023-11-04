const signupRoute = require('../middlewares/UserRegister');
const loginRoute = require('../middlewares/UserLogin');

app.use('/api/signup', signupRoute);
app.use('/api/login', loginRoute);
