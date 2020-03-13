import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from '../task-status.enum';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class GetTasksFilterDto {
    @ApiProperty({ enum: ['OPEN', 'IN_PROGRESS', 'DONE'] })
    @IsOptional()
    @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    status: TaskStatus;

    @ApiProperty({
        type: String
    })
    @IsOptional()
    @IsNotEmpty()
    search: string;
}