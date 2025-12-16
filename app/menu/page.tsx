import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";

async function MenuData() {
  const supabase = await createClient();
  const { data: menuItems } = await supabase.from("menu_items").select();

  return <pre>{JSON.stringify(menuItems, null, 2)}</pre>;
}

export default function Menu() {
  return (
    <Suspense fallback={<div>Loading menu items...</div>}>
      <MenuData />
    </Suspense>
  );
}