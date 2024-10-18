const fs = require("fs-extra");
const path = require("path");
const esprima = require("esprima");

function generateAPIFile(codeBasePath, outputFile) {
  const apiData = [];

  function scanDirectory(directory) {
    const files = fs.readdirSync(directory);
    files.forEach((file) => {
      const filePath = path.join(directory, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith(".js") || file.endsWith(".ts")) {
        try {
          const content = fs.readFileSync(filePath, "utf8");
          extractAPIs(content, filePath);
        } catch (error) {
          console.error(`Error reading or parsing file: ${filePath}`, error);
        }
      }
    });
  }

  function extractAPIs(content, filePath) {
    try {
      const ast = esprima.parseScript(content, { tolerant: true });

      ast.body.forEach((node) => {
        if (
          node.type === "ExpressionStatement" &&
          node.expression.callee &&
          node.expression.callee.property &&
          ["get", "post", "put", "delete"].includes(
            node.expression.callee.property.name
          )
        ) {
          const method = node.expression.callee.property.name.toUpperCase();
          const route = node.expression.arguments[0].value;

          apiData.push({ method, route, file: filePath });
        }
      });
    } catch (error) {
      console.error(`Failed to parse file: ${filePath}`, error);
    }
  }

  scanDirectory(codeBasePath);

  const apiSummary = apiData
    .map(({ method, route, file }) => `${method} ${route} (${file})`)
    .join("\n");

  fs.writeFileSync(outputFile, apiSummary, "utf8");
  console.log(`API file generated: ${outputFile}`);
}

module.exports = generateAPIFile;
