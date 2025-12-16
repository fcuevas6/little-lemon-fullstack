export function Hero() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex flex-col gap-8 justify-center items-center">
        <h1 className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
          Little Lemon Eatery
        </h1>
        <h2>Chicago, IL</h2>
        <p>Welcome to Little Lemon. We are a family
        owned restaurant serving up fresh and delicious
        Mediterranean meals in the Lincon Park area.
        Join us for lunch or dinner!
        </p>
      </div>
      {/* light divider */}
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
