import { ensureTables, query, sendError } from './_db.js'

export default async function handler(request, response) {
  try {
    await ensureTables()

    if (request.method === 'GET') {
      const result = await query('SELECT id, full_name AS name, email, phone, startup_idea AS idea, status, created_at FROM applications ORDER BY created_at DESC')
      return response.status(200).json(result.rows)
    }

    if (request.method === 'POST') {
      const { fullName, email, phone, startupIdea } = request.body || {}
      if (!fullName || !email || !phone || !startupIdea) return response.status(400).json({ error: 'All fields are required' })
      const id = `application-${Date.now()}`
      await query('INSERT INTO applications (id, full_name, email, phone, startup_idea) VALUES ($1, $2, $3, $4, $5)', [id, fullName, email, phone, startupIdea])
      return response.status(201).json({ id })
    }

    if (request.method === 'DELETE') {
      await query('DELETE FROM applications WHERE id = $1', [request.query.id])
      return response.status(204).end()
    }

    return response.status(405).json({ error: 'Method not allowed' })
  } catch (error) {
    return sendError(response, error)
  }
}