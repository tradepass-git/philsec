const WP_API_URL = process.env.WP_API_URL;

if (!WP_API_URL) {
    throw new Error("WP_API_URL is not configured.");
}

function getWpBaseUrl() {
    const baseUrl = WP_API_URL;

    if (!baseUrl) {
        throw new Error("WP_API_URL is not configured.");
    }

    return `${baseUrl.replace(/\/$/, "")}/wp-json/wp/v2`;
}

type WPFetchOptions = {
    revalidate?: number;
    tags?: string[];
    cache?: RequestCache;
    signal?: AbortSignal;
};

export async function wpFetch<T>(
    endpoint: string,
    options: WPFetchOptions = {}
): Promise<T> {
    const {
        revalidate = 60,
        tags = [],
        cache,
        signal,
    } = options;

    const url = `${getWpBaseUrl()}/${endpoint.replace(/^\//, "")}`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    try {
        const response = await fetch(url, {
            headers: {
                Accept: "application/json",
            },

            ...(cache
                ? { cache }
                : {
                      next: {
                          revalidate,
                          tags,
                      },
                  }),

            signal: signal ?? controller.signal,
        });

        if (!response.ok) {
            throw new Error(
                `WordPress API returned ${response.status}.`
            );
        }

        return (await response.json()) as T;
    } finally {
        clearTimeout(timeout);
    }
}


/**
 * WordPress API fetch with pagination information
 */
export async function wpFetchWithPagination<T>(
    endpoint: string,
    options: WPFetchOptions = {}
) {
    const {
        revalidate = 60,
        tags = [],
        cache,
        signal,
    } = options;

    const url = `${getWpBaseUrl()}/${endpoint.replace(/^\//, "")}`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    try {
        const response = await fetch(url, {
            headers: {
                Accept: "application/json",
            },

            ...(cache
                ? { cache }
                : {
                      next: {
                          revalidate,
                          tags,
                      },
                  }),

            signal: signal ?? controller.signal,
        });

        if (!response.ok) {
            throw new Error(
                `WordPress API returned ${response.status}.`
            );
        }

        const data = await response.json();

        return {
            data: data as T,

            total: Number(
                response.headers.get("X-WP-Total") || 0
            ),

            totalPages: Number(
                response.headers.get("X-WP-TotalPages") || 0
            ),
        };
    } finally {
        clearTimeout(timeout);
    }
}