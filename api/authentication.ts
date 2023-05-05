import { ClientGet, ClientPatch, ClientPost, ClientDelete } from "~/helpers/http"
import { User, UserLoginRequest } from "~/interfaces/user.interface"

export const authentication = (get: ClientGet, post: ClientPost, patch: ClientPatch, del: ClientDelete) => ({
  async login(credentials: UserLoginRequest) {
    return await post<User, UserLoginRequest>('/auth/login', credentials, true)
  }
})