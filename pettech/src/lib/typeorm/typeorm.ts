import { DataSource } from "typeorm"
import { env } from "@/env"
import { Product } from "@/entities/product.entity"
import { Category } from '@/entities/category.entity'
import { ProductAutoGenerateUUID1780532109501 } from './migrations/1780532109501-ProductAutoGenerateUUID'

export const appDataSource = new DataSource({
    type: "postgres",
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    username: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
    entities: [Product, Category],
    migrations: [ProductAutoGenerateUUID1780532109501],
    logging: env.NODE_ENV === 'development',
})

appDataSource.initialize().then(() => {
    console.log("Database with TypeORM connected")
})
.catch((error) => {
    console.error("Error connecting to the database with TypeORM", error)
})