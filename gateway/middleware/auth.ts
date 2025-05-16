import jwt from 'jsonwebtoken';

export function verifyToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  try {
    const payload = jwt.decode(token);
    req.user = payload;
    next();
  } catch (err) {
    res.sendStatus(403);
  }
}

export function getTenantFromToken(req) {
  return req.user?.tenant_id;
}
