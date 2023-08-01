/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { CowBreed, CowCategory, CowLabel, CowLocation } from "../../../enums/cow";

export interface ICow {
  name: string ||;
  age: number;
  price: number;
  location: CowLocation;
  breed: CowBreed;
  weight: number;
  label: CowLabel;
  category: CowCategory;
  seller: string; // Reference to User model
}

// {
//   "password": "123456",
//   "student":
//     {
//       "name": {
//         "firstName": "John",
//         "lastName": "Doe",
//         "middleName":"TK"
//       },
//       "gender": "male",
//       "dateOfBirth": "24-04-1998",
//       "email": "john.doe@example.com",
//       "contactNo": "+1 (555) 123-4567",
//       "emergencyContactNo": "+1 (555) 987-6543",
//       "bloodGroup": "A+",
//       "presentAddress": "123 Main Street, Anytown, USA",
//       "permanentAddress": "456 Oak Avenue, Hometown, USA",
//       "academicFaculty": "617c2f4e08bcb870509be105",
//       "academicDepartment": "617c2f4e08bcb870509be106",
//       "academicSemester": "617c2f4e08bcb870509be107",
//       "guardian": {
//         "fatherName": "Michael Doe",
//         "fatherOccupation": "Engineer",
//         "fatherContactNo": "+1 (555) 111-2222",
//         "motherName": "Jane Doe",
//         "motherOccupation": "Teacher",
//         "motherContactNo": "+1 (555) 333-4444",
//         "address": "789 Elm Road, Somewhere, USA"
//       },
//       "localGuardian": {
//         "name": "Robert Smith",
//         "occupation": "Doctor",
//         "contactNo": "+1 (555) 888-9999",
//         "address": "321 Pine Lane, Nearbytown, USA"
//       }

//     }
// }
