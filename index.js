import createFastify from "fastify";
import nextPlugin from "@fastify/nextjs";

const app = createFastify();
await app.register(nextPlugin);
app.get("/:id", {}, async (req, res) => {
  const { id } = req.params;
  res.send(id);
});

const res = await app.inject({
  method: "GET",
  path: `/1`
});
console.log(res.body);
