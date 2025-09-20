import React from 'react'

export const metadata = {
  title: "Admin Page",
  description: "Admin page",
};
const LayoutAdmin = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default LayoutAdmin
