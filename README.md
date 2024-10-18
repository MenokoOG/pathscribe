Here’s a complete `README.md` for **Pathscribe** that includes detailed instructions for getting started, installation, and usage. You can also use the content for your documentation site.

---

# **Pathscribe**

> **Seamlessly detect and generate API documentation from your codebase.**

## **Overview**

Pathscribe is an API detection and generation tool that scans your project for API routes and generates documentation. Whether you’re using Express, NestJS, or other JavaScript frameworks, Pathscribe helps streamline your API management by providing easy-to-read summaries and even OpenAPI-compliant output.

---

## **Features**

- Detects API endpoints across your codebase (GET, POST, PUT, DELETE, etc.).
- Supports JavaScript and TypeScript projects.
- Generates API summaries in Markdown (`.md`) or OpenAPI (`.yaml`) formats.
- Lightweight and configurable with a command-line interface (CLI).

---

## **Installation**

### **Using NPM**

Install Pathscribe globally or as a development dependency:

```bash
# Install globally
npm install -g pathscribe

# Install as a dev dependency
npm install --save-dev pathscribe
```

---

## **Getting Started**

1. **Set up your project directory**:

   - Ensure your codebase is available locally.
   - Make sure your project contains JavaScript/TypeScript API routes.
2. **Run Pathscribe** from your project root:

   ```bash
   npx pathscribe generate --out api.md
   ```
3. **Check the output**:

   - A new file (`api.md` or as specified) will be generated with a summary of all detected API routes.
4. **Optional Configuration**:

   - You can configure which directories or files to scan by adding a `.pathscriberc` file.

---

## **Usage**

Pathscribe provides a simple CLI interface. Here are the available commands:

```bash
Usage: pathscribe [command] [options]

Commands:
  generate          Generate an API file from the codebase

Options:
  --out <file>      Output file name (default: api.yaml)
  -h, --help        Display help for the command
  -v, --version     Show the current version
```

### **Examples:**

- **Generate a Markdown API summary**:

  ```bash
  npx pathscribe generate --out api.md
  ```
- **Generate an OpenAPI YAML file**:

  ```bash
  npx pathscribe generate --out api.yaml
  ```

---

## **Configuration**

You can use a `.pathscriberc` file to exclude directories or specify custom settings.

**Example `.pathscriberc`**:

```json
{
  "exclude": ["node_modules", "tests"],
  "extensions": [".js", ".ts"]
}
```

---

## **Output Example**

**Given a code snippet:**

```javascript
const express = require('express');
const app = express();

app.get('/users', (req, res) => res.send('Get Users'));
app.post('/users', (req, res) => res.send('Create User'));
```

**Generated `api.md`**:

```
GET /users (src/app.js)
POST /users (src/app.js)
```

---

## **Roadmap & Future Enhancements**

- Add support for more frameworks (NestJS, FastAPI, etc.).
- Extend to other programming languages.
- Integrate OpenAPI/Swagger file generation directly.
- Provide a web interface for interacting with the generated API documentation.

---

## **Contributing**

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request with a detailed description.

---

## **License**

Pathscribe is licensed under the **MIT License**. See [LICENSE](LICENSE) for more information.

---

## **Support**

For help or inquiries, open an issue on the GitHub repository or contact the maintainer directly.

---

## **Changelog**

### v1.0.0

- Initial release with:
  - API detection for JavaScript/TypeScript.
  - Markdown and YAML output formats.
  - CLI interface with `generate` command.

---

## **Authors & Acknowledgments**

Developed by **Lawrence Jefferson II** (Menoko OG - Original Geek) and contributors.

---

## **Feedback**

We’d love your feedback! If you encounter any issues or have feature requests, feel free to open a GitHub issue or submit a pull request.

---

This `README.md` serves as both a **quick-start guide** and **project documentation**. Let me know if you need anything else!
