"use client"
import React, {useCallback, useMemo, useState} from "react"
import {FaEye, FaRegEdit, FaTrash} from "react-icons/fa"
import {ConfirmDeleteModal} from "./ConfirmDeleteModal"
import {deleteUser, updateUser} from "@/services/user"
import {useRouter} from "next/navigation"
import {UserForm} from "@/components/section"
import {IUser, IUserPayload} from "@/types/user"
import {LoadingOverlay} from "./LoadingOverlay"

interface IActionSheet {
  user: IUser
}
export const ActionSheet: React.FC<IActionSheet> = ({user}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showForm, setShowForm] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const router = useRouter()
  const handleClickDelete = useCallback(() => {
    setShowModal(true)
  }, [])

  const handleConfirmDelete = useCallback(async () => {
    setIsLoading(true)
    await deleteUser(user.id)
    setShowModal(false)
    setIsLoading(false)
    router.refresh()
  }, [user.id, router])

  const handleOnHideModal = useCallback(() => {
    setShowModal(false)
  }, [])

  const handleClickEdit = useCallback(() => {
    setIsEdit(true)
    setShowForm(true)
  }, [])

  const handleClickDetail = useCallback(() => {
    setIsEdit(false)
    setShowForm(true)
  }, [])

  const handleSubmit = useCallback(
    async (userPayload: IUserPayload) => {
      setIsLoading(true)
      if (userPayload.id) {
        await updateUser(userPayload.id, userPayload)
      }
      setIsLoading(false)
      setShowForm(false)
      router.refresh()
    },
    [router],
  )

  const handleHideForm = useCallback(() => {
    setShowForm(false)
  }, [])

  const title = useMemo(() => {
    return isEdit ? "Edit User" : "Detail User"
  }, [isEdit])
  return (
    <React.Fragment>
      <LoadingOverlay isLoading={isLoading} />
      {showModal && (
        <ConfirmDeleteModal
          onHide={handleOnHideModal}
          onConfirm={handleConfirmDelete}
        />
      )}
      {showForm && (
        <UserForm
          title={title}
          user={user}
          onHide={handleHideForm}
          onSubmit={handleSubmit}
          readonly={!isEdit}
        />
      )}
      <div className="flex mt-auto justify-center items-center gap-2">
        <button aria-label="edit-user" onClick={handleClickEdit}>
          <FaRegEdit size={20} />
        </button>
        <button aria-label="detail-user" onClick={handleClickDetail}>
          <FaEye size={20} />
        </button>
        <button aria-label="delete-user" onClick={handleClickDelete}>
          <FaTrash size={20} />
        </button>
      </div>
    </React.Fragment>
  )
}
