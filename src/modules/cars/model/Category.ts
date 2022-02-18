import { v4 as uuidV4 } from 'uuid';

export default class Category {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor(data: Category) {
    const { name, description, created_at } = data;
    if (!this.id) {
      this.id = uuidV4();
    }

    this.name = name;
    this.description = description;
    this.created_at = created_at;
  }
}
