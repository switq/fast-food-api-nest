/* eslint-disable @typescript-eslint/require-await */
import { CategoryRepositoryInMemory } from './../../repositories/CategoryRepositoryInMemory';
import { CreateCategoryUseCase } from './createCategoryUseCase';

let createCategoryUseCase: CreateCategoryUseCase;
let categoryRepositoryInMemory: CategoryRepositoryInMemory;

describe('Create Category', () => {
  beforeEach(() => {
    categoryRepositoryInMemory = new CategoryRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoryRepositoryInMemory,
    );
  });

  it('should be able to create a new category', async () => {
    expect(categoryRepositoryInMemory.categories).toEqual([]);

    const category = await createCategoryUseCase.execute({
      name: 'Doces',
      description: 'Categoria de doces',
    });

    expect(categoryRepositoryInMemory.categories).toEqual([category]);
  });

  it('should be able to create a new category', async () => {
    expect(categoryRepositoryInMemory.categories).toEqual([]);

    const category = await createCategoryUseCase.execute({
      name: 'Doces',
      description: 'Categoria de doces',
    });

    expect(categoryRepositoryInMemory.categories).toEqual([category]);
  });
});
