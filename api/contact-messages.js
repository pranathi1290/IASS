import { ensureTables, query, sendError } from './_db.js'

export default async function handler(request, response) {
  try {
    await ensureTables()

    if (request.method === 'GET') {
      const result = await query('SELECT id, name, email, message, created_at FROM contact_messages ORDER BY created_at DESC')
      return response.status(200).json(result.rows)
    }

    if (request.method === 'POST') {
      const { name, email, message } = request.body || {}
      if (!name || !email || !message) return response.status(400).json({ error: 'All fields are required' })
      const id = `contact-${Date.now()}`
      await query('INSERT INTO contact_messages (id, name, email, message) VALUES ($1, $2, $3, $4)', [id, name, email, message])
      return response.status(201).json({ id })
    }

    if (request.method === 'DELETE') {
      await query('DELETE FROM contact_messages WHERE id = $1', [request.query.id])
      return response.status(204).end()
    }

    return response.status(405).json({ error: 'Method not allowed' })
  } catch (error) {
    return sendError(response, error)
  }
}