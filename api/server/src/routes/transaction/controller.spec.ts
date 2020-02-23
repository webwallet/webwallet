import { Test, TestingModule } from '@nestjs/testing'
import { TransactionController } from './controller'
import { TransactionService } from './service'

describe('TransactionController', () => {
  let transactionController: TransactionController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TransactionController],
      providers: [TransactionService],
    }).compile()

    transactionController = app.get(TransactionController)
  })

  describe('transaction endpoints', () => {
    it('should return GET /transaction/somehash', () => {
      expect(transactionController.getTransaction('somehash'))
        .toBe('GET /transaction/somehash')
    })
  })
})
