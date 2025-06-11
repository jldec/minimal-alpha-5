import { AIChatAgent } from 'agents/ai-chat-agent'
import { createWorkersAI } from 'workers-ai-provider'
import { env } from 'cloudflare:workers'
import { streamText } from 'ai'

export class Chat extends AIChatAgent<Env> {
  async onChatMessage() {
    const workersai = createWorkersAI({ binding: env.AI })

    const stream = streamText({
      // @ts-expect-error (this 🦙 is not typed in ts)
      model: workersai('@cf/meta/llama-3.1-8b-instruct-fp8-fast'),
      messages: [
        {
          role: 'system',
          content: 'You are a helpful and delightful assistant'
        },
        ...this.messages
      ]
    })
    return stream.toDataStreamResponse()
  }
}
