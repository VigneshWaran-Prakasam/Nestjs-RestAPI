import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://nestjs:2808@cluster0.akivx.mongodb.net/mongo'),ContactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
