import React from "react"

interface ISelectOptionProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: IOption[]
  label: string
}

interface IOption {
  label: string
  value: string
}
export const SelectOption: React.FC<ISelectOptionProps> = ({
  options,
  label,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm" htmlFor={props.id}>{label}</label>
      <div className="relative mb-2 flex items-center after:w-[8px] after:h-[8px] after:border-black/70 after:border-b after:border-r after:transform after:rotate-45 after:absolute after:right-3">
        <select
          {...props}
          className="text-black/70 bg-white px-3 py-2 transition-all cursor-pointer hover:border-blue-600/30 border border-gray-200 rounded-lg outline-blue-600/50 appearance-none invalid:text-black/30 w-64"
        >
          <option value="" hidden>
            Select Gender
          </option>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}
