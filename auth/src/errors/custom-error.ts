export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    // for loging purpose, we want ot make sure a string will be feed to parent Error class as param
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
