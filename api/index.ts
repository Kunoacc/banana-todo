import { ClientDelete, ClientGet, ClientPatch, ClientPost } from "~/helpers/http";
import { authentication } from "./authentication";
import { todo } from "./todo";

const api = (get: ClientGet, post: ClientPost, patch: ClientPatch, del: ClientDelete) => ({
  authentication: { ...authentication(get, post, patch, del) },
  todo: { ...todo(get, post, patch, del) }
})

export default api;