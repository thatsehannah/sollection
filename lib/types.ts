enum Activty {
  Casual = "casual",
  Fitness = "fitness",
  Work = "work",
  Standing = "standing",
  Night_Out = "night out",
  Other = "other",
}

enum Environment {
  Indoor = "indoor",
  Outdoor = "outdoor",
  Mixed = "mixed",
}

enum Type {
  Performance = "performance",
  Comfort = "comfort",
  Style = "style",
}

enum Material {
  Leather = "leather",
  Suede = "suede",
  Nubuck = "nubuck",
  Canvas = "canvas",
  Cotton = "cotton",
  Mesh = "mesh",
  Knit = "knit",
  Rubber = "rubber",
  Patent_Leather = "patent_leather",
  Denim = "denim",
  Velvet = "velvet",
  Other = "other",
}

interface SneakerDetails {
  brand: string;
  model: string;
  nickname: string;
  purchaseDate: string;
  purchasePrice: number;
  retailPrice: number;
  size: string;
  condition: "deadstock (new)" | "used";
  sku: string;
  material: Material[];
  activities: Activty[];
  environment: Environment;
  type: Type;
  timesWorn: number;
  lastWorn: string;
  thumbnailImageUrl: string;
  galleryImages?: string[5];
  notes: string;
}

export { Activty, Environment, Material, SneakerDetails, Type };
