let express = require('express');
let app = express();

const expHbs = require('express-handlebars');

app.use(express.static('public'));

app.engine(
    'hbs',
    expHbs({
        layoutsDir: 'views/layouts/',
        defaultLayout: 'main-layout',
        extname: 'hbs'
    })
);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.get('/', function (req, res) {
    res.render('LandingView', {
        pageTitle: 'Welcome to PetBase',
        style: 'landingView.css'
    });
});

app.listen(8000, () => console.log('Server ready'))
