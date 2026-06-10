import {
  env
} from "./chunk-WO32MHLH.js";

// src/utils/global-error-handler.ts
import { ZodError } from "zod";
var errorHandlerMap = {
  ZodError: (error, _, reply) => {
    return reply.status(400).send({
      message: "Validation error",
      ...error instanceof ZodError && { error: error.format() }
    });
  },
  ResourceNotFoundError: (error, _, reply) => {
    return reply.status(404).send({ message: error.message });
  }
};
var globalErrorHandler = (error, _, reply) => {
  if (env.NODE_ENV === "development") {
    console.error(error);
  }
  const handler = errorHandlerMap[error.constructor.name];
  if (handler) return handler(error, _, reply);
  return reply.status(500).send({
    message: "Internal Server Error"
  });
};

export {
  errorHandlerMap,
  globalErrorHandler
};
