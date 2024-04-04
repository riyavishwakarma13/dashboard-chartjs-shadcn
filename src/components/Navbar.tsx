"use client";
import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { useRouter } from "next/navigation";
import AuthContext from "@/lib/context";
import { useContext } from "react";

const Navbar = () => {
  const router = useRouter();
  const { handleLogout } = useContext(AuthContext);

  const handleLogoutClick = () => {
    handleLogout();
    router.push("/"); // Redirects to login after logout
  };
  return (
    <Menubar className="sticky top-2 w-full h-14 backdrop-blur-md px-3 bg-white/25">
      <MenubarMenu>
        <div className="flex justify-between w-full gap-4 items-center">
          <Label className="text-lg">Dashboard</Label>
          <Button onClick={handleLogoutClick}>Logout</Button>
        </div>
      </MenubarMenu>
    </Menubar>
  );
};

export default Navbar;
