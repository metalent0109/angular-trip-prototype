export class NotFoundException extends Error {

  constructor() {
    super(`Record not found.`);
  }
}
