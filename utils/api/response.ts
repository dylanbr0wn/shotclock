import { NextApiResponse } from "next";
import { JSONData } from "./types";

export const createResponse = (
  response : NextApiResponse,
  body: JSONData | any,
  headers?: { [key: string]: string },
  statusCode?: number
) => {
  return response.status(statusCode || 200).json({
    body,
  });
};
