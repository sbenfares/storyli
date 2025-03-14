import { Story, StorySchema } from "../domain/story";
import { v4 as uuidv4 } from "uuid";

export function generateMockStory(
  name: string,
  age: number,
  theme: string
): Story {
  if (!StorySchema.shape.theme._def.values.includes(theme as Story["theme"])) {
    throw new Error(`Thème invalide : ${theme}`);
  }

  const story: Story = {
    id: uuidv4(),
    name,
    age,
    theme: theme as Story["theme"], // Cast sécurisé
    text: `Il était une fois, un enfant nommé ${name} qui vivait une aventure incroyable sur le thème de ${theme}.`,
    imageUrl: "https://via.placeholder.com/512",
    audioUrl: "https://example.com/mock-audio.mp3",
  };

  StorySchema.parse(story);

  return story;
}
