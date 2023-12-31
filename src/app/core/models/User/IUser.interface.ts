export interface IUser {
  name: string;
  birthdate: string;
  gender: 'M' | 'F' | 'other';
  //stored in cm and converted accordingly
  profileImg: string;
  id: string;
  email: string;
  bio: string;
  status: string;
  backgroundImg: string;
  socials: {
    name:string;
    url: string;
  }[];
  bodyStats: {
    height: number;
    weight: number;
    // ... other stuff ?
  };
}
