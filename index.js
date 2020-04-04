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

// Landing Page
app.get('/', function (req, res) {
    res.render('LandingView', {
        pageTitle: 'Welcome to PetBase',
        style: 'landingView.css'
    });
});

// Registration Page
app.get('/registration', function (req, res) {
    res.render('RegistrationView', {
        pageTitle: 'PetBase: Registration',
        style: 'registrationView.css'
    });
});

// Home Page
app.get('/home', function (req, res) {
    res.render('HomeView', {
        pageTitle: 'PetBase: Home',
        style: 'homeView.css',
        dpURL: 'https://randomuser.me/api/portraits/med/men/95.jpg',
        fname: 'Bobby',
        lname: 'Jackson',
        userBio: 'I have a 2 year old pembroke welsh corgi!',
        numPosts: 5,
        numMessages: 8,
        numLikes: 29,
        postDpURL: 'https://randomuser.me/api/portraits/med/men/32.jpg',
        postSubject1: 'Why does my corgi drool so much?',
        postTopic1: 'Dog',
        postPreview1: 'blah blah blah',
        postDate1: 'April 5, 2020',
        numPostReplies1: '6'
    });
});

// Edit Profile
app.get('/edit-profile', function (req, res) {
    res.render('EditProfileView', {
        pageTitle: 'PetBase: Edit Profile',
        style: 'editProfileView.css',
        fname: 'Bobby',
        lname: 'Jackson',
        dpURL: 'https://randomuser.me/api/portraits/med/men/95.jpg',
        userBio: 'I have a 2 year old pembroke welsh corgi!',
        country: 'Canada'
    });
});

// Messages
app.get('/messages', function (req, res) {
    res.render('MessageView', {
        pageTitle: 'PetBase: Messages',
        style: 'messageView.css'
    });
});


app.listen(8000, () => console.log('Server ready'))
