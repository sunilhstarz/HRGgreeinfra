export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'gated' | 'public' | 'rural';
  imageUrl: string;
  location: string;
  area: string;
  completionDate: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  category: 'gated' | 'public' | 'rural';
  imageUrl: string;
  benefits: string[];
}