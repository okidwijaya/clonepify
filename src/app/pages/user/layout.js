import React from 'react';

export const metadata = {
  title: 'user starter',
  description: 'User Account ',
}

const layout = ({ children }) => {
  return (
    <>
        <div className="w-full relative">
            {children}
        </div>
    </>
  ) 
}

export default layout;
