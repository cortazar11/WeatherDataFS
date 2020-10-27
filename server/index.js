const express = require('express');
const mongoose=require('mongoose');
const cookieSession = require('cookie-session');
const passport= require('passport');
const bodyParser=require('body-parser');
require('./models/User');
require('./services/passport')


const keys=require('./config/keys')

const app = express();
app.use(bodyParser.json())
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())


require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

mongoose.connect(keys.mongoURI, { useUnifiedTopology: true,useNewUrlParser: true },()=>{
  console.log('mongo connected')
})



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server running...');
});

// Database user: cortazar11
// Database password: BgwM1R12ERg6OS9B
// mongodb+srv://cortazar11:<password>@cluster0.qgmwi.mongodb.net/<dbname>?retryWrites=true&w=majority