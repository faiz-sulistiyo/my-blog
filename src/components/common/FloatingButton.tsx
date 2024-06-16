"use client"
import React, {useCallback, useState} from "react"
import {FaPlus} from "react-icons/fa"
import {LoadingOverlay} from "./LoadingOverlay"
import {UserForm} from "@/components/section"
import {IUserPayload} from "@/types/user"
import {createUser} from "@/services/user"
import {useRouter} from "next/navigation"

export const FloatingButton: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()
  const handleHideForm = useCallback(() => {
    setShowForm(false)
  }, [])
  const handleSubmit = useCallback(
    async (user: IUserPayload) => {
      setIsLoading(true)
      await createUser(user)
      setIsLoading(false)
      setShowForm(false)
      router.refresh()
    },
    [router],
  )
  const handleClickAdd = useCallback(() => {
    setShowForm(true)
  }, [])
  return (
    <React.Fragment>
      <LoadingOverlay isLoading={isLoading} />
      {showForm && (
        <UserForm
          title="Create User"
          onHide={handleHideForm}
          onSubmit={handleSubmit}
        />
      )}
      <button
        onClick={handleClickAdd}
        type="button"
        aria-label="create-user"
        className="h-12 w-12 fixed md:bottom-10 bottom-5 right-5 md:right-24 flex items-center justify-center bg-white text-black border rounded-full z-30"
      >
        <FaPlus size={18} />
      </button>
    </React.Fragment>
  )
}
