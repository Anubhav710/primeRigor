import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { generateTokens, setAuthCookies } from "@/lib/auth/jwt";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && data?.user) {
      // Issue JWT tokens and set cookies upon Google OAuth completion
      const payload = {
        userId: data.user.id,
        email: data.user.email || "",
        fullName: data.user.user_metadata?.full_name || data.user.email?.split("@")[0] || "User",
      };

      const tokens = generateTokens(payload);
      await setAuthCookies(tokens);

      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Return user to login page if OAuth code exchange fails
  return NextResponse.redirect(`${origin}/login`);
}
