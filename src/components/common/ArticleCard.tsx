import Link from "next/link"
import React from "react"

interface IArticleCardProps {
    title:string;
    body:string;
    id:number;
}

export const ArticleCard: React.FC<IArticleCardProps> = ({body,id,title}) => {
  return (
    <div className="flex h-full flex-shrink-0 flex-col p-4 rounded-md gap-2 border border-gray-900">
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="line-clamp-2 text-sm">{body}</p>
      <Link className="mt-auto text-sm" href={`blog/${id}`}>
        Read more ...
      </Link>
    </div>
  )
}
