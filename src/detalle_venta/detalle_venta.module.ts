// src/detalle_venta/detalle_venta.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleVenta } from './entities/detalle_venta.entity';
import { DetalleVentaService } from './detalle_venta.service';
import { DetalleVentaController } from './detalle_venta.controller';
import { Venta } from 'src/venta/entities/venta.entity';
import { Producto } from 'src/producto/entities/producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DetalleVenta, Venta, Producto])],
  controllers: [DetalleVentaController],
  providers: [DetalleVentaService],
})
export class DetalleVentaModule {}
