# ArthSathi

ArthSathi is a web application that provides financial policy insights and news. The application is built using Node.js and Express, offering a user-friendly interface to access financial information and updates.

## Features

- Modern and responsive web interface
- Financial news integration
- About page with project information
- Static asset serving
- EJS templating for dynamic content

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Install dependencies:
```bash
npm install
```

## Environment Variables

The application requires the following environment variables:
- `NEWS_API_KEY` - API key for news integration

## Running the Application

To start the development server:
```bash
npm start
```

The application will be available at `http://localhost:5000`

## Project Structure

```
ArthSathi/
├── public/          # Static files (CSS, JavaScript, images)
├── views/           # EJS template files
├── index.js         # Main application file
├── package.json     # Project dependencies and scripts
└── README.md        # Project documentation
```

## Dependencies

- Express.js - Web application framework
- EJS - Templating engine
- Axios - HTTP client for API requests
- Nodemon - Development server with auto-reload

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 