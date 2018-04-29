const createResponse = params => {
  const { response, code, success, message, data = {}, error = {} } = params;
  return response.status(code).json({
    success,
    message,
    data,
    error,
  });
};

const createSuccessResponse = (
  response,
  message = 'Success',
  data = {},
  code = 200,
) =>
  createResponse({
    response,
    code,
    success: true,
    message,
    data,
  });

const createErrorResponse = (
  response,
  message = 'Server Internal Error',
  error = {},
  code = 500,
) =>
  createResponse({
    response,
    code,
    success: false,
    message,
    error,
  });

const createInvalidParameterResponse = (
  response,
  error = {},
  message = 'Validation Error',
  code = 400,
) =>
  createResponse({
    response,
    code,
    success: false,
    message,
    error,
  });

export {
  createResponse,
  createInvalidParameterResponse,
  createSuccessResponse,
  createErrorResponse,
};
