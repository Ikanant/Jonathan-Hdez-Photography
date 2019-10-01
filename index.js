var express = require('express');
var app = express();

app.use(express.static('./public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

var port = Number(process.env.PORT || 3000);

app.get('/', function(req, res){
    res.render('index');
});

app.get('/gallery', function(req, res){
    res.render('gallery');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.get('/about', function(req, res){
    res.render('about');
});

app.listen(port, function(){
    console.log('Listening on port ' + port);
});
