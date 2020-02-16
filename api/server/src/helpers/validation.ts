import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common'
import { joi } from '@webwallet/structures'

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private readonly schema: joi.Schema,
    private readonly handler: Function = defaultValidationHandler) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const validation = this.schema.validate(value)
    return this.handler(validation)
  }
}

function defaultValidationHandler(validation: joi.ValidationResult) {
  if (validation.error) {
    throw new BadRequestException('Validation failed')
  }
  return validation.value
}
