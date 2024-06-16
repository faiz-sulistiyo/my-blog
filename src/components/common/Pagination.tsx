import Link from "next/link"
import React from "react"

interface ISearchParams {
  key: string
  value: string
}

interface IPaginationProps {
  page: number
  disableNextPage: boolean
  disablePrevPage: boolean
  searchParams?: ISearchParams
}

export const Pagination: React.FC<IPaginationProps> = ({
  page,
  searchParams,
  disableNextPage,
  disablePrevPage,
}) => {
  const currentPage = page
  const nextPage = currentPage + 1
  const prevPage = currentPage - 1

  const buildUrl = (pageNumber: number) => {
    const params = new URLSearchParams()
    params.set("page", pageNumber.toString())
    if (searchParams && searchParams.key && searchParams.value) {
      params.set(searchParams.key, searchParams.value)
    }
    return `?${params.toString()}`
  }

  return (
    <div className="flex justify-center gap-2 mt-4">
      <Link
        className={`px-4 py-2 text-sm rounded ${
          disablePrevPage ? "cursor-not-allowed opacity-50" : ""
        }`}
        href={currentPage > 1 ? buildUrl(prevPage) : ""}
        aria-disabled={disablePrevPage}
      >
        &lsaquo; Previous
      </Link>
      <Link
        className={`px-4 py-2 text-sm rounded ${
          disableNextPage ? "cursor-not-allowed opacity-50" : ""
        }`}
        aria-disabled={disableNextPage}
        href={buildUrl(nextPage)}
      >
        Next &rsaquo;
      </Link>
    </div>
  )
}
