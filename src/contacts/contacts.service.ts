import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel, ModelDefinition } from '@nestjs/mongoose';
import { Contact } from 'src/contacts.Schema';
import {Model} from 'mongoose'
import { ContactsModule } from './contacts.module';
import { throws } from 'assert';

@Injectable()
export class ContactsService {
  
    // model define structure of class  here Contact
    constructor(@InjectModel('Contact') private ContactModel:Model<Contact>){}

    addContacts(contact:Contact)
    {
        let c= new this.ContactModel(contact)
        c.save()
        return c;
    }
    getAllContacts(page:number,limit:number)
    {
        
        let c = this.ContactModel.find({}).limit(limit).skip((page-1)*limit)
        return c;
    }
    async getContactsById(id:number)
    {
        let c =await this.ContactModel.findById(id)
        if(!c)
        {
            throw new  NotFoundException()
        }
        return c;
    }
    async PatchContact(id,Body) {   
    return await this.ContactModel.updateOne({_id:id},{$set:Body})
    }
    async deleteContactById(id)
    {
        let c= await this.ContactModel.deleteOne({_id:id})
        if(!c)
        {
            throw new NotFoundException()
        }
        return c;
    }
    
    
}
