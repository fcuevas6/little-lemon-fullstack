export default function ColorsPage() {
  const colorGroups = [
    {
      title: "Base",
      colors: [
        { name: "background", bg: "bg-background", text: "text-foreground" },
        { name: "foreground", bg: "bg-foreground", text: "text-background" },
      ],
    },
    {
      title: "Primary",
      colors: [
        {
          name: "primary",
          bg: "bg-primary",
          text: "text-primary-foreground",
        },
      ],
    },
    {
      title: "Secondary",
      colors: [
        {
          name: "secondary",
          bg: "bg-secondary",
          text: "text-secondary-foreground",
        },
      ],
    },
    {
      title: "Muted",
      colors: [
        {
          name: "muted",
          bg: "bg-muted",
          text: "text-muted-foreground",
        },
      ],
    },
    {
      title: "Accent",
      colors: [
        {
          name: "accent",
          bg: "bg-accent",
          text: "text-accent-foreground",
        },
      ],
    },
    {
      title: "Card",
      colors: [
        {
          name: "card",
          bg: "bg-card",
          text: "text-card-foreground",
        },
      ],
    },
    {
      title: "Popover",
      colors: [
        {
          name: "popover",
          bg: "bg-popover",
          text: "text-popover-foreground",
        },
      ],
    },
    {
      title: "Destructive",
      colors: [
        {
          name: "destructive",
          bg: "bg-destructive",
          text: "text-destructive-foreground",
        },
      ],
    },
    {
      title: "Utility",
      colors: [
        {
          name: "border",
          bg: "bg-background",
          border: "border-border",
          text: "text-foreground",
        },
        {
          name: "input",
          bg: "bg-input",
          text: "text-foreground",
        },
        {
          name: "ring",
          bg: "bg-ring",
          text: "text-background",
        },
      ],
    },
    {
      title: "Charts",
      colors: [
        { name: "chart-1", bg: "bg-chart-1", text: "text-white" },
        { name: "chart-2", bg: "bg-chart-2", text: "text-white" },
        { name: "chart-3", bg: "bg-chart-3", text: "text-white" },
        { name: "chart-4", bg: "bg-chart-4", text: "text-white" },
        { name: "chart-5", bg: "bg-chart-5", text: "text-white" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-10">
      <h1 className="text-4xl font-bold mb-10">Color Tokens Preview</h1>

      <div className="space-y-12">
        {colorGroups.map((group) => (
          <section key={group.title}>
            <h2 className="text-2xl font-semibold mb-4">
              {group.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {group.colors.map((color) => (
                <div
                  key={color.name}
                  className={`rounded-lg p-4 border ${
                    color.border ?? "border-border"
                  } ${color.bg}`}
                >
                  <div
                    className={`rounded-md p-6 text-center ${color.text}`}
                  >
                    <p className="font-semibold">{color.name}</p>
                    <p className="text-sm opacity-80 mt-1">
                      {color.bg}
                    </p>
                    {color.text && (
                      <p className="text-xs opacity-60 mt-1">
                        {color.text}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
