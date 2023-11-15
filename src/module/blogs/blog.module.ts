import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';

import { BlogsEntity } from "src/entities/blog.entity";

import { BlogController } from "./blog.controller";
import { BlogService } from "./blog.service";

@Module({
    imports: [TypeOrmModule.forFeature([BlogsEntity])],
    controllers: [BlogController],
    providers: [BlogService]
})

export class BlogModule { }