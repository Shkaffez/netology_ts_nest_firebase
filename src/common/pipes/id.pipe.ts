import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class IdValidationPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public transform(value: any, metadata: ArgumentMetadata) {
    if (!value.typeof(String)) {
      throw new BadRequestException('Validation failed');
    }

    return value;
  }
}
