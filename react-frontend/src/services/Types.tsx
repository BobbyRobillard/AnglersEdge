// Types.tsx
// This file defines TypeScript type definitions for the data models used in the application.

// Represents a nested object structure for data like bait, food, and structure.
export interface Nested {
  id: number; // Unique identifier for the nested object.
  name: string; // Name or title of the object (e.g., bait name).
  properties: string[]; // List of properties associated with the object.
  notes: string[]; // List of additional notes or descriptions for the object.
}

// Represents the main data structure for a fish.
export interface Fish {
  id: number; // Unique identifier for the fish.
  species: string; // Name of the fish species.
  bait: Nested[]; // List of bait options related to the fish.
  food: Nested[]; // List of food sources related to the fish.
  structure: Nested[]; // List of structures relevant to the fish's habitat.
  locations: Nested[]; // List of known locations where the fish can be found.
  trends: string[]; // List of trends for catching the fish.
  techniques: string[]; // List of techniques for successfully catching the fish.
  tutorial_video?: string; // Optional URL for a tutorial video about the fish.
}
