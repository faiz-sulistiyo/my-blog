import React from "react"

interface ISwitchButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean
  label:string
}

export const SwitchButton: React.FC<ISwitchButtonProps> = ({
  checked,
  label,
  ...props
}) => {
  return (
    <label htmlFor={props.id} className="flex flex-col cursor-pointer">
      <div className="">{label}</div>

      <div className="relative">
        <input
          {...props}
          checked={checked}
          type="checkbox"
          className="sr-only"
        />

        <div className={` block bg-gray-600 w-14 h-8 rounded-full`}></div>

        <div
          className={`${
            checked ? "translate-x-full bg-blue-200" : "bg-white"
          } absolute left-1 top-1 w-6 h-6 rounded-full transition-all`}
        ></div>
      </div>

    </label>
  )
}
