import * as joi from '@hapi/joi'

export const RequestBodySchema = joi.object().keys({
  data: joi.string()
})

export class RequestBodyClass {
  hash!: object
  data!: object
  meta!: object
}