function apiKeyAuth(req, res, next) {
  const apiKey = req.header('x-api-key') // header esperado
  const validApiKey = process.env.API_KEY

  if (!apiKey || apiKey !== validApiKey) {
    return res.status(401).json({ error: 'Unauthorized: Invalid API Key' })
  }

  next()
}

module.exports = apiKeyAuth
