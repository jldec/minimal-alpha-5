'use client'
import { MessageList } from '../shared/MessageList'
import { MessageInput } from '../shared/MessageInput'
import { ChatLayout } from '../shared/ChatLayout'
import { useAgent } from 'agents/react'
import { useAgentChat } from 'agents/ai-react'
import { Message } from '@/app/shared/askAI'

export function Agent() {
  const agent = useAgent({
    agent: 'chat',
    name: 'agent'
  })

  const { messages, handleSubmit, clearHistory, setInput } = useAgentChat({ agent })

  const onSubmit = async (prompt: string) => {
    // setInput(prompt)
    // handleSubmit()
  }

  const onClear = async () => {
    // clearHistory()
  }

  // const messages: Message[] = []

  return (
    <ChatLayout title="RedwoodSDK Agent Chat">
      <MessageList messages={messages} />
      <MessageInput onSubmit={onSubmit} onClear={onClear} />
    </ChatLayout>
  )
}

