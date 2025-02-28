📦# bytes-product-search-api
Product Search API built with Node.js, Express.js & MongoDB. Supports product search via REST endpoints, using a clean modular structure with dotenv for configuration. Perfect for learning and small-scale e-commerce projects.

📖 Product Search API - Quick Details

#Endpoint

GET /api/products/search

#Query Parameters
| Parameter |	Type	| Required	|Description                                         _______________________________________________________________________________________|
| query	  | string	| No	    |  Search term (searches title, category, description)  |
| page	  | number	| No	    |  Page number (default = 1)                            |


#Example Request

GET /api/products/search?query=rice&page=1

Example Response
{
    "success": true,
    "products": [...], 
    "totalProducts": 43,
    "totalPages": 5,
    "currentPage": 1
}

#Key Features

Search is applied to title, category, and description.
Case-insensitive and supports partial matching.
Pagination returns 10 products per page.