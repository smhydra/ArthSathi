const express = require('express');
const app = express();
const port = 5000;
const axios = require('axios');
const chatRouter = require('./routes/chat');

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public')); 

// Middleware to add path to all views
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

// Routes
app.get('/', (req, res) => {
    res.render('homepage', { title: 'Home - ArthSathi' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us - ArthSathi' });
});

app.get('/news', async (req, res) => {
    try {
        const apiKey = '66d78dd09e6443d0b9f9bd5f6ae8a3d4';
        // Updated query for Indian business news
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&q=india&sortBy=publishedAt&language=en&apiKey=${apiKey}`);
        
        const news = response.data.articles.map(article => ({
            title: article.title,
            description: article.description,
            image: article.urlToImage || '/images/default-news.jpg',
            url: article.url,
            date: new Date(article.publishedAt).toLocaleDateString(),
            category: 'stock' // You can categorize based on keywords or other logic
        }));

        res.render('news', { 
            title: 'Indian Business News - ArthSathi',
            news: news
        });
    } catch (error) {
        console.error('Error fetching news:', error);
        res.render('news', { 
            title: 'Indian Business News - ArthSathi',
            news: []
        });
    }
});

app.get('/contributors', (req, res) => {
    res.render('contributors', { title: 'Contributors - ArthSathi' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact - ArthSathi' });
});

app.get('/help', (req, res) => {
    res.render('help', { title: 'Help - ArthSathi' });
});

app.get('/login', (req, res) => {
    res.render('login', { title: 'Login - ArthSathi' });
});

app.get('/register', (req, res) => {
    res.render('register', { title: 'Register - ArthSathi' });
});

app.get('/explore', (req, res) => {
    res.render('explore', { title: 'Explore - ArthSathi' });
});

// Add chat route
app.use(chatRouter);

// Add dashboard routes
app.get('/dashboard', (req, res) => {
    res.render('data', { 
        title: 'Market Data - ArthSathi'
    });
});

app.get('/dashboard/financial-data', (req, res) => {
    res.render('financial_data', { 
        title: 'Financial Data - ArthSathi'
    });
});

// Error handler for 404
app.use((req, res) => {
    res.status(404).render('404', { title: '404 - Page Not Found' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
