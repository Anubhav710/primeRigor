import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "super-secret-jwt-key-lummi-auth-2026";
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "super-secret-jwt-refresh-key-lummi-auth-2026";

export interface UserPayload {
  userId: string;
  email: string;
  fullName: string;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

/**
 * Generate Access Token (short-lived 15m) and Refresh Token (long-lived 7d)
 */
export function generateTokens(payload: UserPayload): Tokens {
  const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: "15m" });
  const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: "7d" });

  return { accessToken, refreshToken };
}

/**
 * Verify Access Token
 */
export function verifyAccessToken(token: string): UserPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as UserPayload;
  } catch {
    return null;
  }
}

/**
 * Verify Refresh Token
 */
export function verifyRefreshToken(token: string): UserPayload | null {
  try {
    return jwt.verify(token, JWT_REFRESH_SECRET) as UserPayload;
  } catch {
    return null;
  }
}

/**
 * Set HTTP-Only Cookies for Tokens
 */
export async function setAuthCookies(tokens: Tokens) {
  const cookieStore = await cookies();

  cookieStore.set("access_token", tokens.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 15 * 60, // 15 minutes
    path: "/",
  });

  cookieStore.set("refresh_token", tokens.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60, // 7 days
    path: "/",
  });
}

/**
 * Clear Auth Cookies on Logout
 */
export async function clearAuthCookies() {
  const cookieStore = await cookies();
  cookieStore.delete("access_token");
  cookieStore.delete("refresh_token");
}
