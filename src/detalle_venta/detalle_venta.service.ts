import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetalleVenta } from './entities/detalle_venta.entity';
import { Venta } from 'src/venta/entities/venta.entity';
import { Producto } from 'src/producto/entities/producto.entity';

@Injectable()
export class DetalleVentaService {
  constructor(
    @InjectRepository(DetalleVenta)
    private readonly detalleRepository: Repository<DetalleVenta>,

    @InjectRepository(Venta)
    private readonly ventaRepository: Repository<Venta>,

    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  findAll() {
    return this.detalleRepository.find();
  }

  findOne(id: number) {
    return this.detalleRepository.findOne({ where: { id } });
  }

  async create(data: any) {
    const venta = await this.ventaRepository.findOneBy({ id: data.ventaId });
    if (!venta) throw new NotFoundException('Venta no encontrada');

    const producto = await this.productoRepository.findOneBy({ id: data.productoId });
    if (!producto) throw new NotFoundException('Producto no encontrado');

    const detalle = this.detalleRepository.create({
      cantidad: data.cantidad,
      precio_unitario: data.precio_unitario,
      venta,
      producto,
    });

    return this.detalleRepository.save(detalle);
  }

  update(id: number, data: Partial<DetalleVenta>) {
    return this.detalleRepository.update(id, data);
  }

  delete(id: number) {
    return this.detalleRepository.delete(id);
  }
}
