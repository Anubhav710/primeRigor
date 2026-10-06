"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

// Import react-icons
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff, FiCheckCircle } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { loginAction } from "@/app/actions/auth";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Zod Validation Schema for Login
const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // GSAP animation references
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const creditBadgeRef = useRef<HTMLDivElement>(null);

  // React Hook Form with Zod Resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Left panel elements staggered entrance
      tl.from(".animate-item", {
        y: 20,
        opacity: 0,
        duration: 0.65,
        stagger: 0.07,
      });

      // Right image smooth scale zoom entrance
      gsap.fromTo(
        imageRef.current,
        { scale: 1.08, opacity: 0.9 },
        { scale: 1, opacity: 1, duration: 1.3, ease: "power2.out" }
      );

      // Credit badge slide in
      gsap.from(creditBadgeRef.current, {
        x: 30,
        opacity: 0,
        duration: 0.75,
        delay: 0.5,
        ease: "back.out(1.2)",
      });
    },
    { scope: containerRef }
  );

  const onSubmit = async (data: LoginFormValues) => {
    setIsSubmitting(true);
    toast.loading("Logging in to your account...", { id: "auth-toast" });

    try {
      // Execute Server Action
      const result = await loginAction(data);

      setIsSubmitting(false);

      if (result.success) {
        setIsSuccess(true);
        toast.success(result.message, { id: "auth-toast" });

        gsap.to(formRef.current, {
          scale: 0.98,
          yoyo: true,
          repeat: 1,
          duration: 0.15,
        });
      } else {
        toast.error(result.message, { id: "auth-toast" });
      }
    } catch (err: any) {
      setIsSubmitting(false);
      toast.error(err?.message || "An unexpected error occurred", { id: "auth-toast" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex min-h-screen w-full flex-col lg:flex-row bg-white text-neutral-900 overflow-hidden"
    >
      {/* Left Panel - Login Form Container */}
      <div className="flex flex-1 flex-col justify-between px-6 py-8 sm:px-12 md:px-16 lg:max-w-[480px] xl:max-w-[540px] z-10 bg-white min-h-screen">
        {/* Header / Brand Logo Area */}
        <div className="flex flex-col items-center pt-4 sm:pt-8">
          <div className="animate-item text-center space-y-1 mb-7">
            <h1 className="text-2xl sm:text-[28px] font-bold tracking-tight text-neutral-900">
              Welcome
            </h1>
            <p className="text-sm font-medium text-neutral-600">
              Log in to Lummi
            </p>
          </div>
        </div>

        {/* Form Content */}
        <div ref={formRef} className="w-full max-w-sm mx-auto">
          {isSuccess ? (
            <div className="animate-item bg-neutral-900 text-white p-6 rounded-lg shadow-xl text-center space-y-4 my-8">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <FiCheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold">Welcome Back!</h3>
              <p className="text-xs text-neutral-300">
                You have successfully logged in. JWT access and refresh tokens have been issued.
              </p>
              <Button
                onClick={() => {
                  setIsSuccess(false);
                  reset();
                }}
                className="w-full bg-white text-black hover:bg-neutral-200 mt-2 text-xs font-semibold"
              >
                Back to Login
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Email Input Field with Zod Validation */}
              <div className="animate-item relative">
                <Input
                  id="email"
                  type="email"
                  label="Email address*"
                  placeholder=""
                  error={errors.email?.message}
                  {...register("email")}
                  className="bg-white text-neutral-900 border-neutral-900 focus:border-black rounded-[4px] h-12 pt-3 pb-2 text-sm font-medium shadow-none"
                />
              </div>

              {/* Password Input Field with Zod Validation & Eye Toggle */}
              <div className="animate-item relative">
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password*"
                    error={errors.password?.message}
                    {...register("password")}
                    className="bg-white text-neutral-900 pr-10 border-neutral-300 focus:border-black rounded-[4px] h-12 text-sm placeholder:text-neutral-400 shadow-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-4 text-neutral-400 hover:text-neutral-800 transition-colors p-1"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <FiEyeOff className="w-4 h-4" />
                    ) : (
                      <IoSettingsOutline className="w-4 h-4 opacity-70" />
                    )}
                  </button>
                </div>
              </div>

              {/* Reset Password Link */}
              <div className="animate-item flex justify-start pt-0.5">
                <Link
                  href="#reset"
                  className="text-xs font-semibold text-neutral-900 hover:underline transition-all"
                >
                  Reset password
                </Link>
              </div>

              {/* Continue Submit Button */}
              <div className="animate-item pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white hover:bg-neutral-800 h-11 text-sm font-semibold rounded-[4px] shadow-none transition-transform active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Authenticating...
                    </span>
                  ) : (
                    "Continue"
                  )}
                </Button>
              </div>

              {/* Sign Up Link */}
              <div className="animate-item text-center text-xs font-medium text-neutral-600 pt-1">
                <span>Don't have an account? </span>
                <Link
                  href="/signup"
                  className="font-bold text-neutral-900 hover:underline ml-1"
                >
                  Sign up
                </Link>
              </div>

              {/* OR Separator */}
              <div className="animate-item my-5">
                <Separator text="OR" />
              </div>

              {/* Continue with Google Button */}
              <div className="animate-item">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => toast.info("Google OAuth login initiated")}
                  className="w-full border-neutral-300 bg-white text-neutral-900 font-semibold hover:bg-neutral-50 h-11 text-xs sm:text-sm rounded-[4px] flex items-center justify-center gap-3 shadow-none transition-all"
                >
                  <FcGoogle className="w-5 h-5 shrink-0" />
                  <span>Continue with Google</span>
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Footer Legal Notice */}
        <div className="animate-item text-center text-[11px] text-neutral-500 max-w-xs mx-auto leading-relaxed pt-8 pb-3">
          By signing in, you agree to Lummi's{" "}
          <Link href="#terms" className="font-bold text-neutral-900 hover:underline">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="#privacy" className="font-bold text-neutral-900 hover:underline">
            Privacy Policy
          </Link>
          .
        </div>
      </div>

      {/* Right Panel - Visual Hero Display */}
      <div className="relative flex-1 hidden lg:block bg-neutral-900 overflow-hidden">
        <div
          ref={imageRef}
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 ease-out"
          style={{
            backgroundImage: `url('/images/hero-vehicle.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
        </div>

        {/* Bottom Right Floating Image Credit Card */}
        <div
          ref={creditBadgeRef}
          className="absolute bottom-6 right-6 z-20 flex items-center gap-3 rounded-xl bg-black/60 backdrop-blur-md px-3.5 py-2.5 text-white border border-white/10 shadow-2xl transition-all duration-300 hover:bg-black/80 hover:scale-105 group cursor-pointer"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 shrink-0 bg-neutral-800">
            <Image
              src="/images/hero-vehicle.jpg"
              alt="Ricardo Matos"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-semibold text-white/95 leading-tight tracking-wide">
              Futuristic Vehicle in Desert Landscape
            </span>
            <span className="text-[10px] font-medium text-white/70 leading-tight">
              By Ricardo Matos
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
