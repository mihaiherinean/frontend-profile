import { IAddress } from "./IAdress"
import { IRoute } from "./IRoute"

export interface IUser {
  id: number,
  email: string,
  firstName: string,
  lastName: string,
  phone: string,
  age: number,
  experience: number,
  linkedin: string,
  position: string,
  address: IAddress,
  description: string,
  routes: IRoute[],
  skills: string[],
  imgUrl: string
}
