import React from "react";

export const metadata = {
  title: "Pages",
  description: "homepage ",
};

const layout = ({ children }) => {
  return (
    <>
      <main className="w-full h-screen relative">
        <div className="w-full m-auto h-full flex">{children}</div>
      </main>
    </>
  );
};

export default layout;
