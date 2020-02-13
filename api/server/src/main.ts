import { NestFactory } from '@nestjs/core'
import { RoutesModule } from './routes/module'

async function start() {
  const app = await NestFactory.create(RoutesModule)
  await app.listen(3000)
}

start()
