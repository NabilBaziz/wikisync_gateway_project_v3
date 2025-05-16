-- Ajout colonne tenant_id
ALTER TABLE wiki_pages ADD COLUMN tenant_id UUID;

-- Ajout de la RLS
ALTER TABLE wiki_pages ENABLE ROW LEVEL SECURITY;

-- Policy de lecture sécurisée par tenant
CREATE POLICY "Allow tenant-based read" ON wiki_pages
  FOR SELECT
  USING (auth.jwt() ->> 'tenant_id' = tenant_id::text);
