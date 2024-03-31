import { Injectable } from '@nestjs/common';
import { CreateTodoInput } from './inputs/create-todo.input';
import { UpdateTodoInput } from './inputs/update-todo.input';

@Injectable()
export class TodoService {
  create(createTodoInput: CreateTodoInput) {
    return 'This action adds a new todo';
  }

  findAll() {
    return `This action returns all todo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoInput: UpdateTodoInput) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
