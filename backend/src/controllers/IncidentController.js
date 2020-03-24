const connection = require("../database/connection");
module.exports = {
  async list(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection("incidents").count();
    const list = await connection("incidents")
      .limit(5)
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .offset((page - 1) * 5)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.email",
        "ongs.city",
        "ongs.uf"
      ]);

    res.header("X-Total-Count", count["count(*)"]);
    res.header("X-Page", page);
    return res.json(list);
  },
  async create(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;
    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id
    });

    return res.json({ id });
  },
  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;
    const incident = await connection("incidents")
      .where("id", id)
      .select("ong_id")
      .first();
    if (incident.ong_id !== ong_id)
      return res.status(401).json({ error: "Opration not Permitted" });

    await connection("incidents")
      .where("id", id)
      .delete();

    return res.status(204).send();
  }
};
