"use client"
import {IComment, ICommentPayload} from "@/types/blog"
import React, {useCallback, useState} from "react"
import {
  Button,
  CommentCard,
  InputText,
  InputTextArea,
  LoadingOverlay,
} from "@/components/common"
import {createComment} from "@/services/blog"
import {useRouter} from "next/navigation"

interface ICommentFormProps {
  comments: IComment[]
  postId: string
}

export const CommentForm: React.FC<ICommentFormProps> = ({
  comments,
  postId,
}) => {
  const [listComment, setListComment] = useState<IComment[]>(comments)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()
  const [comment, setComment] = useState<ICommentPayload>({
    post_id: parseInt(postId),
    body: "",
    email: "",
    name: "",
  })

  const handleSubmitComment = useCallback(
    async (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault()
      setIsLoading(true)
      try {
        // Create the new comment
        await createComment(comment)

        // Update the list of comments
        router.refresh()

        // Clear the comment form fields
        setComment({
          post_id: parseInt(postId),
          body: "",
          email: "",
          name: "",
        })
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.error("Error creating comment:", error)
        // Handle error state or feedback to the user
      }
    },
    [comment, postId,router],
  )

  const handleOnChangeText = useCallback((val: string, key: string) => {
    setComment((prev) => ({
      ...prev,
      [key]: val,
    }))
  }, [])

  return (
    <div className="flex flex-col mx-auto gap-8">
      <LoadingOverlay isLoading={isLoading} />
      <form onSubmit={handleSubmitComment} className="flex flex-col gap-2">
        <h2 className="font-bold">Leave your comment</h2>
        <InputText
          label="Name"
          value={comment.name}
          placeholder="Enter your name"
          onChange={(e) => handleOnChangeText(e.currentTarget.value, "name")}
          name="name"
          required
          id="name"
        />
        <InputText
          id="email"
          type="email"
          label="Email"
          value={comment.email}
          name="email"
          placeholder="Enter your email"
          required
          onChange={(e) => handleOnChangeText(e.currentTarget.value, "email")}
        />
        <InputTextArea
          id="comment"
          label="Comment"
          value={comment.body}
          name="comment"
          placeholder="Enter your comment"
          onChange={(e) => handleOnChangeText(e.currentTarget.value, "body")}
        />
        <Button type="submit" label="Submit" />
      </form>
      {listComment.length > 0 && (
        <div className="flex flex-col overflow-y-scroll max-h-52 gap-2 border-y py-4">
          {listComment.map((comment) => {
            return (
              <CommentCard
                key={comment.id}
                body={comment.body}
                email={comment.email}
                name={comment.name}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
