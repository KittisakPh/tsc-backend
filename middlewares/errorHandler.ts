import type { Request, Response, NextFunction } from "express";
import { errorResponse } from "../utils/responses";

export function errorHanlder(err: any, req: Request, res: Response, next: NextFunction){
  console.error(err)
  errorResponse(res, 500, err)
}