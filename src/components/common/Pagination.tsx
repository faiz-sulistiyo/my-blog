import Link from "next/link"
import React from "react"

interface IPaginationProps {
  page: number
}
export const Pagination: React.FC<IPaginationProps> = ({page}) => {
  const currentPage = page
  const nextPage = currentPage + 1
  const prevPage = currentPage - 1
  return (
    <div className="flex justify-center gap-2 mt-4">
      <Link
        className="px-4 py-2 text-sm rounded"
        href={`${currentPage > 1 ? "?page=" + prevPage : ""}`}
      >
        &lsaquo; Previous
      </Link>
      <Link className="px-4 py-2 text-sm rounded" href={`?page=${nextPage}`}>
        Next &rsaquo;
      </Link>
    </div>
  )
}
