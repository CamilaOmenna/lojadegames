import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RelationCountAttribute } from "typeorm/query-builder/relation-count/RelationCountAttribute";
import { Produto  } from "../entities/produto.entity";
 

@Injectable()

export class ProdutoServices {
constructor ( 
@InjectRepository(Produto)
   private produtoRepositor: Repository<Produto>,
   private produtoService: ProdutoServices

   ) {}

       async FindALL (): Promise<Produto[]> {
       return await this.produtoRepositor.find({
;
          relations:{
          produto: true; 

          }

      





