import { ClientOnly } from './ClientOnly'
import { ChatAgent } from './ChatAgent'

// context(justinvdm): partysocket relies on `window.location.host` for client components.
// This won't be set durin SSR, so we need to give it the host explicitly
// https://github.com/cloudflare/partykit/blob/09c1d1c382252ec7a1c998a5f8faf4e7d6d2b484/packages/partysocket/src/react.ts#L25

// context(justinvdm): Avoid fetch() as side-effect of SSR render
// https://github.com/cloudflare/agents/blob/398c7f5411f3a63f450007f83db7e3f29b6ed4c2/packages/agents/src/ai-react.tsx#L85-L88

// context(jldec): Force the whole component to render only the client
// https://github.com/jldec/rwsdk-use-agent-chat/issues/7
// https://discord.com/channels/679514959968993311/1382133344011292712/1383073091693051955

export default function App() {
  return (
    <ClientOnly>
      <ChatAgent />
    </ClientOnly>
  )
}
