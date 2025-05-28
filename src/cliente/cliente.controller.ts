// src/cliente/cliente.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './entities/cliente.entity';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  findAll() {
    return this.clienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clienteService.findOne(Number(id));
  }

  @Post()
  create(@Body() cliente: Partial<Cliente>) {
    return this.clienteService.create(cliente);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() cliente: Partial<Cliente>) {
    return this.clienteService.update(Number(id), cliente);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.clienteService.delete(Number(id));
  }
}
