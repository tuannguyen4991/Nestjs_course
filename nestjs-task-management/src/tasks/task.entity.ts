import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { TaskStatus } from './task-status.enum';
import { User } from 'src/auth/user.entity';

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

    @ManyToOne(type => User, user => user.tasks, { eager: true })
    user: User;
    
    @Column()
    userId: number;
}