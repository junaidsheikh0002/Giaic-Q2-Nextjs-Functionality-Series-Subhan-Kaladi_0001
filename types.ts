export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface Hackathon {
  id: number;
  title: string;
  date: string;
  description: string;
  prize: string;
  image: string;
}

export interface RegistrationForm {
  name: string;
  email: string;
  teamName: string;
  projectIdea: string;
}
