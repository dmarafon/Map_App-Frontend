export const errorLoginValidation = (error: any) => {
  if (error?.response?.data?.message.startsWith("Email or pa")) {
    return "Email Invalid";
  } else if (typeof error?.response?.data?.message === "undefined") {
    return "Unknown Error";
  }
  return error.response.data.message.substring(0, 15);
};

export const errorRegistrationValidation = (error?: {
  response?: { data?: { message?: string } };
}) => {
  if (typeof error?.response?.data?.message === "undefined") {
    return "Unknown Error";
  } else if (error?.response?.data?.message === "Bad Request") {
    return "Bad Request";
  }
  return error.response.data.message.substring(0, 8);
};

export const errorMapValidation = (error: any) => {
  if (typeof error?.response?.data?.message === "undefined") {
    return "Unknown Error";
  }
  return error.response.data.message.substring(0, 15);
};
