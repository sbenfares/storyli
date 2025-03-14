import { FastifyInstance } from "fastify";
import { generateMockStory } from "../application/storyService";

export default async function storyRoutes(fastify: FastifyInstance) {
  fastify.post("/generate-story", async (request, reply) => {
    const { name, age, theme } = request.body as {
      name: string;
      age: number;
      theme: string;
    };

    const story = generateMockStory(name, age, theme);

    return reply.send(story);
  });
}
