import { NavItemPropsTypes, SidebarPropsTypes, navType } from "../@types";
import {
  ChevronLeft,
  DocumentIcon,
  FileIcon,
  HeartIcon,
  HomeIcon,
  PeopleIcon,
  Shareicon,
  TaskCompleteIcon,
} from "../assets/svgs";
import SettingsIcon from "../assets/images/settings-icon.png";

export default function ({ changeNav, selectedNav }: SidebarPropsTypes) {
  const navItems: { name: navType; icon: React.ReactNode }[] = [
    {
      name: "1",
      icon: <HomeIcon />,
    },
    {
      name: "2",
      icon: <PeopleIcon />,
    },
    {
      name: "3",
      icon: <TaskCompleteIcon />,
    },
    {
      name: "4",
      icon: <Shareicon />,
    },
    {
      name: "5",
      icon: <DocumentIcon />,
    },
    {
      name: "6",
      icon: <FileIcon />,
    },
    {
      name: "7",
      icon: <HeartIcon />,
    },
  ];

  return (
    <nav className="flex flex-col gap-12 shadow-sidebar w-[72px] items-center py-8 h-[100dvh] z-40 bg-[white]">
      <div className="flex flex-col justify-between items-center basis-5/6">
        <div className="w-12 h-12 rounded-full bg-[#D9D9D9]"></div>
        {navItems.map(({ name, icon }) => {
          return (
            <NavItem
              name={name}
              icon={icon}
              selectedNav={selectedNav}
              changeNav={changeNav}
            />
          );
        })}
        <div className="w-6">
          <ChevronLeft />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between basis-[10%]">
        <div className="w-5 cursor-pointer">
          <img src={SettingsIcon} alt="" />
        </div>
        <div className="bg-light-blue text-primary-blue w-8 h-8 text-[10px] rounded-full flex justify-center items-center">
          NT
        </div>
      </div>
    </nav>
  );
}

const NavItem = ({ name, icon, selectedNav, changeNav }: NavItemPropsTypes) => {
  return (
    <div
      className={`
      cursor-pointer
      ${
        selectedNav === name
          ? "p-3 rounded-md bg-light-blue text-primary-blue flex items-center justify-center w-12"
          : "text-[#0B0B0B] w-8 p-1"
      }`}
      onClick={() => changeNav(name)}
    >
      {icon}
    </div>
  );
};
