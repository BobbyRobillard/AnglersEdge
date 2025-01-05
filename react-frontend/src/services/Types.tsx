export interface Nested {
  id: number;
  name: string;
  properties: string[];
  notes: string[];
}

export interface Fish {
  id: number;
  species: string;
  bait: Nested[];
  food: Nested[];
  structure: Nested[];
  locations: Nested[];
  trends: string[];
  techniques: string[];
  tutorial_video?: string;
}
