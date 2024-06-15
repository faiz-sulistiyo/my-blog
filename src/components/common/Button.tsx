import React from "react"

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export const Button: React.FC<IButtonProps> = ({label, ...props}) => {
  return (
    <button {...props} className={`${props.className} p-2 text-sm border rounded-md border-white`}>
      {label}
    </button>
  )
}
