#!/usr/bin/env node

const { Command } = require("commander");
const path = require("path");
const generateAPIFile = require("./generateApiFile");

const program = new Command();

program
  .name("pathscribe")
  .description("API detection and generation tool")
  .version("1.0.0");

program
  .command("generate")
  .option("--out <file>", "Output file name", "api.yaml")
  .description("Generate API file from codebase")
  .action((options) => {
    const codeBasePath = path.resolve(process.cwd());
    generateAPIFile(codeBasePath, options.out);
  });

program.parse();
