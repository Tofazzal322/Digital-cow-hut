/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { CowBreed, CowCategory, CowLabel, CowLocation } from "../../../enums/cow";

export interface ICow {
  name: {
    firstName: string;
    lastName: string;
  };
  age: number;
  price: number;
  location: CowLocation;
  breed: CowBreed;
  weight: number;
  label: CowLabel;
  category: CowCategory;
  seller: string; // Reference to User model
}

