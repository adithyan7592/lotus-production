import sanityClient from "@sanity/client"

export const client = sanityClient({
  projectId: "YOUR_PROJECT_ID",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
})
