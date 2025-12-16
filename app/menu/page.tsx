import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";
import { MenuItemCard } from "@/components/menu-item-card";


async function MenuData() {
  const supabase = await createClient();
  const { data: menuItems } = await supabase.from("menu_items").select();

  return menuItems ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {menuItems.map((item) => (
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

export default function Menu() {
  return (
    <Suspense fallback={<div>Loading menu items...</div>}>
      <MenuData />
    </Suspense>
  );
}