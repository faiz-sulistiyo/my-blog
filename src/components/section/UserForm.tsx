"use client"
import {IUserPayload} from "@/types/user"
import React, {useCallback, useMemo, useState} from "react"
import {
  Button,
  InputText,
  SelectOption,
  SwitchButton,
} from "@/components/common"

interface IUserFormProps {
  user?: IUserPayload
  readonly?: boolean
  onSubmit:(user:IUserPayload)=>void
  onHide:()=>void;
  title:string;
}
export const UserForm: React.FC<IUserFormProps> = ({
  user,
  readonly = false,
  onHide,
  onSubmit,
  title,
}) => {
  const initialUser: IUserPayload = useMemo(() => {
    return (
      user || {
        email: "",
        gender: null,
        name: "",
        status: null,
      }
    )
  }, [user])

  const [currentUser, setCurrentUser] = useState<IUserPayload>(initialUser)
  const handleSubmitUser = useCallback(
    async (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(currentUser);
    },
    [currentUser,onSubmit],
  )

  const handleOnChangeText = useCallback(
    (val: string, key: string) => {
      setCurrentUser((prev) => ({...prev, [key]: val}))
    },
    [setCurrentUser],
  )

  const genderOption = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
  ]


  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center h-screen w-full bg-black bg-opacity-70">
      <form onSubmit={handleSubmitUser} className="flex flex-col gap-4 bg-black p-5 rounded-md border">
        <h1 className="text-xl font-bold text-center">{title}</h1>
        <InputText
          readOnly={readonly}
          id="name"
          label="Name"
          type="text"
          placeholder="Enter Username"
          onChange={(e) => handleOnChangeText(e.currentTarget.value, "name")}
          value={currentUser.name}
        />
        <InputText
          readOnly={readonly}
          id="email"
          label="Email"
          type="email"
          placeholder="Enter Email"
          onChange={(e) => handleOnChangeText(e.currentTarget.value, "email")}
          value={currentUser.email}
        />
        <SelectOption
          label="Gender"
          id="gender"
          aria-readonly={readonly}
          disabled={readonly}
          value={currentUser.gender?.toString()}
          onChange={(e) => handleOnChangeText(e.currentTarget.value, "gender")}
          options={genderOption}
        />
        <SwitchButton
          readOnly={readonly}
          id="status"
          label="Status"
          disabled={readonly}
          checked={currentUser?.status === "active"}
          onChange={(e) => {
            const checked = e.currentTarget.checked ? "active" : "inactive"
            setCurrentUser((prev) => ({...prev, status: checked}))
          }}
        />
        <div className="flex gap-2">
          <Button type="button" label="Cancel" onClick={onHide} />
          <Button label="Submit" type="submit" disabled={readonly} hidden={readonly}/>
        </div>
      </form>
    </div>
  )
}
