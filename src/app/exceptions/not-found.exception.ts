export class NotFoundException extends Error {

  constructor(uid: string) {
    super(`Record with uid ${uid} not found.`);
  }
}
