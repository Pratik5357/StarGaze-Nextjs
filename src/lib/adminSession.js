export const ADMIN_COOKIE = "stargaze_admin_session";
const SESSION_DAYS = 7;

function getSecret() {
  return process.env.ADMIN_SECRET || process.env.NASA_API_KEY || null;
}

function toBase64Url(bytes) {
  const bin = String.fromCharCode(...bytes);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(str) {
  const padded = str.replace(/-/g, "+").replace(/_/g, "/");
  const bin = atob(padded);
  return Uint8Array.from(bin, (c) => c.charCodeAt(0));
}

async function getHmacKey(secret) {
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

async function signPayload(payload) {
  const secret = getSecret();
  if (!secret) {
    throw new Error("ADMIN_SECRET is not configured");
  }
  const data = JSON.stringify(payload);
  const key = await getHmacKey(secret);
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(data)
  );
  return `${toBase64Url(new TextEncoder().encode(data))}.${toBase64Url(new Uint8Array(signature))}`;
}

async function verifyToken(token) {
  if (!token) return null;

  const [dataB64, sigB64] = token.split(".");
  if (!dataB64 || !sigB64) return null;

  try {
    const secret = getSecret();
    if (!secret) return null;

    const data = new TextDecoder().decode(fromBase64Url(dataB64));
    const key = await getHmacKey(secret);
    const valid = await crypto.subtle.verify(
      "HMAC",
      key,
      fromBase64Url(sigB64),
      new TextEncoder().encode(data)
    );
    if (!valid) return null;

    const payload = JSON.parse(data);
    if (!payload?.admin || payload.exp < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

export async function createAdminSessionToken() {
  return signPayload({
    admin: true,
    exp: Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000,
  });
}

export async function verifyAdminSessionToken(token) {
  return verifyToken(token);
}

export function adminCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DAYS * 24 * 60 * 60,
  };
}
