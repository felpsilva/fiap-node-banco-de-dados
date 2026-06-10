export interface ICategoryRepository {
    create(name: string): Promise<void>
}