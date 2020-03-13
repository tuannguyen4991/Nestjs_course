import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TasksModule } from './tasks/tasks.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('bootstrap')

  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Todo App')
    .setDescription('The todo app API description')
    .setVersion('1.0')
    .addTag('tasks')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    include: [TasksModule]
  });
  SwaggerModule.setup('swagger/tasks', app, document);
  
  const port = 3000;
  await app.listen(port);
  logger.log(`Application listening on ${port} `);
}
bootstrap();
