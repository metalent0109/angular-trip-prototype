import {Base} from "../models/base";
import {LocalStorageKeyUndefinedException} from "../exceptions/local-storage-key-undefined.exception";

export abstract class Repository<T extends Base> {

  protected key: string | undefined;

  exists(uid: string): boolean {
    return this.find(uid) !== null;
  }

  save(entity: T): T {
    this.saveOneToLocalStorage(entity);
    return entity;
  }

  replaceOne(entity: T): T {
    this.deleteAll();
    this.saveOneToLocalStorage(entity);
    return entity;
  }

  add(entity: T): Array<T> {
    const trips: Array<T> = this.all();
    trips.push(entity);
    this.saveAllToLocalStorage(trips);
    return trips;
  }

  all(): Array<T> {
    let trips: string | null = this.loadFromLocalStorage();
    return trips === null ? [] : JSON.parse(trips);
  }

  one(): T | null {
    const entity: string | null = this.loadFromLocalStorage();
    return entity === null ? null : JSON.parse(entity);
  }

  find(uid: string): T | null {
    let trip: T | undefined = this.all().find((t: T) => t.uid === uid);
    return trip === undefined ? null : trip;
  }

  modify(entity: T): T {
    let entities: Array<T> = this.all();
    this.saveAllToLocalStorage(entities.map((t: T): T => t.uid === entity.uid ? entity : t));
    return entity;
  }

  delete(entity: T): void {
    let entities: Array<T> = this.all();
    this.saveAllToLocalStorage(entities.filter((t: T): boolean => t.uid !== entity.uid));
  }

  deleteAll(): void {
    this.removeFromLocalStorage();
  }

  protected saveOneToLocalStorage(entity: T): T {
    if (this.key === undefined) {
      throw new LocalStorageKeyUndefinedException();
    }
    localStorage.setItem(this.key, JSON.stringify(entity));
    return entity;
  }

  protected saveAllToLocalStorage(entities: Array<T>): Array<T> {
    if (this.key === undefined) {
      throw new LocalStorageKeyUndefinedException();
    }
    localStorage.setItem(this.key, JSON.stringify(entities));
    return entities;
  }

  protected loadFromLocalStorage(): string | null {
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
