// import { Schema, model } from "mongoose";
// import { CowBreed, CowCategory, CowLabel, CowLocation } from "../../../enums/cow";
// import { ICow } from "./cow.interface";

// const cowSchema = new Schema<ICow>(
//   {
//     name: { type: String, required: true },
//     age: { type: Number, required: true },
//     price: { type: Number, required: true },
//     location: {
//       type: String,
//       enum: Object.values(CowLocation),
//       required: true,
//     },
//     breed: { type: String, enum: Object.values(CowBreed), required: true },
//     weight: { type: Number, required: true },
//     label: {
//       type: String,
//       enum: Object.values(CowLabel),
//       default: CowLabel.ForSale,
//     },
//     category: {
//       type: String,
//       enum: Object.values(CowCategory),
//       required: true,
//     },
//     seller: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   },
//   { timestamps: true }
// );

// export const CowModel = model<ICow>('Cow', cowSchema);
// export { ICow };

// models/cow/cow.model.ts
import { Schema, model, SchemaDefinitionProperty } from 'mongoose';
// import { CowBreed, CowCategory, CowLabel, CowLocation } from '../../enums/cow';
import { ICow } from './cow.interface';
import { CowLocation } from '../../../enums/cow';

const cowSchemaDefinition: Record<keyof ICow, SchemaDefinitionProperty<string | number>> = {
  name: { type: String, required: true },
  age: { type: Number, required: true },
  price: { type: Number, required: true },
  location: {
    type: String,
    enum: Object.values(CowLocation),
    required: true,
  },
  breed: { type: String, enum: Object.values(CowBreed), required: true },
  weight: { type: Number, required: true },
  label: {
    type: String,
    enum: Object.values(CowLabel),
    default: CowLabel.ForSale,
  },
  category: {
    type: String,
    enum: Object.values(CowCategory),
    required: true,
  },
  seller: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Assuming "User" is the user schema/model
};

const cowSchema = new Schema<ICow>(cowSchemaDefinition, { timestamps: true });

export const CowModel = model<ICow>('Cow', cowSchema);
