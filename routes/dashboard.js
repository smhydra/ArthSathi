const express = require('express');
const router = express.Router();

// Dashboard home route
router.get('/', (req, res) => {
    // Mock user data - replace with actual user data from your database
    const user = {
        name: 'John Doe',
        avatar: '/images/default-avatar.png'
    };

    // Mock activities data - replace with actual data from your database
    const activities = [
        {
            icon: 'fas fa-chart-line',
            title: 'Market Update',
            description: 'NIFTY 50 increased by 1.2%',
            time: '2 hours ago'
        },
        {
            icon: 'fas fa-briefcase',
            title: 'Portfolio Update',
            description: 'Added new stock to portfolio',
            time: '4 hours ago'
        },
        {
            icon: 'fas fa-newspaper',
            title: 'News Alert',
            description: 'New market analysis available',
            time: '6 hours ago'
        }
    ];

    res.render('dashboard', { user, activities });
});

// Market route
router.get('/market', (req, res) => {
    // Mock user data - replace with actual user data from your database
    const user = {
        name: 'John Doe',
        avatar: '/images/default-avatar.png'
    };

    // Mock stocks data - replace with actual data from your API/database
    const stocks = [
        {
            symbol: 'RELIANCE',
            price: '2,450.75',
            change: '+1.5%',
            trend: 'positive',
            volume: '2.5M',
            sector: 'Energy'
        },
        {
            symbol: 'TCS',
            price: '3,250.30',
            change: '-0.8%',
            trend: 'negative',
            volume: '1.8M',
            sector: 'Technology'
        },
        {
            symbol: 'HDFCBANK',
            price: '1,650.45',
            change: '+2.1%',
            trend: 'positive',
            volume: '3.2M',
            sector: 'Finance'
        }
    ];

    // Mock top gainers and losers data
    const topGainers = [
        {
            symbol: 'INFY',
            price: '1,450.75',
            change: '+3.2%'
        },
        {
            symbol: 'WIPRO',
            price: '850.30',
            change: '+2.8%'
        }
    ];

    const topLosers = [
        {
            symbol: 'TECHM',
            price: '950.45',
            change: '-2.1%'
        },
        {
            symbol: 'HCLTECH',
            price: '1,250.30',
            change: '-1.8%'
        }
    ];

    res.render('market', { user, stocks, topGainers, topLosers });
});

module.exports = router; 