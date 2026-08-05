import db from "#db/client";
import { createEmployee } from "#db/queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  const employees = [
    { name: "Alice Johnson", birthday: "1990-01-15", salary: 55000 },
    { name: "Bob Smith", birthday: "1985-03-22", salary: 62000 },
    { name: "Charlie Davis", birthday: "1992-07-30", salary: 48000 },
    { name: "Dana White", birthday: "1988-11-05", salary: 71000 },
    { name: "Ethan Brown", birthday: "1995-06-18", salary: 53000 },
    { name: "Fiona Green", birthday: "1993-09-09", salary: 59000 },
    { name: "George Black", birthday: "1980-12-25", salary: 80000 },
    { name: "Hannah Blue", birthday: "1998-02-14", salary: 45000 },
    { name: "Ian Gray", birthday: "1991-04-02", salary: 67000 },
    { name: "Julia Red", birthday: "1987-08-20", salary: 73000 },
  ];

  for (const employee of employees) {
    await createEmployee(employee);
  }
}
