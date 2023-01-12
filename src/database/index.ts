import { DataSource } from "typeorm";

const postgresDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "",
  password: "",
  database: "rentx",
  entities: [],
});
