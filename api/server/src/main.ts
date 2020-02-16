import { Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core'
import { RoutesModule } from './routes/module'
import { SocketsModule } from './sockets/module'

@Module({
  imports: [RoutesModule, SocketsModule],
})
class RootModule {}

async function start() {
  const app = await NestFactory.create(RootModule)
  await app.listen(3000)
}

start()
