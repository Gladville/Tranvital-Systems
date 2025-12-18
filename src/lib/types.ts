import type { LucideIcon } from 'lucide-react';

export type Product = {
  id: string;
  name: string;
  category: 'Lab' | 'Medical' | 'Solar';
  description: string;
  imageId: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProductCategory = {
  id: 'all' | 'Lab' | 'Medical' | 'Solar';
  name: string;
  iconName?: 'FlaskConical' | 'HeartPulse' | 'Sun';
};
