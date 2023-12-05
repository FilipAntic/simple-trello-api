import {DataTypes, Model, Optional, Sequelize} from "sequelize";

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3'
});

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    id!: number;
    name!: string;
}

export interface UserAttributes {
    id: number;
    name: string;
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}


User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'users',
    }
);


export class Status extends Model<StatusAttributes, StatusCreationAttributes> implements StatusAttributes {
    id!: number;
    name!: string;
}

export interface StatusAttributes {
    id: number;
    name: string;
}

export interface StatusCreationAttributes extends Optional<StatusAttributes, 'id'> {}


Status.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'statuses',
    }
);


export class Task extends Model<TaskAttributes, TaskCreationAttributes> implements TaskAttributes {
    id!: number;
    title!: string;
    description!: string;
    userId!: number;
    statusId!: number;

}

export interface TaskAttributes {
    id: number;
    title: string;
    description: string
    userId: number;
    statusId: number;
}

export interface TaskCreationAttributes extends Optional<TaskAttributes, 'id'> {}


Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        statusId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    },
    {
        sequelize,
        tableName: 'tasks',
    }
);

Task.belongsTo(Status, { foreignKey: 'statusId', as: 'status' });
Task.belongsTo(User, { foreignKey: 'userId', as: 'user' });



