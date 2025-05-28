import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

export class SuccessResponseDto<T = any> {
  success: true;
  message: string;
  data: T;


  constructor(message: string, data: T) {
    this.success = true;
    this.message = message;
    this.data = data;
  }
}


export class ErrorResponseDto {
  success: false;
  message: string;
  statusCode: number;
  error?: any;


  constructor(message: string, statusCode = 500, error?: any) {
    this.success = false;
    this.message = message;
    this.statusCode = statusCode;
    this.error = error;
  }
}

@Catch()
export class GlobalHttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let error = undefined;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();
      if (typeof res === 'string') {
        message = res;
      } else if (typeof res === 'object' && res !== null) {
        message = (res as any).message || message;
        error = (res as any).error;
      }
    } else if (exception instanceof Error) {
      message = exception.message;
      error = undefined;
    }

    response.status(status).json({
      success: false,
      message,
      statusCode: status,
      error,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
