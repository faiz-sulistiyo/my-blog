import React from "react"

interface IInputTextAreaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string
}

export const InputTextArea: React.FC<IInputTextAreaProps> = ({
  label,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={props.name}
        className="block text-sm mb-1"
      >
        {label}
      </label>
        <textarea
          {...props}
          className="w-full !text-gray-800 bg-white border border-slate-300 appearance-none rounded-lg px-3.5 py-2.5 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          rows={3}
          placeholder="Your Comment..."
          required
        ></textarea>
    </div>
  )
}
