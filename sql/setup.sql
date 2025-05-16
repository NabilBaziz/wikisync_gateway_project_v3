ALTER TABLE wiki_pages ADD COLUMN tenant_id UUID;

ALTER TABLE wiki_pages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow tenant-based read" ON wiki_pages
  FOR SELECT
  USING (auth.jwt() ->> 'tenant_id' = tenant_id::text);
