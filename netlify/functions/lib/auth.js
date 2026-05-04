const crypto = require("crypto");

const COOKIE_NAME = "hlb_hamt_demo_access";
const PASSWORD = process.env.ACCESS_WALL_PASSWORD || "2026-hlb-hamt-demo";
const SESSION_TTL_SECONDS = 60 * 60 * 8;

function getSecret() {
    return process.env.ACCESS_WALL_SECRET || `hlb-hamt-demo:${PASSWORD}`;
}

function sign(value) {
    return crypto.createHmac("sha256", getSecret()).update(value).digest("base64url");
}

function createSessionCookie(event = {}) {
    const expiresAt = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
    const value = `${expiresAt}.${sign(String(expiresAt))}`;
    const host = event.headers?.host || event.headers?.Host || "";
    const secure = host.includes("localhost") || host.includes("127.0.0.1") ? "" : "; Secure";

    return `${COOKIE_NAME}=${value}; Path=/; Max-Age=${SESSION_TTL_SECONDS}; HttpOnly${secure}; SameSite=Strict`;
}

function readCookie(event) {
    const cookieHeader = event.headers.cookie || event.headers.Cookie || "";
    const cookies = Object.fromEntries(
        cookieHeader
            .split(";")
            .map((part) => part.trim().split("="))
            .filter((part) => part.length === 2 && part[0])
    );

    return cookies[COOKIE_NAME];
}

function hasValidSession(event) {
    const cookie = readCookie(event);
    if (!cookie) return false;

    const [expiresAt, signature] = cookie.split(".");
    if (!expiresAt || !signature) return false;
    if (Number(expiresAt) <= Math.floor(Date.now() / 1000)) return false;

    const expected = sign(expiresAt);
    const received = Buffer.from(signature);
    const expectedBuffer = Buffer.from(expected);

    return received.length === expectedBuffer.length && crypto.timingSafeEqual(received, expectedBuffer);
}

function verifyPassword(candidate) {
    const received = Buffer.from(String(candidate || "").trim());
    const expected = Buffer.from(PASSWORD);

    return received.length === expected.length && crypto.timingSafeEqual(received, expected);
}

module.exports = {
    createSessionCookie,
    hasValidSession,
    verifyPassword
};
