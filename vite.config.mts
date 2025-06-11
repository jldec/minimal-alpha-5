import { defineConfig } from 'vite'
import { redwood } from 'rwsdk/vite'
import chalk from "chalk";

export default defineConfig({
  plugins: [
    redwood(),
    {
      name: 'requestLogger',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const timeString = new Date().toLocaleTimeString()
          console.log(`[${chalk.blue(timeString)}] ${chalk.green(req.method)} ${chalk.yellow(req.url)}`)
          next()
        })
      }
    }
  ]
})
