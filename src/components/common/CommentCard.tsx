import React from "react"

interface ICommentCardProps {
  name: string
  email: string
  body: string
}
export const CommentCard: React.FC<ICommentCardProps> = ({
  body,
  email,
  name,
}) => {
  const initialName = name.substring(0, 1)
  return (
    <div className="flex flex-col gap-4 text-sm md:text-base py-1 px-4">
      <div className="flex gap-2 md:gap-4 items-center">
        <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-600 text-white">
          {initialName}
        </div>
        <div className="flex flex-col">
          <h2>{name}</h2>
          <h3 className="text-xs md:text-sm text-gray-300">{email}</h3>
        </div>
      </div>
      <p>{body}</p>
    </div>
  )
}
