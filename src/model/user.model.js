import { DataTypes, Sequelize, Model } from "sequelize";
import { newSequelize } from "../config/index.js";

export class UserModel extends Model {}

UserModel.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    user_name: {
      type: Sequelize.STRING,
    },
    user_age: {
      type: DataTypes.INTEGER,
      
    },
    avatarka: {
      type: DataTypes.TEXT,
    },
  },

  {
    tableName: "users",
    modelName: "User",
    sequelize: newSequelize,
    paranoid: true,
    updatedAt: "updated_at",
    createdAt: "created_at",
    deletedAt: "deleted_at",
    underscored: true,
  }
);

await UserModel.sync({ alter: true });
