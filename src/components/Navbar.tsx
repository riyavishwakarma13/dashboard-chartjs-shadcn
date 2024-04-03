import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

const Navbar = () => {
  return (
    <Menubar className="sticky top-2 w-full h-14 backdrop-blur-md px-3 bg-white/25">
      <MenubarMenu>
        <div className="flex justify-between w-full gap-4 items-center">
          <Label className="text-lg">Dashboard</Label>
          <Button>Logout</Button>
        </div>
      </MenubarMenu>
    </Menubar>
  );
};

export default Navbar;
