import supabase from '../configs/db-config.js'

// GET /usuarios
export const getUsuarios = async (req, res) => {
  const { data, error } = await supabase.from('usuarios').select('*')
  if (error) return res.status(400).json({ error: error.message })
  res.json(data)
}

// POST /usuarios
export const createUsuario = async (req, res) => {
  const { nombre, email } = req.body
  const { data, error } = await supabase.from('usuarios').insert([{ nombre, email }])
  if (error) return res.status(400).json({ error: error.message })
  res.json(data)
}