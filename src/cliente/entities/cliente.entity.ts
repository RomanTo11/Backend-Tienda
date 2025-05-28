// src/cliente/entities/cliente.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Venta } from 'src/venta/entities/venta.entity';

@Entity('cliente')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column({ unique: true })
  correo: string;

  @Column()
  telefono: string;

  @Column()
  direccion: string;

  // ← Agrega esto:
  @OneToMany(() => Venta, venta => venta.cliente)
  ventas: Venta[];
}
