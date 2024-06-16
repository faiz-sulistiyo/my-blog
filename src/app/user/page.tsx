import {InputSearch, Pagination,UserCard,FloatingButton} from "@/components/common"
import {fetchUsers} from "@/services/user"
import {checkDevice} from "@/utils/checkDevice"
import {headers} from "next/headers"

export const dynamic = "force-dynamic"
export default async function UserListPage({
  searchParams,
}: {
  searchParams: {[key: string]: string | undefined}
}) {
  const reqHeader = headers()
  const isMobile = checkDevice(reqHeader)
  const page = Number(searchParams?.page || 1)
  const perPage = isMobile ? 3 : 9
  const name = searchParams?.name || ""

  const users = await fetchUsers({
    page,
    per_page: perPage,
    search: name,
    searchField: "name",
  })

  const isDisableNextPage = users.length < perPage
  const isDisablePrevPage = page === 1

  return (
    <section>
      <div className="flex flex-col gap-4 mb-6">
        <div className="p-4 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-2">Welcome!</h2>
          <p className="text-md">
            Here&apos;s a list of our users. Feel free to explore and manage
            user details as needed.
          </p>
        </div>
        <InputSearch searchField="name" defaultValue={name} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-2">
        {users.map((user) => {
          return (
            <UserCard
              key={user.toString()}
              id={user.id}
              email={user.email}
              gender={user.gender}
              name={user.name}
              status={user.status}
            />
          )
        })}
      </div>
      <Pagination
        page={page}
        disableNextPage={isDisableNextPage}
        disablePrevPage={isDisablePrevPage}
        searchParams={{key: "name", value: name}}
      />
      <FloatingButton />
    </section>
  )
}
