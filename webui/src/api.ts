import { createConnectTransport } from "@connectrpc/connect-web";
import { createPromiseClient } from "@connectrpc/connect";
import { Backrest } from "../gen/ts/v1/service_connect";

const fetch = (
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> => {
  const headers = new Headers(init?.headers);
  headers.set("Authentication", "Bearer " + localStorage.getItem("token"));
  init = { ...init, headers };
  return window.fetch(input, init);
};

const transport = createConnectTransport({
  baseUrl: "/",
  useBinaryFormat: true,
  fetch: fetch as typeof globalThis.fetch,
});

export const backrestService = createPromiseClient(Backrest, transport);
