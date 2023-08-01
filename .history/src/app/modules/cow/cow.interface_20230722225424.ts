import { Model, Types } from 'mongoose';
import { IAcademicDepartment } from '../academicDepartment/academicDepartment.interfaces';
import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interfaces';
import { IAcademicSemester } from '../academicSemester/academicSemester.interface';

export type UserName = {
  firstName: string;
  lastName: string;
  middleName: string;
};

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
  address: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type IStudent = {
  id: string;
  name: UserName; //embedded object
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian; // embedded object
  localGuardian: LocalGuardian; // embedded object
  academicFaculty: Types.ObjectId | IAcademicFaculty; // reference _id
  academicDepartment: Types.ObjectId | IAcademicDepartment; // // reference _id
  academicSemester: Types.ObjectId | IAcademicSemester; // reference _id
  profileImage?: string;
};

export type StudentModel = Model<IStudent, Record<string, unknown>>;

export type IStudentFilters = {
  searchTerm?: string;
  id?: string;
  bloodGroup?: string;
  email?: string;
  contactNo?: string;
  emergencyContactNo?: string;
};


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
