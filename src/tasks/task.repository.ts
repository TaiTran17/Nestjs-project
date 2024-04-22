import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task.entity';
// import { CreateTaskDto } from './dto/create-task.dto';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  // async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
  //   const { name, description } = createTaskDto;
  //   const task = new Task();
  //   task.name = name;
  //   task.description = description;
  //   console.log('Hello');
  //   await task.save(); // Save the task using the manager provided by Repository
  //   return task;
  // }
}
