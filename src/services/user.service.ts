import {User, UserCreationAttributes} from "../model/model";

export const createUser = async (user: UserCreationAttributes) => {
    const result = await User.create(user);
    return result.id;
};
