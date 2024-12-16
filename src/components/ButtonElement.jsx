import React from 'react'

const ButtonElement = ({
    className, 
    onClick,
    children,
    width,
    height,
    ...props

}) => {

    const customStyles={
        height,
        width
    }

  return (
    <button className={`px-4 font-semibold rounded-md ${className}`}
    style={customStyles}
    onClick={onClick}
    {...props}
    >
        {children}
    </button>
  )
}

export default ButtonElement