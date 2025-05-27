import { Category } from '../entities/Category';
import { CategoryRepository } from './CategoryRepository';

export class CategoryRepositoryInMemory implements CategoryRepository {
  public categories: Category[] = [];

  // eslint-disable-next-line @typescript-eslint/require-await
  async create(category: Category): Promise<void> {
    this.categories.push(category);
  }
}
