import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UserRepository";

async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, "63f5bdcd3f6082160ffe3a58d9bde2b7");

    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(user_id as string);

    if (!user) {
      throw new AppError("User doesn't exist", 401);
    }

    request.user = {
      id: user_id as string,
    };

    next();
  } catch (e) {
    throw new AppError("Invalid token", 401);
  }
}

export { ensureAuthenticated };
