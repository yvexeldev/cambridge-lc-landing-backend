import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorResponse = {
      error:
        exception.response?.message ||
        exception.message ||
        'Internal Server Error',
      errorType: exception.name,
    };
    if (exception.status === HttpStatus.INTERNAL_SERVER_ERROR) {
      console.log(exception);
    }
    response.status(status).json({
      data: errorResponse,
      path: request.url,
      success: false,
    });
  }
}
