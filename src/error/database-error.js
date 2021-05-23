export class DatabaseError extends Error {
  constructor(paramName) {
    super(`Database not is connected\n ${paramName}`);
    this.name = "DatabaseError";
  }
}
