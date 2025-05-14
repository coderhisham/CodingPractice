import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { Request } from 'express';

export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest<Request>();
    if (!req || !req.user) {
      throw new Error('User not found');
    }
    return req.user as User;
  },
);
