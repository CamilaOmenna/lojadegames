import { Controller, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/categoria.module';
import { Categoria } from './categoria/entities/categoria.entity';
import { Produto } from './produtos/entities/produto.entity';


       @Module({
       imports: [
       TypeOrmModule.forRoot({
       type:'mysql',
       host: 'localhost',
       username: 'root',
       password: 'root',
       database: 'tb_lojadegames',
       entities:[Categoria,Produto], 
       synchronize: true
       }),

        CategoriaModule
        
  
      ],
  controllers: [],
  providers: [],
})
export class AppModule {}

