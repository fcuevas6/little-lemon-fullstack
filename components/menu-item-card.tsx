import {
  Card,
//   CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
    <Card className="max-w-xs">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-52 object-cover rounded-md mb-4"
          />
      <CardContent className="">
        <CardHeader className="flex flex-row p-0 justify-between items-center mb-2">
            <CardTitle>{name}</CardTitle>
            <span className="font-semibold">{price}</span>
        </CardHeader>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <p>Order Button</p>
      </CardFooter>
    </Card>
  )
}