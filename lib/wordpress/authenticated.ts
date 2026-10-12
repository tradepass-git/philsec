const WP_API_URL = process.env.WP_API_URL;
const WP_API_USERNAME = process.env.WP_API_USERNAME;
const WP_API_APP_PASSWORD = process.env.WP_API_APP_PASSWORD;

if (!WP_API_URL) {
  throw new Error("WP_API_URL is not configured.");
}

function getAuthHeader() {
  if (!WP_API_USERNAME || !WP_API_APP_PASSWORD) {
    throw new Error(
      "WP_API_USERNAME and WP_API_APP_PASSWORD are required for private WordPress API calls."
    );
  }

  const credentials = Buffer.from(
    `${WP_API_USERNAME}:${WP_API_APP_PASSWORD}`
  ).toString("base64");

  return `Basic ${credentials}`;
}

export async function wpAuthenticatedFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(
      `${WP_API_URL!.replace(/\/$/, "")}/wp-json/${endpoint.replace(/^\//, "")}`,
      {
        ...options,
        headers: {
          Accept: "application/json",
          Authorization: getAuthHeader(),
          ...(options.headers ?? {}),
        },
        signal: options.signal ?? controller.signal,
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("WordPress private API error:", response.status, errorText);
      throw new Error(`WordPress private API returned ${response.status}.`);
    }

    return (await response.json()) as T;
  } finally {
    clearTimeout(timeout);
  }
}
