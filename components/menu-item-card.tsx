import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Button
} from "@/components/ui/button"


interface MenuItemCardProps {
  name: string
  description: string
  price: string
  imageUrl: string
}

export function MenuItemCard({
  name,
  description,
  price,
  imageUrl,
}: MenuItemCardProps) {
  return (
    <Card className="text-primary overflow-hidden flex flex-col">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-52 object-cover mb-4"
          />
      <CardContent className="">
        <CardHeader className="flex flex-row p-0 gap-4 justify-between mb-4 space-y-0">
            <CardTitle>{name}</CardTitle>
            <CardTitle className="font-semibold">{price}</CardTitle>
        </CardHeader>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardContent>
      <CardFooter className="mt-auto justify-end">
        <Button size="sm">Order Online</Button>
      </CardFooter>
    </Card>
  )
}