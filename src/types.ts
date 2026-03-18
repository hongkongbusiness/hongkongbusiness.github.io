export interface Faculty {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  specialization: string;
}

export interface News {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
}

export interface Institute {
  id: string;
  name: string;
  description: string;
  dean: string;
  facultyIds: string[];
}
