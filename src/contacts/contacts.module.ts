import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactSchema } from 'src/contacts.Schema';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';

@Module({
  imports:[
    MongooseModule.forFeature(
      [{name:"Contact",schema:ContactSchema}]
    )
  ],
  controllers: [ContactsController],
  providers: [ContactsService]
})
export class ContactsModule {}
