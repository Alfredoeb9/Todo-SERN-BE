import { migrate } from "drizzle-orm/libsql/migrator";

import { db } from "./index.js";

// migrate function is called with two argurments: drizzle database and
// where the migrations files will be created

/**
 * During the migration process, Drizzle generates a migration SQL file along with
 * associated metadata files, which are stored in the specified migrationsFolder
 * path. The migration result (success or failure) is logged to the console, and
 * the process is terminated
 */
await migrate(db, { migrationsFolder: "db/migrations" })
  .then(() => {
    console.log("Migrations Completed!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Migrations failed!", err);
    process.exit(1);
  });
