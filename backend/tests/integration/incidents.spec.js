const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("incidents", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });
  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create a new incident ", async () => {
    const ong = await request(app)
      .post("/ongs")
      .send({
        name: "APE",
        email: "contato@gmail.com",
        whatsapp: "27988864790",
        city: "Cariacica",
        uf: "ES"
      });
    const id_ong = ong.body.id;
    const response = await request(app)
      .post("/incidents")
      .set("Authorization", id_ong)
      .send({
        title: "Testing",
        description: "Testing for lest",
        value: 16.2
      });
    console.log(response.body);
  });
});
