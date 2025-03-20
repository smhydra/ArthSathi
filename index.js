const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

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
        // Replace with your News API key
        const apiKey = 'YOUR_NEWS_API_KEY';
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`);
        
        const news = response.data.articles.map(article => ({
            title: article.title,
            description: article.description,
            image: article.urlToImage || '/images/default-news.jpg',
            url: article.url,
            date: new Date(article.publishedAt).toLocaleDateString(),
            category: 'stock' // You can categorize based on keywords or other logic
        }));

        res.render('news', { 
            title: 'News - ArthSathi',
            news: news
        });
    } catch (error) {
        console.error('Error fetching news:', error);
        res.render('news', { 
            title: 'News - ArthSathi',
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

// Error handler for 404
app.use((req, res) => {
    res.status(404).render('404', { title: '404 - Page Not Found' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
