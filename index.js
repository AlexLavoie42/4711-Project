let express = require('express');

let bodyParser = require('body-parser');
let session = require('express-session');
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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: "SuperSecretKey"
}));

let loginRoutes = require('./routes/Login');
let messageRoutes = require('./routes/Message');
let postRoutes = require('./routes/Post');
let profileRoutes = require('./routes/Profile');
let searchRoutes = require('./routes/Search');


// Landing Page
app.get('/', function (req, res) {
    if(!req.session.user) {
        res.render('LandingView', {
            pageTitle: 'Welcome to PetBase',
            style: 'landingView.css'
        });
    } else {
        res.redirect('/home');
    }
});

let postModel = require("./models/PostModel");
let userModel = require("./models/UserModel");
// Home Page
app.get('/home', function (req, res) {
    if(req.session.user) {
        let posts = postModel.getall();
        posts.then((rows, err) => {
            let posts = rows[0];
            let users = userModel.getall();
            users.then((rows, err) => {
                users = rows[0];
                let preview = [];
                for(let i = posts.length - 1; i > posts.length - 4; i--){
                    preview.push({...posts[i], ...users[posts[i]['user_id']-1]})
                }
                console.log(preview[0])
                res.render('HomeView', {
                    pageTitle: 'PetBase: Home',
                    style: 'homeView.css',
                    user: req.session.user,
                    postDpURL: 'https://randomuser.me/api/portraits/med/men/32.jpg',
                    posts: preview
                });
            });
        });
    } else {
        res.redirect('/')
    }
});

app.use(loginRoutes);
app.use(messageRoutes);
app.use(postRoutes);
app.use(profileRoutes);
app.use(searchRoutes);


app.listen(8000, () => console.log('Server ready'))
