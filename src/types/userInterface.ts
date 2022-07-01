export interface UserInformation {
  id: string;
  firstName: string;
  email: string;
  country: string;
  city: string;
  logged: boolean;
}

export interface LoginInformation {
  email: string | null;
  password: string | null;
}
