import Fastify from "fastify";
import storyRoutes from "./routes/storyRoutes";
import pingRoutes from "./routes/pingRoutes";

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

const fastify = Fastify({ logger: true });

// Enregistrement des routes
fastify.register(pingRoutes);
fastify.register(storyRoutes);

// Ajout d'une route de base pour la racine
fastify.get("/", async (request, reply) => {
  return { message: "Storyli API is Running" };
});

// Démarrage du serveur sur le port défini
fastify.listen({ port: PORT, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`🚀 Server is running at ${address}`);
});
