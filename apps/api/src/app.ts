import Fastify from "fastify";
import storyRoutes from "./routes/storyRoutes";
import pingRoutes from "./routes/pingRoutes";

const app = Fastify({ logger: true });

// Enregistrement des routes
app.register(storyRoutes);
app.register(pingRoutes);

export default app;
