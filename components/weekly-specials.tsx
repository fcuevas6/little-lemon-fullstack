import { createClient } from "@/lib/supabase/client";
import { Suspense } from "react";
import { MenuItemCard } from "@/components/menu-item-card";

async function WeeklySpecialsData() {
  const supabase = await createClient();
  const { data: menuItems } = await supabase.from("menu_items").select();

  return menuItems ? (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
      {menuItems.map((item) => (
        item.is_special &&
        <MenuItemCard
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          imageUrl={item.image_url}
        />
      ))}
    </div>
  ) : (
    <div>No menu items found.</div>
  );

}

export default function WeeklySpecials() {
  return (
    <div className="lg:px-0 px-6 lg:px-32 items-center text-primary">
    <h1 className="text-4xl py-4">Weekly Specials</h1>
    <Suspense fallback={<div>Loading weekly special items...</div>}>
      <WeeklySpecialsData />
    </Suspense>
    </div>
  )
}