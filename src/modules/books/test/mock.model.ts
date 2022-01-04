/* eslint-disable @typescript-eslint/no-unused-vars */
export abstract class MockModel<T> {
  protected abstract entityStub: T;

  constructor(createEntityData: T) {
    this.constructorSpy(createEntityData);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructorSpy(_createEntityData: T): void {}

  findById(id) {
    return this.entityStub;
  }

  async find(): Promise<T[]> {
    return [this.entityStub];
  }

  async save(id, data): Promise<T> {
    return this.entityStub;
  }

  async findByIdAndUpdate(id): Promise<T> {
    return this.entityStub;
  }

  async findOneAndRemove({ _id }): Promise<T> {
    return this.entityStub;
  }
}
