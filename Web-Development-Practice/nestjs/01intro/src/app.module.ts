import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AdminModule } from './modules/admin/admin.module';

@Module({
  imports: [UsersModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
