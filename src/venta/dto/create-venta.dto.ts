// src/venta/dto/create-venta.dto.ts
import { IsNumber, IsArray, ValidateNested, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

class CreateDetalleVentaDto {
  @IsInt()
  productoId: number;

  @IsInt()
  @Min(1)
  cantidad: number;

  @IsNumber()
  precio_unitario: number;
}

export class CreateVentaDto {
  @IsInt()
  clienteId: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateDetalleVentaDto)
  detalleVentas: CreateDetalleVentaDto[];

  @IsNumber()
  total: number;
}
