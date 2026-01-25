"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export function LoginForm({ className, ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        {/* Header */}
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your business email below and login
          </p>
        </div>

        {/* Email */}
        <Field>
          <FieldLabel htmlFor="email" className="text-xs">
            Business Email
          </FieldLabel>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </Field>

        {/* Password */}
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password" className="text-xs">
              Password
            </FieldLabel>
            <Link
              href="#"
              className="ml-auto text-xs underline-offset-4 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              placeholder="******"
              className="pr-10"
            />
            <button
              type="button"
              tabIndex={-1}
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </Field>

        {/* Login button */}
        <Field>
          <Button type="submit">Login</Button>
        </Field>

        {/* Separator */}
        <FieldSeparator className="bg-transparent">
          Or continue with
        </FieldSeparator>

        {/* GitHub login */}
        <Field>
          <Button
            variant="outline"
            type="button"
            className="flex gap-2 items-center"
          >
            <svg
              className="size-4"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  fill="#4285F4"
                  d="M24 9.5c3.54 0 6.7 1.22 9.2 3.6l6.85-6.85C36.45 2.7 30.7 0 24 0 14.82 0 6.73 5.8 2.7 14.1l7.98 6.2C12.1 13.7 17.6 9.5 24 9.5z"
                />
                <path
                  fill="#34A853"
                  d="M46.1 24.5c0-1.64-.15-3.22-.42-4.75H24v9.02h12.4c-.54 2.9-2.18 5.36-4.65 7.04l7.2 5.6C43.7 37.1 46.1 31.3 46.1 24.5z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.68 28.3c-1.1-3.2-1.1-6.7 0-9.9l-7.98-6.2C.9 16.1 0 20.2 0 24.5c0 4.3.9 8.4 2.7 12.3l7.98-6.2z"
                />
                <path
                  fill="#EA4335"
                  d="M24 48c6.48 0 11.92-2.14 15.9-5.8l-7.2-5.6c-2.02 1.36-4.6 2.16-8.7 2.16-6.4 0-11.9-4.2-13.9-10.1l-7.98 6.2C6.73 42.2 14.82 48 24 48z"
                />
                <path fill="none" d="M0 0h48v48H0z" />
              </g>
            </svg>
            Sign in with Google
          </Button>

          {/* Sign up link */}
          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
            <Link
              href="/onboarding?setup-your-business"
              className="underline underline-offset-4"
            >
              Sign up
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
