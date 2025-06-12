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
  render(Document, [index([App])])
])
