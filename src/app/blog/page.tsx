import {ArticleCard} from "@/components/common"
import {Pagination} from "@/components/common/Pagination"
import {fetchPosts} from "@/services/blog"
import {checkDevice} from "@/utils/checkDevice"
import {headers} from "next/headers"

export const dynamic = "force-dynamic"
export default async function BlogListPage({
  searchParams,
}: {
  searchParams: {[key: string]: string | undefined}
}) {
  const reqHeader = headers()
  const isMobile = checkDevice(reqHeader)
  const page = searchParams?.page || 1

  const data = await fetchPosts({
    page: Number(page),
    per_page: isMobile ? 3 : 9,
  })

  return (
    <section className="flex flex-col justify-center md:gap-10 gap-5">
      <div className="mb-6 p-4 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-2">Welcome to My Blog</h2>
        <p className="text-md">
          Explore our collection of insightful articles on a variety of topics.
          Stay informed, get inspired, and join the conversation. Whether you&apos;re
          here to learn something new or just to catch up on the latest trends,
          we&apos;ve got something for everyone.
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {data.map((item) => {
          return (
            <ArticleCard key={item.id} body={item.body} id={item.id} title={item.title} />
          )
        })}
      </div>
      <Pagination page={Number(page)} />
    </section>
  )
}
