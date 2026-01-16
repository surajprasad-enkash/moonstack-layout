// "use client"

// import { getCaseStudiesServer } from "@/helper"
// import { useEffect, useState } from "react"

// interface ProviderProps {
//   perPage: number
//   children: (props: {
//     items: any[]
//     loading: boolean
//     error: string | null
//     hasMore: boolean
//     loadMore: () => void
//   }) => React.ReactNode
// }

// export default function CaseStudyApiProvider({
//   perPage,
//   children,
// }: ProviderProps) {
//   const [items, setItems] = useState<any[]>([])
//   const [page, setPage] = useState(1)
//   const [totalPages, setTotalPages] = useState(1)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)

//   const fetchData = async (pageNo: number) => {
//     try {
//       setLoading(true)
//       setError(null)

//       const data = await getCaseStudiesServer(pageNo, perPage)

//       setItems((prev) => (pageNo === 1 ? data.items : [...prev, ...data.items]))
//       setTotalPages(data.totalPages)
//     } catch (err: any) {
//       setError(err.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     setPage(1)
//     fetchData(1)
//   }, [perPage])

//   const loadMore = () => {
//     if (page < totalPages && !loading) {
//       const nextPage = page + 1
//       setPage(nextPage)
//       fetchData(nextPage)
//     }
//   }

//   return (
//     <>
//       {children({
//         items,
//         loading,
//         error,
//         hasMore: page < totalPages,
//         loadMore,
//       })}
//     </>
//   )
// }
