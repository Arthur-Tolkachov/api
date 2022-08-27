import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('todo-lists')
export class TodoListsController {
  @Get()
  getAll() {
    return 'all';
  }

  @Get()
  getOne() {
    return 'one';
  }

  @Post()
  create() {
    return 'create';
  }

  @Put()
  update() {
    return 'update';
  }

  @Delete()
  delete() {
    return 'delete';
  }
}
