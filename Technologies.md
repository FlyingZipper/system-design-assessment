# Technologies

Let's say we are building the next Unicorn company called Ventube!

## Frontend 
On the frontend, we’re using Next.js (with the App Router) and using tailwind CSS to speed up the styling. It would be deployed on Vercel. This set up gives us fast server‑side rendering for SEO, image optimization, and a global CDN, which is key for our split Canada/Europe audience, this could be done at a possibly lower cost but with the limited amount of developpers, Vercel is the safest option for the launch to reduce the bottlenecks. 

## Backend 
For the backend, we went with two services using Node.js and Fastify, which would be dockerized. The Node.js service is the core service handling and orchestrating operation and the Fastify one for the search and recommendation system. We expose REST APIs for users, video handling, feeds, uploads and other related endpoints. Auth would be fully operated by OAuth to reduce complexity and enable the team to focus on features that deliver value to the customers. Everything runs behind Nginx for load balancing and horizontal scaling.

## Database
The main database is PostgreSQL with partitioned tables for large video datasets and a read replica for analytics. Redis is used for caching frequently accessed data, such as video metadata, to improve performance. We also use S3 for storing video files, which allows us to scale storage independently of our database. The database would be used without an ORM to improve performance on the queries and to enable partioning of the tables as most ORMs do not support this feature.

## Video Uploads
Video uploads go directly to S3 using presigned URLs to save bandwidth (instead of passing by the express service). AWS MediaConvert handles transcoding into 480p, 720p, and 1080p, plus thumbnails. We use SQS to queue processing jobs so they don’t block the app. Processed videos are stored in another S3 bucket and served through CloudFront for low‑latency delivery. Lifecycle rules automatically delete them when done.

## Search and Recommendations
Search is its own FastAPI service using the BGE‑M3 model for semantic search and Qdrant for vector similarity. It supports multilingual search for Canada and Europe. It can recommend videos based on location in one query. Redis would be used to provide fast access to popular search queries and homepage recommendations avoiding the need to query the database for every request.

# Summary

## Frontend

- Next.js 14
- Vercel
- Tailwind CSS & Shadcn

## Backend

- Node.js & Express
- Fastify
- Docker
- Nginx
- OAuth
- EC2 (Elastic Compute Cloud)

## Databases & Caching

- PostgreSQL
- Redis

## Video Processing & Storage

- Amazon S3
- AWS MediaConvert
- AWS Simple Queue Service
- Amazon CloudFront

## Search & Recommendations

- FastAPI
- BGE‑M3
- Qdrant
- Redis (Search Layer)
