import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import request from 'supertest'
import { RootModule } from '../src/main'

describe('AppController (e2e)', () => { 
  let app: INestApplication

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [RootModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('GET /transaction/:somehash', () => {
    return request(app.getHttpServer())
      .get('/transaction/somehash')
      .expect(200)
      .expect('GET /transaction/somehash')
  })

  afterAll(async () => {
    await app.close()
  })
})
