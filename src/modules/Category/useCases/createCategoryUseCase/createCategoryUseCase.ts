import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '../../repositories/CategoryRepository';
import { Category } from '../../entities/Category';

interface CreateCategoryDTO {
  name: string;
  description?: string;
}

@Injectable()
export class CreateCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(data: CreateCategoryDTO) {
    const category = new Category(data);

    await this.categoryRepository.create(category);

    return category;
  }
}
