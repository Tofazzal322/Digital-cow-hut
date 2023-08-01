/* eslint-disable no-useless-catch */
import { CowModel, ICow } from './cow.model';

// Create a new cow
// export const createCow = async (cowData: Partial<ICow>): Promise<ICow> => {
//   try {
//     const newCow = await CowModel.create(cowData);
//     return newCow;
//   } catch (error) {
//     throw error;
//   }
// };

// Get all cows
export const getAllCows = async (): Promise<ICow[]> => {
  try {
    const cows = await CowModel.find();
    return cows;
  } catch (error) {
    throw error;
  }
};

// Get a single cow by ID
export const getSingleCow = async (cowId: string): Promise<ICow | null> => {
  try {
    const cow = await CowModel.findById(cowId);
    return cow;
  } catch (error) {
    throw error;
  }
};

// Update a single cow by ID
export const updateSingleCow = async (
  cowId: string,
  updateData: Partial<ICow>
): Promise<ICow | null> => {
  try {
    const updatedCow = await CowModel.findByIdAndUpdate(cowId, updateData, {
      new: true,
    });
    return updatedCow;
  } catch (error) {
    throw error;
  }
};

// Delete a single cow by ID
export const deleteSingleCow = async (cowId: string): Promise<ICow | null> => {
  try {
    const deletedCow = await CowModel.findByIdAndDelete(cowId);
    return deletedCow;
  } catch (error) {
    throw error;
  }
};
const CowServices = {

  getAllCows,
  getSingleCow,
  updateSingleCow,
  deleteSingleCow,
};

export default CowServices;