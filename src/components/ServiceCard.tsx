import type { Service } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="text-center hover:shadow-lg transition-shadow">
      <CardHeader className="items-center space-y-4">
        <div className="bg-primary text-primary-foreground p-4 rounded-full">
          <service.icon className="h-8 w-8" />
        </div>
        <CardTitle className="font-headline">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{service.description}</CardDescription>
      </CardContent>
    </Card>
  );
}
