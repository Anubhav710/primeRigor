"use server";

import z from "zod";
import { generateTokens, setAuthCookies, clearAuthCookies, verifyRefreshToken } from "@/lib/auth/jwt";

// Validation Schemas
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signupSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type ActionResponse = {
  success: boolean;
  message: string;
  user?: {
    email: string;
    fullName?: string;
  };
};

/**
 * Next.js Server Action: User Registration (Sign Up)
 */
export async function signupAction(data: {
  fullName: string;
  email: string;
  password: string;
}): Promise<ActionResponse> {
  try {
    // 1. Zod Validation
    const validatedData = signupSchema.parse(data);

    // 2. Mock/Supabase User Storage
    // In production with Supabase credentials active:
    // const supabase = await createClient();
    // const { data: authUser, error } = await supabase.auth.signUp({ ... });

    // 3. Generate JWT Access Token & Refresh Token
    const payload = {
      userId: `usr_${Date.now()}`,
      email: validatedData.email,
      fullName: validatedData.fullName,
    };

    const tokens = generateTokens(payload);

    // 4. Set HTTP-Only Cookies
    await setAuthCookies(tokens);

    return {
      success: true,
      message: `Account created successfully for ${validatedData.fullName}!`,
      user: {
        email: validatedData.email,
        fullName: validatedData.fullName,
      },
    };
  } catch (error: any) {
    return {
      success: false,
      message: error?.message || "Registration failed. Please try again.",
    };
  }
}

/**
 * Next.js Server Action: User Authentication (Login)
 */
export async function loginAction(data: {
  email: string;
  password: string;
}): Promise<ActionResponse> {
  try {
    // 1. Zod Validation
    const validatedData = loginSchema.parse(data);

    // 2. Generate JWT Access Token & Refresh Token
    const payload = {
      userId: `usr_${Date.now()}`,
      email: validatedData.email,
      fullName: validatedData.email.split("@")[0],
    };

    const tokens = generateTokens(payload);

    // 3. Set HTTP-Only Cookies
    await setAuthCookies(tokens);

    return {
      success: true,
      message: "Successfully logged in! Welcome back.",
      user: {
        email: validatedData.email,
      },
    };
  } catch (error: any) {
    return {
      success: false,
      message: error?.message || "Invalid credentials. Please try again.",
    };
  }
}

/**
 * Next.js Server Action: Logout
 */
export async function logoutAction(): Promise<ActionResponse> {
  await clearAuthCookies();
  return {
    success: true,
    message: "Logged out successfully.",
  };
}
