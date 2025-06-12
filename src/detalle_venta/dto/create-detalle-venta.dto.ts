import { IsInt, IsNumber, IsPositive } from 'class-validator';

export class CreateDetalleVentaDto {
  @IsInt()
  @IsPositive()
  cantidad: number;

  @IsNumber()
  @IsPositive()
  precio_unitario: number;

  @IsInt()
  ventaId: number;       // Id de la venta asociada

  @IsInt()
  productoId: number;    // Id del producto asociado
}
