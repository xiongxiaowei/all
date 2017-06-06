var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
app.get('/api/goods',(req,res)=>{
	var goods=[
      {id:1,barnd:"德芙",price:18,content:"到你是我一生的幸福——德芙巧克力"},
      {id:2,barnd:"兰蔻",price:18,content:"We are one for all for ever."},
      {id:3,barnd:"博柏利",price:18,content:"Be good,be bad,just be yourself."},
      {id:4,barnd:"香奈儿",price:18,content:"Gold is cold.Diamonds are dead.A Limousine is a car.Don't Pretend.Feel what's real.C'est Ca "},
	]
	res.json({code:200,msg:"OK",data:goods})
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
