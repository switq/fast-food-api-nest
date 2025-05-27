import { randomUUID } from 'crypto';

interface CategorySchema {
  name: string;
  description?: string;
}

export class Category {
  props: CategorySchema;
  _id: string;

  constructor(props: CategorySchema, id?: string) {
    this.props = props;
    this._id = id || randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
  }

  get description(): string | undefined {
    return this.props.description;
  }

  set description(description: string | undefined) {
    this.props.description = description;
  }
}
