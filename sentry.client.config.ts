// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

// import * as Sentry from "@sentry/nextjs";
//
//
// Sentry.init({
//   debug: false,
//   dsn: "https://ce9ea5687c36fa4ebcd7834cca1c9033@o4507987466387456.ingest.de.sentry.io/4508280148852816", // Tunnel endpoint
//   // Add optional integrations for additional features
//   integrations: [
//     Sentry.replayIntegration(
//       {
//         maskAllText: true,
//         blockAllMedia: true,
//       }
//     ),
//
//     Sentry.feedbackIntegration({
//       // Additional SDK configuration goes in here, for example:
//       // Additional SDK configuration goes in here, for example:
//       colorScheme: "system",
//       isNameRequired: true,
//       isEmailRequired: true,
//     }),
//
//   ],
//
//   // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
//   replaysOnErrorSampleRate: 1.0,
//
//   // Define how likely Replay events are sampled.
//   // This sets the sample rate to be 10%. You may want this to be 100% while
//   // in development and sample at a lower rate in production
//   replaysSessionSampleRate: 0.1,
//
//   // Define how likely Replay events are sampled when an error occurs.
//   tracesSampleRate: 1,
//
//   // Setting this option to true will print useful information to the console while you're setting up Sentry.
//   tunnel: "/tunnel",
// });
import * as Sentry from "@sentry/nextjs";

// @ts-ignore
// @ts-ignore
Sentry.init({
  dsn: "https://ce9ea5687c36fa4ebcd7834cca1c9033@o4507987466387456.ingest.de.sentry.io/4508280148852816",
  tunnel: "./pages/api/tunnel.js", // Tunnel endpoint
  integrations: [
    //@ts-ignore
    new Sentry.BrowserTracing(),
    //@ts-ignore
    new Sentry.Replay(), // Optional: For session replay features
  ],
  tracesSampleRate: 1.0, // Adjust sampling rate based on your needs
  replaysSessionSampleRate: 0.1, // Optional
  replaysOnErrorSampleRate: 1.0,  // Optional
});





