import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require("dotenv").config();

const PORT = process.env.NODE_DOCKER_PORT || 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
  });
}
bootstrap();
