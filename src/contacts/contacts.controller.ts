import { Body, Controller, DefaultValuePipe, Delete, Get, HttpException, NotFoundException, Param, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { identity } from 'rxjs';
import { Contact } from 'src/contacts.Schema';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
    constructor(private service:ContactsService){}
@Post()
@UsePipes(new ValidationPipe({transform:true}))
addContacts(@Body() Body:Contact)
{
    console.log("Hai")
     return this.service.addContacts(Body)

}
@Get()
// @UsePipes(ParseIntPipe)
getAllContacts(@Query("Page",new DefaultValuePipe(1),ParseIntPipe) page,@Query("limit",new DefaultValuePipe(10),ParseIntPipe) limit)
{
    return this.service.getAllContacts(page,limit)
}
@Get('/:id')
getContactById(@Param('id') id)
{
    let c= this.service.getContactsById(id)
    return c;

}

@Patch('/:id')
async patchContact(@Param("id") id,@Body() field){

    try{
       return await this.service.PatchContact(id,field)
    }catch(e)
    {
        throw new HttpException(e, 500)
    }
}

@Delete('/:id')
deleteContactById(@Param('id') id)
{
    let c = this.service.deleteContactById(id)
    return c;
}
}
