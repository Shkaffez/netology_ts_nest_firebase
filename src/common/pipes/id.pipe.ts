import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class IdValidationPipe implements PipeTransform {
  public transform(value: any, metadata: ArgumentMetadata) {     
    if (!(typeof(value) === 'string')) {
      throw new BadRequestException('Validation failed');
    }

    return value;
  }
}
