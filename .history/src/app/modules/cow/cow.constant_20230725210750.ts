export const gender = ['male', 'female'];
export const bloodGroup = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export const cowSearchableFields = [
  'id',
  'email',
  'contactNo',
  'name.fisrtName',
  'name.middleName',
  'name.lastName',
];

export const cowFilterableFields = [
  'searchTerm',
  'id',
  'bloodGroup',
  'email',
  'contactNo',
  'emergencyContactNo',
];


 age: validatedData.body.age || 0,
      price: validatedData.body.price || 0,
      location: validatedData.body.location || CowLocation.Dhaka,
      breed: validatedData.body.breed || CowBreed.Brahman,
      weight: validatedData.body.weight || 0,
      label: validatedData.body.label || CowLabel.ForSale,
      category: validatedData.body.category || CowCategory.Dairy,
      seller: validatedData.body.seller || '',
    };