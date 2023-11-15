
import { MinLength, IsNotEmpty } from 'class-validator';

export class BlogDto {
    @IsNotEmpty()
    title?: string;

    @IsNotEmpty()
    author?: string;

    @IsNotEmpty()
    content?: string;
}