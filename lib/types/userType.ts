export type UserType = {
  id: string;
  picture: string;
  firstName: string;
  lastName: string;
  title: string;
};

export type UserFullType = {
  title: { value: string; label: string };
  firstName: string;
  lastName: string;
  email: string;
  picture: string;
  // gender: string;
  // dateOfBirth: string;
  // registerDate: string;
  // phone: string;
  // location: object;
};
