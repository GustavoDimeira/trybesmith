export interface Product {
  id?: number,
  name: string,
  amount: string,
  ordeId?: number
}

export interface Order {
  id: number,
  userId: number,
  productsIds?: number[],
}

export interface User {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password: string
}

export interface LoginResponse {
  token: string | null,
  hasFail: boolean,
}

export interface DbLoginAnswer {
  username?: string,
  password: string,
}
