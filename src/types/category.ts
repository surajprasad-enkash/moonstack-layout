/* ================= CATEGORY ITEM ================= */

export interface ICategory {
  id: number
  slug: string
  name: string
}

/* ================= API RESPONSE ================= */

export interface ICategoryResponse {
  status: boolean
  count: number
  data: ICategory[]
}
