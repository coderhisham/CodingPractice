import { DataSource, Repository } from 'typeorm';
import { Task } from '../entities/task.entity';
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create-task.dto';
import { TaskStatus } from '../task-status.enum';
import { GetTasksFilterDto } from '../dto/get-tasks-filter.dto';

@Injectable()
export class TasksRepository extends Repository<Task> {
  constructor(private dataSource: DataSource) {
    super(Task, dataSource.createEntityManager());
  }

  //Custom Methods
  async getTasks(getTasksFilterDto: GetTasksFilterDto): Promise<Task[]> {
    const { search, status } = getTasksFilterDto;
    const query = this.createQueryBuilder('task');

    if (status) query.andWhere('task.status = :status', { status });
    if (search)
      query.andWhere(
        'LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search)',
        { search: `%${search}%` },
      );

    const tasks = await query.getMany();
    return tasks;
  }

  async createTasks(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;

    const task = this.create({
      title,
      description,
      status: TaskStatus.OPEN,
    });

    await this.save(task);
    return task;
  }
}
