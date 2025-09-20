const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function fetchAPI(endpoint) {
  const res = await fetch(`${API_URL}/api/${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  const { data } = await res.json();
  return data;
}