import { defineApp } from 'rwsdk/worker'
import { Document } from '@/Document'
import { env } from 'cloudflare:workers'
import { index, render, route } from 'rwsdk/router'
import { routeAgentRequest } from 'agents'

import App from '@/app/App'

export { ChatAgentDO } from '@/app/ChatAgentDO'

export type AppContext = {}

export default defineApp([
  render(Document, [index([App])]),

  route(`/agents/${env.CHAT_AGENT_NAMESPACE_KEBABCASE}/${env.CHAT_AGENT_ID}`, async ({ request }) => {
    return (await routeAgentRequest(request, env)) || Response.json({ msg: 'no agent here' }, { status: 404 })
  })
])
