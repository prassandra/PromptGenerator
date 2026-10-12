import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { z } from "zod";
import express from "express";

const app = express();
app.use(express.json());

function createServer() {
  const server = new McpServer({
    name: "driacom",
    version: "0.1.0",
  });

  server.registerTool(
    "driacom_short_story",
    {
      title: "Driacom Short Story",
      description: "Membuat Short Story berdasarkan input creator.",
      inputSchema: {
        title: z.string(),
        idea: z.string(),
        character: z.string(),
        setting: z.string(),
        genre: z.string(),
        tone: z.string(),
        duration: z.string(),
        scenes: z.string(),
        ratio: z.string(),
        language: z.string(),
      },
    },
    async (input) => {
      const prompt = `
Buat Short Story untuk Driacom.

Judul: ${input.title}
Ide: ${input.idea}
Karakter: ${input.character}
Setting: ${input.setting}
Genre: ${input.genre}
Tone: ${input.tone}
Durasi: ${input.duration}
Adegan: ${input.scenes}
Rasio: ${input.ratio}
Bahasa: ${input.language}

Output:
1. Konsep
2. Hook
3. Karakter
4. Storyline
5. Storyboard
6. Image Prompt
7. Video Prompt
8. Consistency
9. Negative Prompt
10. Voice/Dialogue
11. Caption
`;

      return {
        content: [
          {
            type: "text",
            text: prompt,
          },
        ],
      };
    }
  );

  return server;
}

app.post("/mcp", async (req, res) => {
  const server = createServer();

  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
  });

  await server.connect(transport);

  await transport.handleRequest(req, res, req.body);
});

app.get("/mcp", async (_req, res) => {
  res.status(405).json({
    error: "Method Not Allowed",
  });
});

app.delete("/mcp", async (_req, res) => {
  res.status(405).json({
    error: "Method Not Allowed",
  });
});

app.get("/", (_req, res) => {
  res.json({
    name: "Driacom MCP Server",
    status: "online",
  });
});

app.listen(3001, () => {
  console.log("Driacom MCP Server running on http://localhost:3001");
});