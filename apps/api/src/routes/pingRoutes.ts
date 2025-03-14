import { FastifyInstance } from "fastify";

export default async function pingRoutes(fastify: FastifyInstance) {
  fastify.get("/ping", async (request, reply) => {
    return { status: "ok", timestamp: new Date().toISOString() };
  });
}
