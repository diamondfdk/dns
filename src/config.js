const debug = false

const loki = {
  enabled: false,
  url: "",
}

const endpoints = {
  "/my/doh/path": {
    dohProviders: [
      {
        host: "dns11.quad9.net",
        path: "/dns-query",
      },
      {
        host: "cloudflare-dns.com",
        path: "/dns-query",
      },
      {
        main: true,
        host: "doh3.nextdns.io",
        path: "/ed34d9",
        headers: {
          "X-Device-Name": "onepal",
          "X-Device-Model": "11",
        },
      },
    ],
  },
}

export { debug, loki, endpoints }
