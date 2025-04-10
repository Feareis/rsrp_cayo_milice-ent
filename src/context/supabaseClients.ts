import { createClient } from "@supabase/supabase-js";

export const supabaseCantina = createClient(
  import.meta.env.VITE_SUPABASE_URL_CANTINA,
  import.meta.env.VITE_SUPABASE_ANON_KEY_CANTINA
);

export const supabasePericave = createClient(
  import.meta.env.VITE_SUPABASE_URL_PERICAVE,
  import.meta.env.VITE_SUPABASE_ANON_KEY_PERICAVE
);
