import TopNavigation from "@/components/TopNavigation";
import React from "react";
import SideBarNavigation from "@/components/SideBarNavigation";

export const metadata = {
  title: "Pages",
  description: "store",
};

const layout = ({ children }) => {
  return (
    <>
      <main className="w-full relative">
      <TopNavigation />
        <div className="min-h-screen w-full justify-between p-0 mx-auto mt-[5.5rem] relative grid grid-cols-[0.2fr_1fr] items-start gap-4">
        <SideBarNavigation />
        <div className="w-full m-auto h-full px-4 pb-4">{children}</div>
        </div>
      </main>
    </>
  );
};

export default layout;


