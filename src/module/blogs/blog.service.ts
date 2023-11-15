import { Injectable, Inject } from "@nestjs/common";
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { BlogDto } from "src/dto/blog.dto";
import { Blog } from "src/models/blog.model";
import { IBlogRepository } from "src/interfaces/IBlogRepository.interface";
import { BlogsEntity } from 'src/entities/blog.entity'


@Injectable()

export class BlogService {

    constructor(
        @Inject('IBlogRepository')
        private blogsRepository: IBlogRepository
    ) { }

    private blogs: Blog[] = [
        { id: 1, title: 'Đắc nhân tâm', author: 'Chung', content: 'Khéo mồm khéo miệng có được thiên hạ' },
        { id: 2, title: 'Nhân sinh', author: 'Chung', content: 'Tam quan của mỗi người mỗi khác, không một ai giống ai cả. Đó là sự phong phú và thú vị của cuộc đời' }
    ]

    async getBlogs(): Promise<Blog[]> {
        return await this.blogsRepository.findAll();
    }

    async createBlog(blogDto): Promise<Blog> {

        return await this.blogsRepository.create(blogDto)
    }

    async detailBlog(id: number): Promise<Blog> {
        return await this.blogsRepository.findById(id)
    }

    async updateBlog(id: number, blogDto: BlogDto): Promise<Blog> {

        return await this.blogsRepository.update(id, blogDto)
    }

    async deleteBlog(id: number): Promise<boolean> {

        return await this.blogsRepository.delete(id)
    }
}