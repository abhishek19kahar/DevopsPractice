import Users from '../models/usermodel.js';

export const Adduser = async (req,res)=>{
    try{
    const adduser = new Users(req.body);
    const saved = await adduser.save();
    res.status(201).json(saved);
}catch(err){
    console.log(err);
}
}
