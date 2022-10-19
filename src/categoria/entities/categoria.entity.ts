
import { IsNotEmpty } from "class-validator";
import { Produto } from "src/produtos/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({name: 'tb_categoria'})
export class Categoria {
 
         
     @PrimaryGeneratedColumn() 
     id: number;

     @IsNotEmpty()
     @Column({length:295, nullable: false})
     nome: string;

     @UpdateDateColumn()
     data: Date; 

     @OneToMany(() => Produto, (produto)=> produto.categoria,{
          onDelete: 'CASCADE'
     })

     produto: Produto


}

