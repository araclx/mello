import rateLimit from 'express-rate-limit'

// There we should add improvements to base our rate limiter on Redis
// https://www.npmjs.com/package/rate-limit-redis

const ratelimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // limit each IP to 100 requests per windowMs
})

export default ratelimiter
