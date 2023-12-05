import {Status, StatusCreationAttributes} from "../model/model";

export const createStatus = async (status: StatusCreationAttributes) => {
    const result = await Status.create(status);
    return result.id;
};
export const getAllStatuses = async () => {
    return Status.findAll({raw: true});
};
