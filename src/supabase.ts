import { createClient } from "@supabase/supabase-js";
const supabaseClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ROLE_KEY!,
);

export default supabaseClient;
