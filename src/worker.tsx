import { defineApp } from 'rwsdk/worker'
import { index, render, route } from 'rwsdk/router'
import { Document } from '@/app/Document'
import { Home } from '@/app/pages/Home'
import { Agent } from '@/app/pages/Agent'
import { chatAgentApiRoutes } from './app/shared/api-routes'

export { Chat } from '@/app/shared/ChatAgentDO'

export type AppContext = {}

export default defineApp([
  ...chatAgentApiRoutes,
  render(Document, [index([Home]), route('/agent', Agent)])
])
