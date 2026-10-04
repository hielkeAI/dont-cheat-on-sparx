"use strict";
let b = document.createElement("style");
b.type = "text/css";
b.innerText = `@font-face {font-family: 'FrostSans';src: url('${chrome.runtime.getURL(
  "static/frostsans.ttf",
)}') format('truetype')}`;
let c;
document.body.appendChild(b);
const _fsHost = window.location.hostname;
const _fsLoadInject =
  _fsHost.endsWith("drfrost.org") ||
  _fsHost === "frostsolve.com" ||
  _fsHost.endsWith(".frostsolve.com");
if (_fsLoadInject) {
  let a = document.createElement("script");
  a.src = chrome.runtime.getURL("scripts/injector.js");
  (document.head || document.documentElement).appendChild(a);
  a.onload = function () {
    a.parentNode.removeChild(a);
  };
}
if (_fsHost.endsWith("drfrost.org")) {
  chrome.runtime.sendMessage({ message: "getCookie" }, (d) => {
    c = d.cookie;
  });
}
window.addEventListener(
  "message",
  (a) => {
    if (a.source === window && a.data?.type === "fsFunnelEvent" && _fsHost.endsWith("drfrost.org")) {
      chrome.runtime.sendMessage({
        message: "trackFunnelEvent",
        event: a.data.event,
        account: a.data.account,
        plan: a.data.plan,
      });
    }
    if (a.data && a.data.type === "fetchInjectScript") {
      chrome.runtime.sendMessage(
        { message: "fetchInjectScript" },
        (response) => {
          window.postMessage(
            {
              type: "injectScriptResponse",
              success: response?.success || false,
              scriptContent: response?.scriptContent,
              error: response?.error,
            },
            "*",
          );
        },
      );
    }
    if (a.data && a.data.type === "fetchRequest") {
      chrome.runtime.sendMessage(
        {
          message: "proxyFetch",
          id: a.data.id,
          url: a.data.url,
          method: a.data.options?.method || "GET",
          headers: a.data.options?.headers || {},
          body: a.data.options?.body,
        },
        (response) => {
          window.postMessage(
            {
              type: "fetchResponse",
              id: a.data.id,
              success: response?.success || false,
              ok: response?.ok,
              status: response?.status,
              statusText: response?.statusText,
              text: response?.text,
              headers: response?.headers,
              error: response?.error,
            },
            "*",
          );
        },
      );
    }
    if (a.data && a.data.type === "fsBillingStorageRequest") {
      const requestId = a.data.requestId;
      chrome.runtime.sendMessage(
        {
          message:
            a.data.action === "set" ? "setBillingState" : "getBillingState",
          value: a.data.value,
        },
        (response) => {
          window.postMessage(
            {
              type: "fsBillingStorageResponse",
              requestId,
              success: response?.success || false,
              value: response?.value ?? null,
              error: response?.error,
            },
            "*",
          );
        },
      );
    }
    "addedEL" === a.data &&
      (console.log("got request"),
      c
        ? (document.getElementById("SESSION-HERE").value = c)
        : console.log("Cookie not available yet"));
  },
  !1,
);
