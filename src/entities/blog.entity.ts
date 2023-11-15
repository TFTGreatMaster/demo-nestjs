import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('blogs')
export class BlogsEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column()
    content: string;
}