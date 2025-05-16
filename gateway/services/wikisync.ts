import { supabaseAdmin } from '../utils/supabase';

export async function listPages(tenantId: string) {
  const { data, error } = await supabaseAdmin
    .from('wiki_pages')
    .select('*')
    .eq('tenant_id', tenantId);

  if (error) throw new Error(error.message);
  return data;
}
