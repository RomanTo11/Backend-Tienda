import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Venta } from 'src/venta/entities/venta.entity';
import { Producto } from 'src/producto/entities/producto.entity';

@Entity('detalle_venta')
export class DetalleVenta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  cantidad: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precio_unitario: number;

  @ManyToOne(() => Venta, venta => venta.detalles, { eager: true })
  venta: Venta;

  @ManyToOne(() => Producto, producto => producto.detalles, { eager: true })
  producto: Producto;
}