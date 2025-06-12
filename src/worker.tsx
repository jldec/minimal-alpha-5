import { defineApp } from 'rwsdk/worker'
import { Document } from '@/Document'
import { env } from 'cloudflare:workers'
import { index, render, route } from 'rwsdk/router'
import { routeAgentRequest } from 'agents'

import App from '@/app/App'

export { ChatAgentDO } from '@/app/ChatAgentDO'

export type AppContext = {}

export default defineApp([
  async ({ request }) => {
    const response = await routeAgentRequest(request, env)
    if (response) {
      return response
    }
  },
  // context(justinvdm): partysocket relies on `window.location.host` for client components.
  // This won't be set durin SSR, so we need to give it the host explicitly
  // https://github.com/cloudflare/partykit/blob/09c1d1c382252ec7a1c998a5f8faf4e7d6d2b484/packages/partysocket/src/react.ts#L25
  render(Document, [index([App])])
])
