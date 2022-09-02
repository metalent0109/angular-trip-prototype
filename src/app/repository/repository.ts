import {Base} from "../models/base";
import {LocalStorageKeyUndefinedException} from "../exceptions/local-storage-key-undefined.exception";

export abstract class Repository<T extends Base> {

  protected key: string | undefined;

  save(t: T): T {
    let e = this.findAll();
    e.push(t);
    this.storeToLocalStorage(e);
    return t;
  }

  findAll(): Array<T> {
    let e: string | null = this.getFromLocalStorage();
    return e === null ? [] : JSON.parse(e);
  }

  findByUid(uid: string): T | null {
    let e: T | undefined = this.findAll().find((t: T): boolean => t.uid === uid);
    return e === undefined ? null : e;
  }

  modify(e: T): T {
    this.storeToLocalStorage(this.findAll().map((t: T): T => t.uid === e.uid ? e : t));
    return e;
  }

  deleteByUid(uid: string): void {
    this.storeToLocalStorage(this.findAll().filter((t: T): boolean => t.uid !== uid));
  }

  remove(): void {
    this.removeFromLocalStorage();
  }

  private storeToLocalStorage(entities: Array<T>): Array<T> {
    if (this.key === undefined) {
      throw new LocalStorageKeyUndefinedException();
    }
    localStorage.setItem(this.key, JSON.stringify(entities));
    return entities;
  }

  private getFromLocalStorage(): string | null {
    if (this.key === undefined) {
      throw new LocalStorageKeyUndefinedException();
    }
    return localStorage.getItem(this.key);
  }

  private removeFromLocalStorage(): void {
    if (this.key === undefined) {
      throw new LocalStorageKeyUndefinedException();
    }
    localStorage.removeItem(this.key);
  }
}
