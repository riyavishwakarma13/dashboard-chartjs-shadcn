import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>RV</AvatarFallback>
        </Avatar>
      </MenubarMenu>
    </Menubar>
  );
};

export default Navbar;
