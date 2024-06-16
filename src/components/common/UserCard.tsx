import Link from "next/link"
import React from "react"
import {FaRegEdit} from "react-icons/fa"
import {IoMdFemale, IoMdMale} from "react-icons/io"
import {ActionSheet} from "./ActionSheet"

interface IUserCardProps {
  id: number
  name: string
  email: string
  gender: "male" | "female"
  status: "active" | "inactive"
}
export const UserCard: React.FC<IUserCardProps> = ({
  id,
  email,
  gender,
  name,
  status,
}) => {
  const getRandomPastelColor = () => {
    const hue = Math.floor(Math.random() * 360)
    const saturation = 50 + Math.random() * 10
    const lightness = 85 + Math.random() * 10
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`
  }

  const initialName = name.substring(0, 1)
  return (
    <div className="relative flex h-full flex-col items-center gap-2 rounded-lg overflow-hidden shadow-lg border p-6">
      <div
        className="h-20 w-20 rounded-full relative text-gray-700 font-bold text-xl flex items-center justify-center"
        style={{background: getRandomPastelColor()}}
      >
        {initialName.toUpperCase()}
        <span
          className={`${
            status === "inactive" ? "bg-red-600" : "bg-green-600"
          } absolute inline-block w-4 h-4 rounded-full bottom-1 right-1`}
        />
      </div>
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold">{name}</h2>
        {gender === "female" ? (
          <IoMdFemale size={20} className="inline-block" />
        ) : (
          <IoMdMale size={20} className="inline-block" />
        )}
      </div>
      <p className="text-sm">{email}</p>
      <ActionSheet user={{email, gender, id, name, status}} />
    </div>
  )
}
