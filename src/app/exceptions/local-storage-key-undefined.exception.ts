export class LocalStorageKeyUndefinedException extends Error {

  constructor() {
    super('Local storage key is undefined.');
  }
}
