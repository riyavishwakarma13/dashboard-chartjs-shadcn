"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const defaultUsername = "admin";
const defaultPassword = "admin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (username !== defaultUsername || password !== defaultPassword) {
        setError("Invalid username or password");
        return;
      }

      console.log("Successful Login (for demonstration only)");

      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <div>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-center">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="space-y-1">
                <label className="font-medium" htmlFor="username">
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="admin"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <label className="font-medium" htmlFor="password">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                  placeholder="*****"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white px-4 py-2 rounded-lg"
              >
                Login
              </button>
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
