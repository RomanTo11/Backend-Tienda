// src/producto/entities/producto.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { DetalleVenta } from 'src/detalle_venta/entities/detalle_venta.entity';
@Entity('producto')
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @Column()
  marca: string;

  @Column()
  stock: number;

  @OneToMany(() => DetalleVenta, detalle => detalle.producto)
  detalles: DetalleVenta[];
}


