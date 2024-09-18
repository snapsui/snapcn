#!/usr/bin/env node
import { add } from "@/src/commands/add";
import { init } from "@/src/commands/init";
import { Command } from "commander";

import { getPackageInfo } from "./utils/get-package-info";

process.on("SIGINT", async () => {
  process.exit(0);
});

process.on("SIGTERM", async () => {
  process.exit(0);
});

async function main() {
  const packageInfo = await getPackageInfo();

  const program = new Command()
    .name("snapui-cli")
    .description("Add Snap UI components to your apps.")
    .version(
      packageInfo.version || "0.0.1",
      "-v, --version",
      "display the version number",
    );

  program.addCommand(init).addCommand(add);

  program.parse();
}

main();
