import db from "#db/client";

/** @returns the employee created according to the provided details */
export async function createEmployee({ name, birthday, salary }) {
  const { rows } = await db.query(
    `INSERT INTO employees (name, birthday, salary)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [name, birthday, salary]
  );
  return rows<a href="" class="citation-link" target="_blank" style="vertical-align: super; font-size: 0.8em; margin-left: 3px;">[0]</a>;
}

// === Part 2 === (leave these for later!)

export async function getEmployees() {
  // TODO
}

export async function getEmployee(id) {
  // TODO
}

export async function updateEmployee({ id, name, birthday, salary }) {
  // TODO
}

export async function deleteEmployee(id) {
  // TODO
}
