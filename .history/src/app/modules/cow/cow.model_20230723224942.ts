import { Schema } from "mongoose";
import { CowBreed, CowCategory, CowLabel, CowLocation } from "../../../enums/cow";

const cowSchema = new Schema<ICow>(
  {
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
    seller: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

export const CowModel = model<ICow>('Cow', cowSchema);
