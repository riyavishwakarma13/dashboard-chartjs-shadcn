"use client";
import React, { useContext, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import AuthContext from "@/lib/context";

interface LoginFormData {
  username: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: "",
  });
  const router = useRouter();
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.username === "admin" && formData.password === "admin") {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      router.push("/dashboard");
    } else {
      alert("Invalid username or password");
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
            <form onSubmit={handleSubmit} className="space-y-5">
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
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
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
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white px-4 py-2 rounded-lg"
              >
                Login
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
