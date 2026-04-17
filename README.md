#  Scalable URL Shortener

A production-ready URL shortener built using Node.js, MongoDB, and Redis, designed to handle high read traffic with low-latency redirection and robust rate limiting.



#  Features

1  Shorten long URLs into compact, shareable links.
2  Fast redirection using Redis caching.
3  Persistent storage with MongoDB.
4  Click tracking for analytics.
5  Rate limiting to prevent abuse.
6  Environment-based configuration using `.env`.



#  System Design Highlights

1 1.1 Base62 / NanoID-based ID generation for unique short URLs
2 2.1 Read-heavy optimization using Redis cache layer
3 3.1 Database indexing for efficient lookup
4 4.1 Scalable architecture  suitable for high traffic systems



#  Tech Stack

1 Backend: Node.js, Express
2 Database: MongoDB
3 Cache: Redis
4 Other Tools: dotenv, nanoid



#  Project Structure


url-shortener/
│── server.js
│── package.json
│── .env
│── .gitignore
│── node_modules/

# Setup & Installation

1. Clone the repository
git clone https://github.com/VedantTyagi1/url-shortener.git
cd url-shortener

2. Install dependencies
npm install

3. Configure environment variables

Create a .env file in the root directory:
PORT=5000
MONGO_URI=your_mongodb_connection_string
REDIS_URL=your_redis_url
BASE_URL=http://localhost:5000

4. Run the server
node server.js

# API Endpoints
Create Short URL
POST /shorten

# Request Body:

{
  "originalUrl": "https://example.com"
}

# Response:

{
  "shortUrl": "http://localhost:5000/abc123"
}
# Redirect to Original URL
GET /:shortId

Redirects user to the original URL.

# Performance Optimization
Redis caching reduces database hits for frequently accessed URLs
Achieves low-latency redirects for read-heavy workloads
Rate limiting protects against abuse and ensures system stability
# Security & Best Practices
1 Sensitive data managed using .env
2 .gitignore used to exclude secrets and dependencies
3 Input validation can be extended for production use

#  Future Enhancements

*  Advanced analytics dashboard (click trends, geolocation)
*  Custom aliases for short URLs
*  Expiring links
*  Docker support for containerization
*  Deployment on cloud platforms


 # Author

 # Vedant Tyagi



  If you like this project

Give it a star ⭐ on GitHub!
