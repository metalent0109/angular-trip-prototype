import {Base} from "../models/base";
import {LocalStorageKeyUndefinedException} from "../exceptions/local-storage-key-undefined.exception";

export abstract class Repository<T extends Base> {

  protected key: string | undefined;

  count(): number {
    return this.all().length;
  }

  exists(uid: string): boolean {
    return this.find(uid) !== null;
  }

  save(entity: T): T {
    let trips: Array<T> = this.all();
    trips.push(entity);
    this.saveBatchToLocalStorage(trips);
    return entity;
  }

  all(): Array<T> {
    let trips: string | null = this.fetchFromLocalStorage();
    return trips === null ? [] : JSON.parse(trips);
  }

  find(uid: string): T | null {
    let trip: T | undefined = this.all().find((t: T) => t.uid === uid);
    return trip === undefined ? null : trip;
  }

  modify(entity: T): T {
    let entities: Array<T> = this.all();
    this.saveBatchToLocalStorage(entities.map((t: T): T => t.uid === entity.uid ? entity : t));
    return entity;
  }

  delete(entity: T): void {
    let entities: Array<T> = this.all();
    this.saveBatchToLocalStorage(entities.filter((t: T): boolean => t.uid !== entity.uid));
  }

  deleteAll(): void {
    this.removeFromLocalStorage();
  }

  protected saveBatchToLocalStorage(e: Array<T>): void {
    if (this.key === undefined) {
      throw new LocalStorageKeyUndefinedException();
    }
    localStorage.setItem(this.key, JSON.stringify(e));
  }

  protected fetchFromLocalStorage(): string | null {
    if (this.key === undefined) {
      throw new LocalStorageKeyUndefinedException();
    }
    return localStorage.getItem(this.key);
  }

  protected removeFromLocalStorage(): void {
    if (this.key === undefined) {
      throw new LocalStorageKeyUndefinedException();
    }
    localStorage.removeItem(this.key);
  }
}
