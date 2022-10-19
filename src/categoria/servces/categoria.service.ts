import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
import { Categoria } from "../entities/categoria.entity";

    @Injectable()
  export class CategoriaService {
    constructor(
   @InjectRepository(Categoria)
   private CategoriaRepository: Repository<Categoria>

    ){}

    async finALL(): Promise<Categoria[]>{
    return await this.CategoriaRepository.find({
        relations:{
            produto:true 
        }

    })


    }
    async findById (id: number): Promise<Categoria>{
     let Categoria= await this.CategoriaRepository.findOne({
        where:{
            id
        },
        relations:{
            produto:true

        }
     })
     
     if(!Categoria)
        throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND)
        
        return Categoria

    }
    
       async findByNome (nome:string): Promise<Categoria[]>{
       return await this.CategoriaRepository.find({
        where: {
            nome: ILike(`%${name}%`)
        },
        relations: {
            Produto: true
        }
    
     })

    }

  }

     async create(Categoria: Categoria):Promise<Categoria> {
        return await this.CategoriaRepository.save(categoria);

     }

     async update(Categoria:Categoria): Promise<Categoria> {
        const searCategoria: Categoria= await this.FindALL(categoria.id);

     },

      if (!searchCategoria || Categoria.id)
      throw new HttpException(
        'Categoria não encontrada.',
        HttpStatus.NOT_FOUND,
        
      );

      return await this.CategoriaRepository.delete(id);
      
      }

    }