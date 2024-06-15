import React from "react"

interface IInputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const InputText: React.FC<IInputTextProps> = ({label, ...props}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={props.name}
        className="block w-full pb-1 text-sm transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
      >
        {label}
      </label>
      <input
        {...props}
        type="text"
        className="text-sm md:text-base peer h-10 w-full text-gray-800 rounded-md bg-gray-50 px-4 outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
      />
    </div>
  )
}
