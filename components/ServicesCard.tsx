import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { CircleArrowRight } from "lucide-react";

type CardProps = React.ComponentProps<typeof Card> & {
  className?: string;
  serviceId: number;
  title: string;
  description: string;
  imageUrl: string;
};

export function ServicesCard({
  className,
  serviceId,
  imageUrl,
  title,
  description,
  ...props
}: CardProps) {
  return (
    <Card className={cn("h-auto", className)} {...props}>
      <CardContent className="flex flex-col  gap-2 p-0">
        <div key={serviceId} className="flex">
          <Image
            src={imageUrl}
            width={380}
            height={200}
            alt={title}
            className="w-full h-full object-cover rounded-t-md rounded-b-md"
          />
          <div className="flex flex-col p-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
            <Button variant="ghost" className="mt-2 w-fit cursor-pointer">
              <CircleArrowRight /> Read More
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
