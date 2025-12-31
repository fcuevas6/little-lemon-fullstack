import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="flex flex-col lg:flex-row gap-14 text-primary-foreground items-center">
      <div className="lg:w-1/2 flex flex-col gap-6 justify-center">
        <h1 className="text-4xl lg:text-5xl text-secondary">
          Little Lemon Eatery
        </h1>
        <h2 className="text-3xl lg:text-4xl">Chicago, IL</h2>
        <p className="text-sm md:text-base">Welcome to Little Lemon. We are a family
        owned restaurant serving up fresh and delicious
        Mediterranean meals in the Lincon Park area.
        Join us for lunch or dinner!
        </p>
        <Button variant="secondary" size="lg">Reserve a Table</Button>
      </div>
      <div className="lg:w-1/2">
        <img
          src="https://kvijycxturiwqikcofon.supabase.co/storage/v1/object/public/public-assets/restaurant-food.jpg" 
          alt="A tray of assorted bite size bagettes with cheese, meat, and vegetables."
          className="w-96 h-96 object-cover rounded-sm shadow-lg"
          />
      </div>
    </div>
  );
}
