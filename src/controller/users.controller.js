import { UserModel } from "../model/user.model.js";
import path from "path";
import fs from 'fs'
import { Url } from "url";
import { uploads } from "../utils/multer.config.js";
import { log } from "console";

export const userCreat = async (req, res) => {
  try {
    const user = await UserModel.create({
      username: req.body.username,
      avatarka: req.file.filename,
    });

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};

export const userGet = async (req, res) => {
  try {
   const {id}=req.params
    const user = await UserModel.findOne({ where: { id: id } });
    
    user.avatarka = 'http://localhost:9090/' + user.avatarka;
    res.json(user);

    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const userDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await UserModel.destroy({
      where: {
        id: id,
      },
    });

    return res.send("delete");
  } catch (error) {
    console.log(error);
  }
};
export const userUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { user_name, user_age } = req.body;
    const user = await UserModel.findOne({ where: { id: id } });
    
    fs.unlink(path.join(process.cwd(), "uploads", user.avatarka), (error) => {
      if (error) console.log(error);
    });
    
    user.user_name = user_name ?? user.user_name;
    user.user_age = user_age ?? user.user_age;
    user.avatarka = req.file?.filename ?? user.avatarka;

    await user.save();

     res.json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
    fs.unlink(path.join(process.cwd(), "uploads", req.file.filename), (error) => {
      if (error) console.log(error);
    });
  }
};
