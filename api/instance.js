// import { LRUMap } from 'lru_map';
// import eFetch from 'f-etag';
import { query } from "@utils";
import config from "@config";

require("isomorphic-fetch");

// const lruCache = new LRUMap(15);

export const instance = async (apiPath, params) => {
  const url = `${config.resource.API_ENDPOINT}/${apiPath}${
    params ? `?${encodeURI(query.get(params))}` : ""
  }`;

  const response = await fetch(url, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      // 'If-None-Match': '*',
      "Cache-Control": "no-cache"
    }
    // cache: isBrowser ? 'default' : 'no-store',
    // headers,
  });

  if (response.ok) {
    const json = await response.json();

    // lruCache.set(url, json);

    return json;
  }

  const error = new Error(response.statusText);
  error.response = response;
  return Promise.reject(error);
};

// export const getCountryProperties = (pagination, filter) => instance('properties/country', { pagination, filter });
