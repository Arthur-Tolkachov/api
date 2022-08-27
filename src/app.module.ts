import { Module } from '@nestjs/common';
import { TodoListsModule } from './todo-lists/todo-lists.module';

@Module({
  imports: [TodoListsModule],
})
export class AppModule {}
