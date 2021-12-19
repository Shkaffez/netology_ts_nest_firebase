import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class MyValidationPipe implements PipeTransform {
    public transform(value: any, metadata: ArgumentMetadata) {
        if(!(value.typeof(String))) {
            throw new BadRequestException('Validation failed');
        }
        
        return value;
    }
}
