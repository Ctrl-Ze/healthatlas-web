# healthatlas-web (Helios)

**Codename:** Helios — *the interface of HealthAtlas.*

Helios is the frontend dashboard of the HealthAtlas ecosystem.
It consumes APIs from the core services (Athena and others) to provide interactive visualization, reporting, and management of health data.

---

## Responsibilities
- Display aggregated health data in a user-friendly dashboard
- Provide interactive data visualization and filtering tools
- Enable CRUD operations where applicable via API calls to backend services
- Integrate with other HealthAtlas services for authentication, notifications, and analytics

---

## Related Services

TODO: Think more about this

| Service | Codename | Description |
|----------|-----------|-------------|
| healthatlas-core | Athena | Central aggregation and orchestration service|
| healthatlas-auth | Cerberus | Authentication & authorization |
| healthatlas-ocr | Hermes | OCR and document extraction |
| healthatlas-ingest | Iris / Pan | Wearable ingestion |
| healthatlas-analytics | Themis | Analytics and insight detection |
| healthatlas-audit | Mnemosyne | Audit and memory logs |
| healthatlas-notify | Echo | Alerts and notifications |
| healthatlas-ai | Chiron | AI and guidance layer |

---

## Local Development

Helios uses Vite, React, and TypeScript.

```bash
# Use Node.js 24
nvm use 24
```

```bash
# Install dependencies
npm install
```

```bash
# Run the development server
npm run dev
```

Open http://localhost:5173
 in your browser.

 ---

 ## Styling
 Helios uses Tailwind CSS for UI styling.
Make sure your main CSS file is imported in the entry point:

```ts
// src/main.tsx
import './index.css';
```

Tailwind configuration files: tailwind.config.js and postcss.config.js.

---
