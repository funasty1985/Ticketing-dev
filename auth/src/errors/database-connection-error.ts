import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = 'Error connecting to Database';

  constructor() {
    // for logging purpose, will feed a string related to the error to super()
    // which will eventual arrive the constructor of grand-parent class Error
    super('Error connecting to database');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
