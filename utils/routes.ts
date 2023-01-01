export const routes = {
  getHome: () => `/conversations`,
  getConversations: () => `/conversations`,
  getConversation: (id: string) => `/conversations/${id}`,
  getProfile: (r?: string) => `/profile${r ?? ""}`
}

export default routes;