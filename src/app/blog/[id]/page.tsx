import {CommentForm} from "@/components/section"
import {fetchCommentsByPostId, fetchPostById} from "@/services/blog"
import {Metadata} from "next"
import React from "react"

interface IBlogDetailPageParams {
  id: string
}

export async function generateMetadata({
  params,
}: {
  params: IBlogDetailPageParams
}): Promise<Metadata> {
  // fetch data
  const article = await fetchPostById(params.id)

  return {
    title: article.title,
    description: article.body,
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: IBlogDetailPageParams
}) {
  const article = await fetchPostById(params.id)
  const comments = await fetchCommentsByPostId(article.id)

  return (
    <React.Fragment>
      <section className="flex flex-col gap-6 mb-6">
        <h1 className="font-bold text-2xl">{article.title}</h1>
        <p className="md:text-base text-sm">{article.body}</p>
      </section>
      <CommentForm comments={comments} postId={params.id}/>
    </React.Fragment>
  )
}
