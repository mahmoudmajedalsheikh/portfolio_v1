
export default async function handler(req, res) {
  const SENTRY_HOST = "https://ce9ea5687c36fa4ebcd7834cca1c9033@o4507987466387456.ingest.de.sentry.io/4508280148852816"; // Replace with your Sentry host
  const SENTRY_PROJECT_IDS = ["4508280148852816"];         // Replace with your Sentry project ID(s)
  try {
    const envelopeBytes = await req.arrayBuffer();
    const envelope = new TextDecoder().decode(envelopeBytes);
    const piece = envelope.split("\n")[0];
    const header = JSON.parse(piece);
    const dsn = new URL(header.dsn);
    const projectId = dsn.pathname?.replace("/", "");

    if (dsn.hostname !== SENTRY_HOST) {
      throw new Error(`Invalid sentry hostname: ${dsn.hostname}`);
    }

    if (!projectId || !SENTRY_PROJECT_IDS.includes(projectId)) {
      throw new Error(`Invalid sentry project ID: ${projectId}`);
    }

    const upstreamSentryUrl = `https://${SENTRY_HOST}/api/${projectId}/envelope/`;
    await fetch(upstreamSentryUrl, {
      method: "POST",
      body: envelopeBytes,
    });

    res.status(200).end();
  } catch (e) {
    console.error("Error tunneling to Sentry:", e);
    res.status(500).json({ error: "Error tunneling to Sentry" });
  }
}
