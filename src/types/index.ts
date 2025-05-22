export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'gated' | 'public';
  imageUrl: string;
  location: string;
  area: string;
  completionDate: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  category: 'gated' | 'public';
  imageUrl: string;
  benefits: string[];
}