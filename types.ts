import { LucideIcon } from 'lucide-react';

export enum Page {
  HOME = 'HOME',
  SERVICES = 'SERVICES',
  ABOUT = 'ABOUT',
  WHY_US = 'WHY_US',
  CONTACT = 'CONTACT',
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: LucideIcon;
}