import { Request, Response, NextFunction } from 'express';
import service from '../services/users';

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  let userId = Number(req.params.id)
  
  if(req.userRole != 'admin'){
    if (userId != req.userId){
      return res.status(403).send();
    }
  }
  const user = await service.getUser(userId);
  if(!user){
    return res.status(404).send({
      error:"user not found"
    })
  }
  return res.send({
    user:user?.toJSON()
  })

}
const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  let users = await service.getUsers();

  return res.send({users})

}
export default {
  getUser,
  getUsers
}