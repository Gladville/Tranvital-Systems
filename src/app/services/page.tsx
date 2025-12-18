import PageHeader from '@/components/shared/PageHeader';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/lib/data';

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        title="Expert Services & Support"
        description="We are committed to your success. Our range of professional services ensures your equipment operates at peak performance."
      />
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
            ))}
        </div>
      </div>
    </div>
  );
}
