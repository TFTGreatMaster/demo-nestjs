import { Response } from 'express';
import { Body, Controller, Delete, Get, Param, Post, Put, Res, ValidationPipe } from "@nestjs/common";

import { ResponseData } from "src/global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";
import { Blog } from "src/models/blog.model";
import { BlogDto } from "src/dto/blog.dto";
import { ResponseType } from 'src/global/type';

import { BlogService } from "./blog.service";

@Controller('blogs')

export class BlogController {

    constructor(private readonly blogService: BlogService) { }

    @Get()
    async getBlogs(@Res() res: Response): Promise<ResponseType<Blog>> {
        try {
            return res.json(new ResponseData(this.blogService.getBlogs(), HttpStatus.SUCCESS, HttpMessage.SUCCESS))

        } catch (error) {
            return res.json(new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR))
        }
    }

    @Post()
    async createBlogs(@Body(new ValidationPipe()) blogDto: BlogDto, @Res() res: Response): Promise<ResponseType<Blog>> {
        try {
            return res.json(new ResponseData(this.blogService.createBlog(blogDto), HttpStatus.SUCCESS, HttpMessage.SUCCESS))

        } catch (error) {
            return res.json(new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR))

        }
    }

    @Get('/:id')
    async detailBlogs(@Param('id') id: number, @Res() res: Response): Promise<ResponseType<Blog>> {
        try {
            return res.json(new ResponseData(this.blogService.detailBlog(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS))

        } catch (error) {
            return res.json(new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR))

        }
    }

    @Put('/:id')
    updateBlogs(@Param('id') id: number, @Body(new ValidationPipe()) blogDto: BlogDto, @Res() res: Response): Promise<ResponseType<Blog>> {
        try {
            return res.json(new ResponseData(this.blogService.updateBlog(id, blogDto), HttpStatus.SUCCESS, HttpMessage.SUCCESS))

        } catch (error) {
            return res.json(new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR))

        }
    }

    @Delete('/:id')
    deleteBlogs(@Param('id') id: number): ResponseData<boolean> {
        try {
            return new ResponseData<boolean>(this.blogService.deleteBlog(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS)

        } catch (error) {
            return new ResponseData<boolean>(null, HttpStatus.ERROR, HttpMessage.ERROR)

        }
    }
}