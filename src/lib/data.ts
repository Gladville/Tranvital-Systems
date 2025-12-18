import type { Product, Service, ProductCategory } from '@/lib/types';
import { FlaskConical, HeartPulse, Sun, Wrench, LifeBuoy, Laptop } from 'lucide-react';

export const products: Product[] = [
  {
    id: 'prod_001',
    name: 'Advanced Laboratory Microscope',
    category: 'Lab',
    description: 'High-precision microscope for detailed cellular analysis.',
    imageId: 'lab_microscope',
  },
  {
    id: 'prod_002',
    name: 'Digital Centrifuge',
    category: 'Lab',
    description: 'For rapid separation of fluid samples.',
    imageId: 'lab_centrifuge',
  },
  {
    id: 'prod_003',
    name: '12-Channel ECG Machine',
    category: 'Medical',
    description: 'State-of-the-art electrocardiogram for cardiac monitoring.',
    imageId: 'medical_ecg',
  },
  {
    id: 'prod_004',
    name: 'Multi-Parameter Patient Monitor',
    category: 'Medical',
    description: 'Comprehensive vital signs monitoring for critical care.',
    imageId: 'medical_monitor',
  },
  {
    id: 'prod_005',
    name: '5kW Rooftop Solar Panel System',
    category: 'Solar',
    description: 'Efficient and durable solar panels for residential energy needs.',
    imageId: 'solar_panels',
  },
  {
    id: 'prod_006',
    name: 'Hybrid Solar Inverter',
    category: 'Solar',
    description: 'Smart inverter with battery storage compatibility.',
    imageId: 'solar_inverter',
  },
];

export const services: Service[] = [
  {
    id: 'serv_001',
    title: 'Professional Installation',
    description: 'Our certified technicians ensure your equipment is set up for optimal performance and safety, adhering to the highest industry standards.',
    icon: Wrench,
  },
  {
    id: 'serv_002',
    title: 'After-Sales Support',
    description: 'We provide comprehensive after-sales support, including maintenance, troubleshooting, and repairs to maximize your investment\'s lifespan.',
    icon: LifeBuoy,
  },
  {
    id: 'serv_003',
    title: 'Technical Consultation',
    description: 'Leverage our expertise to choose the right solutions for your needs. We offer in-depth consultations to guide your purchasing decisions.',
    icon: Laptop,
  },
];

export const productCategories: ProductCategory[] = [
  { id: 'all', name: 'All Products' },
  { id: 'Lab', name: 'Laboratory', icon: FlaskConical },
  { id: 'Medical', name: 'Medical', icon: HeartPulse },
  { id: 'Solar', name: 'Solar Power', icon: Sun },
];
