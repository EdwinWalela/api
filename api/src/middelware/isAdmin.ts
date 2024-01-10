import { Request, Response, NextFunction } from 'express';
import Role from '../models/Role';

const isAdmin = async (req:Request,res:Response,next:NextFunction) =>{
 if(req.userRole == 'admin'){
  next();
 }else{
  res.status(403).send();
  return;
 }
}

export default isAdmin