"use client"
import {useRouter} from "next/navigation"
import React, {useCallback, useEffect, useState} from "react"
import {IoMdClose, IoMdSearch} from "react-icons/io"

interface IInputSearch extends React.InputHTMLAttributes<HTMLInputElement> {
  searchField: string
  defaultValue?: string
}

export const InputSearch: React.FC<IInputSearch> = ({
  searchField,
  defaultValue,
  ...props
}) => {
  const router = useRouter()
  const [value, setValue] = useState<string>(defaultValue || "")

  const handleOnChange = useCallback(
    (e: React.SyntheticEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value)
    },
    [],
  )

  const handleOnSubmitSearch = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault()
      router.push(`?${searchField}=${value}`)
    },
    [value, searchField, router],
  )

  const handleClear = useCallback(()=>{
    setValue("");
    router.push("?");
  },[router,setValue])

  return (
    <form onSubmit={handleOnSubmitSearch}>
      <div className="bg-white border-2 shadow p-2 relative rounded-xl flex">
        <span className="w-auto flex justify-end items-center text-gray-500 p-2">
          <IoMdSearch size={20} />
        </span>
        <input
          {...props}
          className="border-white md:text-base text-gray-800 text-sm outline-none border-0 w-full rounded-xl p-2"
          type="text"
          value={value}
          onChange={handleOnChange}
          placeholder="Search user by its name.."
        />
        {value && (
          <button
            type="button"
            className="text-gray-800 text-xl p-2 pl-4 pr-4 ml-2"
            onClick={handleClear}
          >
            <IoMdClose />
          </button>
        )}
        <button
          type="submit"
          className="bg-black hover:bg-gray-700 rounded-xl text-white text-xl p-2 pl-4 pr-4 ml-2"
        >
          <p className="font-semibold text-xs">Search</p>
        </button>
      </div>
    </form>
  )
}
