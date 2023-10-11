import { IAsset } from "./IAsset"
import { IGeneralInfo } from "./IGeneralInfo"
import { IRoute } from "./IRoute"

export interface IUser {
  id: number,
  firstName: string,
  lastName: string,
  position: string,
  generalInfo: IGeneralInfo,
  description: string[],
  routes: IRoute[],
  skills: string[],
  imgUrl: string,
  favoriteImage: string,
  assets: IAsset[]
}
