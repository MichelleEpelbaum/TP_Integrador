import {createClient} from '@supabase/supabase-js'  //funcion de supabase
import dotenv from 'dotenv' //para leer las variables delarchivo .env

dotenv.config()

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  ) //instancia de conexion con supabase
  
  export default supabase