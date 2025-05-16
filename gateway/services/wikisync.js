import { supabaseAdmin } from '../utils/supabase.js';

export async function listPages(tenantId) {
  const { data, error } = await supabaseAdmin
    .from('wiki_pages')
    .select('*')
    .eq('tenant_id', tenantId);

  if (error) throw new Error(error.message);
  return data;
}
