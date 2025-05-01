import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksRepository } from './repositories/tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}

  getTasks(getTasksFilterDto: GetTasksFilterDto): Promise<Task[]> {
    return this.tasksRepository.getTasks(getTasksFilterDto);
  }

  async getTaskById(id: string): Promise<Task> {
    const task = await this.tasksRepository.findOne({ where: { id } });

    if (!task) throw new NotFoundException(`Task with ID "${id}" not found`);

    return task;
  }

  createTasks(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTasks(createTaskDto);
  }

  async updateTaskStatusById(id: string, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskById(id);
    task.status = status;
    await this.tasksRepository.save(task);
    return task;
  }

  // deleteAllTasks(): void {
  //   this.tasks = [];
  // }

  async deleteTaskById(id: string): Promise<{ message: string }> {
    const result = await this.tasksRepository.delete(id);

    if (result.affected === 0)
      throw new NotFoundException(`Task with ID: ${id} not found...`);

    return { message: `Task with ID: ${id} deleted successfully` };
  }
}
