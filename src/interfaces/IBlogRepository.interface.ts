import { Blog } from "src/models/blog.model";
import { AbstractPromise } from "./AbstractRepository.interface";

export interface IBlogRepository extends AbstractPromise<Blog> {
    findRelationById(id: number): Promise<Blog>;
}