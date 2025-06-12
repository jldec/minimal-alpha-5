# RedwoodSDK Cloudflare Agent Chat
Demo project using RedwoodSDK with the [useAgentsChat](https://developers.cloudflare.com/agents/api-reference/agents-api/#chat-agent-react-api) react API from the Cloudflare [Agents](https://developers.cloudflare.com/agents/) SDK.

Most of the code in this repo is identical to the non-RSC analog in [jldec/vanilla-react-agent-chat](https://github.com/jldec/vanilla-react-agent-chat), but since 'use client' code also runs server-side during RSC pre-rendering, a [small modification](https://github.com/jldec/rwsdk-use-agent-chat/pull/6/files#diff-7c79023b16fd616788af0fdcb31d619ae04da7259aa564fd72fb0ea07d8ebe07R17-R20) was required in the useAgentChat parameters. See this rwsdk [discord thread](https://discord.com/channels/679514959968993311/1382133344011292712) for further discussion.

Use pnpm to `install`, `dev`, `build`, `types`, `ship`, and `tail` server logs.

> [!WARNING]
> This repo is using a v0.1.0-alpha pre-release of rwsdk.

Originally based on the [minimal](https://github.com/redwoodjs/sdk/tree/main/starters/minimal) rwsdk starter.
Parts of UI and styles copied from [cloudflare/agents-starter](https://github.com/cloudflare/agents-starter).
