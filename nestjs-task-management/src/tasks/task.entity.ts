import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TaskStatus } from './task-status.enum';

@Entity()
export class Task extends BaseEntity {
    @ApiProperty({
        type: Number
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        type: String
    })
    @Column()
    title: string;

    @ApiProperty({
        type: String
    })
    @Column()
    description: string;

    @ApiProperty({
        type: String
    })
    @Column()
    status: TaskStatus;
}