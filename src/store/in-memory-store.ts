import { Store } from ".";

export class InMemoryStore implements Store {
  private map = new Map<string, string>();

  async get(key: string) {
    return this.map.get(key);
  }

  async set(key: string, value: string) {
    this.map.set(key, value);
  }
}