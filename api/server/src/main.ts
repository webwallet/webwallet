import { Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core'
import { RoutesModule } from './routes/module'
import { SocketsModule } from './sockets/module'

@Module({
  imports: [RoutesModule, SocketsModule],
})
export class RootModule {}

export async function start() {
  const app = await NestFactory.create(RootModule)
  await app.listen(3000)
  return app
}

if (require.main === module) {
  start()
}
