const f = function () {
  let I = true;
  return function (F, T) {
    const n = I ? function () {
      const V = {
        frfoV: "error"
      };
      if (T) {
        const s = T.apply(F, arguments);
        T = null;
        return s;
      }
    } : function () {};
    I = false;
    return n;
  };
}();
(function () {
  f(this, function () {
    const W = new RegExp("function *\\( *\\)");
    const Z = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const I = m("init");
    if (!W.test(I + "chain") || !Z.test(I + "input")) {
      I("0");
    } else {
      m();
    }
  })();
})();
const API_BASE = "https://api.slikc.me";
const variables = {
  questionScript: "drfrost.org/js/do-question.",
  liveScript: "drfrost.org/js/live-participant.",
  loadedAt: new Date().toLocaleTimeString(),
  answerableTypes: ["expression", "table", "desmos", "multiplechoice", "eqnsolutions", "coordinate", "inequality", "list", "numeric", "fraction", "ordered", "standardform", "textual", "vector", "ratio"],
  gsap: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js",
  loaderSVG: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-loader-circle\"><path d=\"M21 12a9 9 0 1 1-6.219-8.56\"/></svg>"
};
const _originalFetch = window.fetch;
const _proxyFetchHostAllowlist = new Set([new URL(API_BASE).host, "localhost:1337"]);
function trackFunnelEvent(Z, I, F) {
  if (typeof I !== "string" || !I) {
    return;
  }
  if (Z === "extension_opened" || Z === "first_answer") {
    try {
      const V = new Date().toISOString().slice(0, 10);
      const s = "fs_funnel_" + Z + "_" + I.toLowerCase();
      if (localStorage.getItem(s) === V) {
        return;
      }
      localStorage.setItem(s, V);
    } catch (x) {}
  }
  const u = {
    type: "fsFunnelEvent",
    event: Z,
    account: I,
    plan: F
  };
  window.postMessage(u, window.location.origin);
}
function fsIsSubmitAnswer(C, W) {
  if (String(C).toUpperCase() !== "POST") {
    return false;
  }
  try {
    const I = new URL(W, window.location.href);
    return I.origin === window.location.origin && I.pathname === "/api/tasks/submitanswer";
  } catch (F) {
    return false;
  }
}
function fsCaptureManualSubmission(W) {
  try {
    const I = $(document).data("taskState");
    const F = I?.question?.answer?.type;
    if (!F || typeof W !== "string" || W.length > 65536) {
      return;
    }
    const T = JSON.parse(W);
    if (!T || typeof T !== "object" || Array.isArray(T)) {
      return;
    }
    if (String(T.qnum) !== String(I.qnum) || String(T.aaid) !== String(I.attempt?.aaid)) {
      return;
    }
    const n = {
      questionType: F,
      questionId: I.question.qid ?? null,
      submission: T
    };
    fetch(API_BASE + "/api/submission-samples", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(n)
    }).catch(() => {});
  } catch (u) {}
}
function _normalizeFetchUrl(W) {
  if (typeof W === "string") {
    return W;
  }
  if (W instanceof URL) {
    return W.toString();
  }
  if (W && typeof W.url === "string") {
    return W.url;
  }
  return null;
}
function _shouldProxyFetch(W) {
  try {
    const F = new URL(W, window.location.href);
    return _proxyFetchHostAllowlist.has(F.host);
  } catch (T) {
    return typeof W === "string" && (W.includes(new URL(API_BASE).host) || W.includes("localhost:1337"));
  }
}
function _buildProxyRequestOptions(I, F) {
  const T = {
    XWcwV: function (V, s) {
      return V === s;
    },
    LQiCm: "active",
    GItgt: "ssMUW"
  };
  const n = T;
  if (F) {
    const V = {
      method: F.method || "GET",
      headers: F.headers || {},
      body: F.body
    };
    return V;
  }
  if (I instanceof Request) {
    if (n.GItgt === "ssMUW") {
      return {
        method: I.method || "GET",
        headers: Object.fromEntries(I.headers.entries())
      };
    } else if (n.XWcwV(F + 1, T)) {
      V.classList.add(n.LQiCm);
    } else {
      s.classList.remove(n.LQiCm);
    }
  }
  return {
    method: "GET",
    headers: {}
  };
}
window.fetch = async function (C, W) {
  const I = _normalizeFetchUrl(C);
  const F = W?.method || (C instanceof Request ? C.method : "GET");
  if (I && fsIsSubmitAnswer(F, I)) {
    const T = W?.body;
    if (typeof T === "string") {
      fsCaptureManualSubmission(T);
    } else if (C instanceof Request && !W?.body) {
      C.clone().text().then(fsCaptureManualSubmission).catch(() => {});
    }
  }
  if (I && _shouldProxyFetch(I)) {
    return new Promise((n, u) => {
      const V = {
        SQEPB: function (R, B) {
          return R(B);
        },
        MQkTs: function (R, B) {
          return R === B;
        },
        pbzEi: "HEFlM",
        hlhux: function (R, B) {
          return R(B);
        },
        lnuYE: function (R, B) {
          return R !== B;
        },
        lrEma: function (R, B) {
          return R(B);
        },
        Aymqf: "Fetch failed",
        SGvEl: function (R, B) {
          return R === B;
        },
        rHxPv: "QSnqP",
        BANQV: "Request timeout"
      };
      const s = Math.random().toString(36).substr(2, 9);
      let x = null;
      const O = R => {
        if (R.data?.type === "fetchResponse" && R.data.id === s) {
          window.removeEventListener("message", O);
          if (x) {
            V.hlhux(clearTimeout, x);
          }
          if (R.data.success) {
            if (V.lnuYE("teRGN", "teRGN")) {
              if (T) {
                return;
              }
              n = true;
              V.SQEPB(u, () => {
                x = false;
                O();
              });
            } else {
              const N = {
                ok: R.data.ok,
                status: R.data.status,
                statusText: R.data.statusText || "",
                json: async () => {
                  try {
                    return JSON.parse(R.data.text);
                  } catch (w) {
                    if (V.MQkTs("eMckF", V.pbzEi)) {
                      return;
                    } else {
                      throw new Error("Invalid JSON response");
                    }
                  }
                },
                text: async () => R.data.text,
                headers: new Headers(R.data.headers || {})
              };
              V.lrEma(n, N);
            }
          } else {
            u(new Error(R.data.error || V.Aymqf));
          }
        }
      };
      window.addEventListener("message", O);
      window.postMessage({
        type: "fetchRequest",
        id: s,
        url: I,
        options: _buildProxyRequestOptions(C, W)
      }, "*");
      x = setTimeout(() => {
        const R = {
          pfwEz: function (N, w) {
            return N * w;
          }
        };
        const B = R;
        if (V.SGvEl("LjjeR", V.rHxPv)) {
          const w = 2147483000 + B.pfwEz(u.length, 2);
          V.overlay.style.zIndex = s(w);
          x.dialog.style.zIndex = O(w + 1);
          R.push(B);
        } else {
          window.removeEventListener("message", O);
          u(new Error(V.BANQV));
        }
      }, 30000);
    });
  }
  return _originalFetch.call(this, C, W);
};
let globals = {
  menuOpen: false,
  lastSolvedQnum: null
};
let cook = document.createElement("input");
let modalNames = [];
cook.type = "hidden";
(function () {
  let W;
  try {
    const Z = Function("return (function() {}.constructor(\"return this\")( ));");
    W = Z();
  } catch (I) {
    W = window;
  }
  W.setInterval(m, 2000);
})();
cook.id = "SESSION-HERE";
document.body.appendChild(cook);
window.postMessage("addedEL", "*");
let fsModalStylesInjected = false;
const fsModalStack = [];
function ensureFsModalStyles() {
  if (fsModalStylesInjected) {
    return;
  }
  const C = document.createElement("style");
  C.id = "fs-modal-styles";
  C.textContent = "\n      @keyframes fs-fade-in { from { opacity: 0 } to { opacity: 1 } }\n      @keyframes fs-fade-out { from { opacity: 1 } to { opacity: 0 } }\n      @keyframes fs-reduced-enter { from { opacity: 0 } to { opacity: 1 } }\n      @keyframes fs-reduced-exit { from { opacity: 1 } to { opacity: 0 } }\n      @keyframes fs-scale-in { from { opacity: 0; transform: translate(-50%, -48%) scale(.96) } to { opacity: 1; transform: translate(-50%, -50%) scale(1) } }\n      @keyframes fs-scale-out { from { opacity: 1; transform: translate(-50%, -50%) scale(1) } to { opacity: 0; transform: translate(-50%, -48%) scale(.96) } }\n      @keyframes fs-answer-slide-in { from { opacity: 0; transform: translateY(10px) scale(.98) } to { opacity: 1; transform: translateY(0) scale(1) } }\n      @keyframes fs-answer-slide-out { from { opacity: 1; transform: translateY(0) scale(1) } to { opacity: 0; transform: translateY(6px) scale(.98) } }\n  \n      .fs-modal-overlay { position: fixed; inset: 0; background: rgba(15, 23, 42, .8); backdrop-filter: blur(4px); animation: fs-fade-in 180ms cubic-bezier(.23, 1, .32, 1); z-index: 2147483000; }\n      .fs-modal-dialog { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); min-width: 700px; max-width: 900px; min-height: 500px; max-height: 85vh; overflow: auto; background: #0b1220; /* slate-950-ish */ color: #e5e7eb; /* slate-200 */ border: 1px solid #1f2a3a; /* slate-800 */ border-radius: 14px; box-shadow: 0 10px 40px rgba(0,0,0,.45), 0 0 0 1px rgba(51, 65, 85, .2); padding: 20px 20px 16px 20px; animation: fs-scale-in 180ms cubic-bezier(.23, 1, .32, 1); z-index: 2147483001; font-family: FrostSans, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; }\n      .fs-modal-overlay.fs-closing { animation: fs-fade-out 140ms cubic-bezier(.23, 1, .32, 1) forwards; }\n      .fs-modal-dialog.fs-closing { animation: fs-scale-out 140ms cubic-bezier(.23, 1, .32, 1) forwards; }\n      .fs-answer-overlay { animation: fs-fade-in 180ms cubic-bezier(.23, 1, .32, 1) forwards; }\n      .fs-answer-modal { transform: translateY(10px) scale(.98); transform-origin: bottom right; opacity: 0; animation: fs-answer-slide-in 180ms cubic-bezier(.23, 1, .32, 1) forwards; }\n      .fs-answer-overlay.fs-closing { animation: fs-fade-out 140ms cubic-bezier(.23, 1, .32, 1) forwards; }\n      .fs-answer-modal.fs-closing { animation: fs-answer-slide-out 140ms cubic-bezier(.23, 1, .32, 1) forwards; }\n      .fs-modal-close { position: absolute; top: 10px; right: 10px; border: none; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white; width: 32px; height: 32px; border-radius: 6px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; transition: transform 140ms cubic-bezier(.23, 1, .32, 1), background-color 140ms ease, border-color 140ms ease, color 140ms ease; }\n      .fs-modal-dialog button:active:not(:disabled) { transform: scale(.97); }\n      .fs-modal-close:active { transform: scale(.97); }\n      .fs-modal-content { margin-top: 6px; }\n      .fs-modal-dialog button { border-radius: 10px; border: 1px solid #263246; background: #111827; color: #e5e7eb; padding: 8px 14px; cursor: pointer; transition: background-color 140ms ease, border-color 140ms ease, color 140ms ease, transform 140ms cubic-bezier(.23, 1, .32, 1); box-shadow: 0 0 0 0 rgba(0,0,0,0); }\n      .fs-answer-modal .fs-modal-content button { flex: 1; min-width: 120px; padding: 12px; background: rgba(255,255,255,.05); border-color: rgba(255,255,255,.15); }\n      .fs-modal-dialog button:disabled { opacity: .55; cursor: not-allowed; }\n      @media (hover: hover) and (pointer: fine) {\n        .fs-modal-close:hover { background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.3); }\n        .fs-modal-dialog button:hover:not(:disabled) { background: #1f2937; border-color: #334155; }\n        .fs-answer-modal .fs-modal-content button:hover:not(:disabled) { background: rgba(255,255,255,.1); border-color: rgba(255,255,255,.25); }\n        #buyYearButton:hover:not(:disabled), #buyLifetimeButton:hover:not(:disabled) { transform: translateY(-2px); }\n      }\n      #buyYearButton:active:not(:disabled), #buyLifetimeButton:active:not(:disabled) { transform: scale(.98); }\n      .fs-modal-dialog a { color: #93c5fd; text-decoration: none; }\n      .fs-modal-dialog a:hover { text-decoration: underline; }\n      .fs-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border-width: 0; }\n  \n      .fs-answer-overlay { background: transparent; backdrop-filter: none; }\n      .fs-answer-modal { background: linear-gradient(145deg, #0f172a, #1e293b); border: 1px solid #334155; box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(148, 163, 184, 0.1); }\n      .fs-answer-modal .fs-modal-content { padding: 0; }\n      .fs-answer-modal .fs-modal-close { top: 15px; right: 15px; width: 32px; height: 32px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); }\n      @media (hover: hover) and (pointer: fine) { .fs-answer-modal .fs-modal-close:hover { background: rgba(239, 68, 68, 0.2); color: #ef4444; } }\n\n      @media (prefers-reduced-motion: reduce) {\n        .fs-modal-overlay, .fs-modal-dialog, .fs-answer-overlay, .fs-answer-modal { animation: fs-reduced-enter 100ms ease-out both !important; }\n        .fs-modal-overlay.fs-closing, .fs-modal-dialog.fs-closing, .fs-answer-overlay.fs-closing, .fs-answer-modal.fs-closing { animation-name: fs-reduced-exit !important; }\n        .fs-answer-modal { transform: none; }\n        .fs-modal-close, .fs-modal-dialog button, .fs-toggle-slider, .fs-toggle-slider:before { transition-duration: 1ms !important; }\n        .animate-spin { animation: none !important; }\n      }\n  \n      @media (max-width: 768px) {\n        .fs-answer-modal {\n          min-width: 300px;\n          max-width: calc(100vw - 40px);\n          bottom: 10px;\n          right: 10px;\n          left: 10px;\n          margin: 0;\n        }\n      }\n  \n      @media (max-width: 480px) {\n        .fs-answer-modal {\n          min-width: 280px;\n          max-width: calc(100vw - 20px);\n          bottom: 10px;\n          right: 10px;\n          left: 10px;\n          margin: 0;\n        }\n      }\n    ";
  (document.head || document.documentElement).appendChild(C);
  fsModalStylesInjected = true;
}
function fsGetFocusable(W) {
  const F = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "iframe", "object", "embed", "[contenteditable]", "[tabindex]:not([tabindex=\"-1\"])"];
  const T = Array.from(W.querySelectorAll(F.join(",")));
  return T.filter(n => n.offsetParent !== null || n === document.activeElement);
}
function fsTrapFocus(C) {
  const Z = I => {
    if (fsModalStack.length === 0) {
      return;
    }
    const T = fsModalStack[fsModalStack.length - 1];
    if (!T || T.dialog !== C.dialog) {
      return;
    }
    if (I.key === "Escape") {
      I.stopPropagation();
      (async () => await dfmDialogCloseLast())();
      return;
    }
    if (I.key !== "Tab") {
      return;
    }
    const n = fsGetFocusable(T.dialog);
    if (n.length === 0) {
      T.dialog.focus();
      I.preventDefault();
      return;
    }
    const u = n[0];
    const V = n[n.length - 1];
    const s = I.shiftKey;
    if (s && document.activeElement === u) {
      V.focus();
      I.preventDefault();
    } else if (!s && document.activeElement === V) {
      u.focus();
      I.preventDefault();
    }
  };
  document.addEventListener("keydown", Z, true);
  C.cleanupFns.push(() => document.removeEventListener("keydown", Z, true));
}
function fsPushModal(W) {
  const F = 2147483000 + fsModalStack.length * 2;
  W.overlay.style.zIndex = String(F);
  W.dialog.style.zIndex = String(F + 1);
  fsModalStack.push(W);
}
function fsPopModal() {
  return fsModalStack.pop();
}
function fsDisableBodyScroll() {
  document.documentElement.classList.add("fs-modal-open");
  document.body.style.overflow = "hidden";
}
function fsEnableBodyScrollIfNone() {
  if (fsModalStack.length === 0) {
    document.documentElement.classList.remove("fs-modal-open");
    document.body.style.overflow = "";
  }
}
let fsToastStylesInjected = false;
const fsToastStack = [];
const fsToastQueue = [];
function ensureFsToastStyles() {
  if (fsToastStylesInjected) {
    return;
  }
  const C = document.createElement("style");
  C.id = "fs-toast-styles";
  C.textContent = "\n      .fs-toast-container {\n        position: fixed;\n        bottom: 20px;\n        right: 20px;\n        z-index: 2147483647;\n        pointer-events: none;\n        max-width: 400px;\n        display: flex;\n        flex-direction: column;\n        align-items: flex-end;\n      }\n  \n      .fs-toast {\n        background: #1f2937;\n        border: 1px solid #374151;\n        border-radius: 12px;\n        padding: 16px 20px;\n        margin-bottom: 12px;\n        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(55, 65, 81, 0.2);\n        pointer-events: auto;\n        transform: translateY(8px) scale(.98);\n        opacity: 0;\n        font-family: FrostSans, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;\n        transition: transform 180ms cubic-bezier(.23, 1, .32, 1), opacity 180ms cubic-bezier(.23, 1, .32, 1);\n      }\n  \n      .fs-toast.fs-toast-success {\n        background: #065f46;\n        border-color: #10b981;\n        box-shadow: 0 10px 25px rgba(16, 185, 129, 0.2), 0 0 0 1px rgba(16, 185, 129, 0.3);\n      }\n  \n      .fs-toast.fs-toast-error {\n        background: #7f1d1d;\n        border-color: #ef4444;\n        box-shadow: 0 10px 25px rgba(239, 68, 68, 0.2), 0 0 0 1px rgba(239, 68, 68, 0.3);\n      }\n  \n      .fs-toast.fs-toast-info {\n        background: #1e3a8a;\n        border-color: #3b82f6;\n        box-shadow: 0 10px 25px rgba(59, 130, 246, 0.2), 0 0 0 1px rgba(59, 130, 246, 0.3);\n      }\n  \n      .fs-toast-header {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        margin-bottom: 8px;\n      }\n  \n      .fs-toast-title {\n        font-size: 14px;\n        font-weight: 600;\n        color: #f9fafb;\n        margin: 0;\n      }\n  \n      .fs-toast-close {\n        background: transparent;\n        border: none;\n        color: #9ca3af;\n        cursor: pointer;\n        font-size: 18px;\n        line-height: 1;\n        padding: 0;\n        width: 20px;\n        height: 20px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 4px;\n        transition: background-color 140ms ease, color 140ms ease, transform 140ms cubic-bezier(.23, 1, .32, 1);\n      }\n  \n      @media (hover: hover) and (pointer: fine) {\n        .fs-toast-close:hover { background: rgba(255, 255, 255, 0.1); color: #f3f4f6; }\n      }\n      .fs-toast-close:active { transform: scale(.97); }\n  \n      .fs-toast-content {\n        font-size: 13px;\n        color: #d1d5db;\n        line-height: 1.4;\n        margin: 0;\n      }\n  \n      .fs-toast.fs-toast-showing {\n        transform: translateY(0) scale(1);\n        opacity: 1;\n      }\n  \n      .fs-toast.fs-toast-hiding {\n        transform: translateY(6px) scale(.98);\n        opacity: 0;\n      }\n\n      @media (prefers-reduced-motion: reduce) {\n        .fs-toast { transition-duration: 1ms; }\n      }\n  \n      .fs-toast-icon {\n        width: 18px;\n        height: 18px;\n        margin-right: 8px;\n        flex-shrink: 0;\n      }\n    ";
  (document.head || document.documentElement).appendChild(C);
  fsToastStylesInjected = true;
}
class AdHandler {
  static async getAds() {
    const W = {
      gkRvU: "Active WebSocket instance not available.",
      vgQEr: function (T, n) {
        return T + n;
      },
      EOHje: "/api/ext/ads",
      RrdyY: function (T, n) {
        return T !== n;
      },
      WRftF: "hhwpw"
    };
    const Z = W;
    const I = await fetch(Z.vgQEr(API_BASE, Z.EOHje));
    if (!I.ok) {
      if (Z.RrdyY("hhwpw", Z.WRftF)) {
        W.error(Z.gkRvU);
      } else {
        return null;
      }
    }
    const F = await I.json();
    return F;
  }
  static getOrCreateAdContainer(C) {
    const W = {
      ogxKs: function (T, n) {
        return T(n);
      },
      ozQah: "keybind",
      rNQrI: "nGlGj",
      GKMcp: "div",
      nNxUV: "fs-ad-container",
      QwUKG: function (T, n) {
        return T === n;
      },
      euizd: "jHLka",
      oIjty: function (T, n) {
        return T !== n;
      },
      xgTfP: function (T, n) {
        return T === n;
      },
      AQwEg: "stretch",
      eygLi: "before",
      YhQaA: function (T, n) {
        return T !== n;
      }
    };
    let Z;
    if (C.selectorType === "css") {
      if (W.rNQrI !== "nGlGj") {
        W.push(true);
      } else {
        Z = document.querySelector(C.selector);
      }
    } else {
      Z = XPATH(C.selector);
    }
    if (!Z) {
      return null;
    }
    let I = document.querySelector("[data-ad-slot=\"" + C.id + "\"]");
    if (I) {
      return I;
    }
    I = document.createElement(W.GKMcp);
    I.className = W.nNxUV;
    I.dataset.adSlot = C.id;
    if (C.styles) {
      if (W.QwUKG(W.euizd, "jHLka")) {
        if (C.styles.height) {
          if (W.oIjty("CJBxv", "CJBxv")) {
            if (I.element.parentNode) {
              n.element.parentNode.removeChild(u.element);
            }
          } else if (W.xgTfP(C.styles.height, "stretch")) {
            I.style.alignSelf = W.AQwEg;
            I.dataset.stretch = "true";
          } else {
            I.style.height = C.styles.height;
          }
        }
        if (C.styles.minHeight) {
          I.style.minHeight = C.styles.minHeight;
        }
        if (C.styles.width) {
          if (W.QwUKG("nZVCO", "xUyLS")) {
            w = "\n                <div style=\"display: flex; flex-direction: column; height: 100%; font-family: FrostSans;\">\n                  <!-- Header Section -->\n                  <div style=\"text-align: center; margin-bottom: 20px;\">\n                    <h1 style=\"color: white; font-family: 'FrostSans'; font-size: 31px; font-weight: bold; margin: 0 0 10px 0; line-height: 1.2;\">Welcome to FrostSolve, " + E.user.firstname + "</h1>\n                    <p style=\"color: rgba(255,255,255,0.6); font-family: 'FrostSans'; font-size: 15px; margin: 0 0 15px 0; line-height: 1.4;\">You need an active FrostSolve purchase to use these features.</p>\n                  </div>\n  \n                  <!-- Prominent Purchase Section -->\n                  <div style=\"background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05)); border-radius: 10px; padding: 25px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.15);\">\n                    <h3 style=\"color: white; margin: 0 0 15px 0; font-size: 18px; font-weight: 600; text-align: center; line-height: 1.3; font-family: FrostSans;\">Choose Your Plan</h3>\n                    <div style=\"display: flex; gap: 15px; margin-bottom: 15px;\">\n                      <button id=\"buyYearButton\" style=\"flex: 1; font-family: FrostSans; padding: 16px; border-radius: 8px; font-size: 16px; font-weight: bold; background: linear-gradient(45deg, #ff6b6b, #ee5a24); border: none; color: white; cursor: pointer; transition: transform 160ms cubic-bezier(.23, 1, .32, 1), box-shadow 160ms ease; box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);\">Buy Year</button>\n                      <button id=\"buyLifetimeButton\" style=\"flex: 1; font-family: FrostSans; padding: 16px; border-radius: 8px; font-size: 16px; font-weight: bold; background: linear-gradient(45deg, #26d0ce, #1dd1a1); border: none; color: white; cursor: pointer; transition: transform 160ms cubic-bezier(.23, 1, .32, 1), box-shadow 160ms ease; box-shadow: 0 4px 15px rgba(38, 208, 206, 0.3);\">Buy Lifetime</button>\n                    </div>\n                    <p style=\"color: rgba(255,255,255,0.7); font-size: 13px; font-weight: 400; text-align: center; margin: 0; line-height: 1.4; font-family: FrostSans;\">Unlock all FrostSolve features with unlimited access</p>\n                    <button id=\"startTrialButton\" style=\"width: 100%; margin-top: 12px; font-family: FrostSans; padding: 12px; border-radius: 6px; font-size: 14px; font-weight: bold;\" " + (o.had_trial ? "disabled style='opacity: 0.6; cursor: not-allowed;'" : "") + ">" + (A.had_trial ? "Free trial already used" : "Start 48-hour free trial") + "</button>\n                  </div>\n  \n                  <!-- Other Options -->\n                  <div style=\"display: flex; flex: 1; gap: 20px; margin-bottom: 20px;\">\n                    <!-- Left Column -->\n                    <div style=\"flex: 1; display: flex; flex-direction: column; gap: 15px;\">\n                      <!-- Keybind Settings -->\n                      <div style=\"background: rgba(255,255,255,0.05); border-radius: 10px; padding: 15px;\">\n                        <h3 style=\"color: white; margin: 0 0 15px 0; font-size: 16px; font-weight: 600; line-height: 1.3; font-family: FrostSans;\">Keybinds</h3>\n                        <div style=\"display: flex; gap: 15px;\">\n                          <div style=\"flex: 1; text-align: left;\">\n                            <label style=\"color: rgba(255,255,255,0.7); font-size: 13px; font-weight: 500; display: block; margin-bottom: 5px; font-family: FrostSans;\">Menu</label>\n                            <button id=\"keybindButtonMenu\" style=\"width: 100%; font-family: FrostSans; opacity: 0.6; cursor: not-allowed; padding: 8px; border-radius: 6px;\" disabled>" + (j.get("keybind").menu || "Not Set") + "</button>\n                          </div>\n                          <div style=\"flex: 1; text-align: left;\">\n                            <label style=\"color: rgba(255,255,255,0.7); font-size: 13px; font-weight: 500; display: block; margin-bottom: 5px; font-family: FrostSans;\">Answer</label>\n                            <button id=\"keybindButtonAns\" style=\"width: 100%; font-family: FrostSans; opacity: 0.6; cursor: not-allowed; padding: 8px; border-radius: 6px;\" disabled>" + (v.get(W.ozQah).answer || "Not Set") + "</button>\n                          </div>\n                        </div>\n                      </div>\n  \n                      <!-- Settings -->\n                      <div style=\"background: rgba(255,255,255,0.05); border-radius: 10px; padding: 15px;\">\n                        <h3 style=\"color: white; margin: 0 0 10px 0; font-size: 16px; font-weight: 600; line-height: 1.3; font-family: FrostSans;\">Auto-Answer Settings</h3>\n                        <div style=\"display: flex; align-items: center; gap: 10px; margin-bottom: 10px;\">\n                          <label style=\"color: white; font-size: 14px; font-weight: 500; white-space: nowrap; font-family: FrostSans;\">Use Interval:</label>\n                          <input type=\"checkbox\" id=\"useInterval1\" " + (a.get("settings").use_interval ? "checked" : "") + " style=\"opacity: 0.6; cursor: not-allowed;\" disabled>\n                        </div>\n                        <div id=\"singleTime1\" style=\"display: " + (l.get("settings").use_interval ? "none" : "flex") + "; align-items: center; gap: 15px;\">\n                          <label style=\"color: white; font-size: 14px; font-weight: 500; white-space: nowrap; font-family: FrostSans;\">Time per Q:</label>\n                          <input type=\"range\" step=\"0.5\" min=\"0.5\" max=\"10\" value=" + L.get("settings").time_per_q + " id=\"tpqamount1\" style=\"flex: 1; color: red; opacity: 0.6; cursor: not-allowed;\" disabled>\n                          <span id=\"tpqamountdisplay1\" style=\"color: white; font-size: 14px; font-weight: 500; min-width: 25px; text-align: center; font-family: FrostSans;\">\n                          " + Y.get("settings").time_per_q + "\n                          </span>\n                        </div>\n                        <div id=\"intervalTime1\" style=\"display: " + (r.get("settings").use_interval ? "flex" : "none") + "; flex-direction: column; gap: 10px;\">\n                          <div style=\"display: flex; align-items: center; gap: 15px;\">\n                            <label style=\"color: white; font-size: 14px; font-weight: 500; white-space: nowrap; font-family: FrostSans;\">Min:</label>\n                            <input type=\"range\" step=\"0.5\" min=\"0.5\" max=\"20\" value=" + c.get("settings").time_per_q_min + " id=\"tpqmin1\" style=\"flex: 1; color: red; opacity: 0.6; cursor: not-allowed;\" disabled>\n                            <span id=\"tpqmindisplay1\" style=\"color: white; font-size: 14px; font-weight: 500; min-width: 25px; text-align: center; font-family: FrostSans;\">\n                            " + H.get("settings").time_per_q_min + "\n                            </span>\n                          </div>\n                          <div style=\"display: flex; align-items: center; gap: 15px;\">\n                            <label style=\"color: white; font-size: 14px; font-weight: 500; white-space: nowrap; font-family: FrostSans;\">Max:</label>\n                            <input type=\"range\" step=\"0.5\" min=\"0.5\" max=\"20\" value=" + P.get("settings").time_per_q_max + " id=\"tpqmax1\" style=\"flex: 1; color: red; opacity: 0.6; cursor: not-allowed;\" disabled>\n                            <span id=\"tpqmaxdisplay1\" style=\"color: white; font-size: 14px; font-weight: 500; min-width: 25px; text-align: center; font-family: FrostSans;\">\n                            " + i.get("settings").time_per_q_max + "\n                            </span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n  \n                    <!-- Right Column -->\n                    <div style=\"flex: 1; display: flex; flex-direction: column; gap: 15px;\">\n                      <!-- Actions -->\n                      <div style=\"background: rgba(255,255,255,0.05); border-radius: 10px; padding: 15px;\">\n                        <h3 style=\"color: white; margin: 0 0 15px 0; font-size: 16px; font-weight: 600; line-height: 1.3; font-family: FrostSans;\">Actions</h3>\n                        <div style=\"display: flex; flex-direction: column; gap: 10px;\">\n                          <button id=\"completeTaskButton\" style=\"width: 100%; color: white; font-family: FrostSans; opacity: 0.6; cursor: not-allowed; padding: 12px; border-radius: 6px;\" disabled>Complete Task</button>\n                          <button id=\"discordButton\" style=\"width: 100%; font-family: FrostSans; padding: 12px; border-radius: 6px;\">Join Discord</button>\n                        </div>\n                      </div>\n  \n                      <!-- Additional Info -->\n                      <div style=\"background: rgba(255,255,255,0.05); border-radius: 10px; padding: 15px; flex: 1; display: flex; flex-direction: column; justify-content: center;\">\n                        <h3 style=\"color: white; margin: 0 0 10px 0; font-size: 16px; font-weight: 600; line-height: 1.3; text-align: center; font-family: FrostSans;\">Need Help?</h3>\n                        <p style=\"color: rgba(255,255,255,0.7); font-size: 13px; font-weight: 400; text-align: center; margin: 0; line-height: 1.4; font-family: FrostSans;\">Join our Discord for support and updates</p>\n                      </div>\n                    </div>\n                  </div>\n  \n                  <!-- Footer -->\n                  <div style=\"border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px; text-align: center;\">\n                    <div style=\"display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: rgba(255,255,255,0.7);\">\n                      <span style=\"cursor: pointer;\" onclick='window.open(\"https://frostsolve.com\")'>FrostSolve.com</span>\n                      <span style=\"cursor: pointer;\" id=\"devmenu\">Build Version v5</span>\n                    </div>\n                  </div>\n                </div>\n              ";
          } else {
            I.style.width = C.styles.width;
            I.style.flexShrink = "0";
          }
        }
        if (C.styles.margin) {
          I.style.margin = C.styles.margin;
        }
        if (C.styles.variant) {
          I.dataset.variant = C.styles.variant;
        }
      } else {
        E = o;
        A.style.backgroundColor = j[v].selectedColor;
        a.value = l[L].selectedHue;
        Y.style.left = r[c].wheelPosition.x + "px";
        H.style.top = P[i].wheelPosition.y + "px";
        z.forEach((K, G) => {
          if (G + 1 === D) {
            K.classList.add("active");
          } else {
            K.classList.remove("active");
          }
        });
      }
    }
    const F = C.insertMode || "inside";
    switch (F) {
      case W.eygLi:
        if (Z.parentNode) {
          if (W.YhQaA("naUlY", "naUlY")) {
            for (let O = 0; O < N; O++) {
              const R = (a + O) % l;
              L.renderAdIntoContainer(Y[O].el, r.ads[R], c[O].slot);
            }
          } else {
            Z.parentNode.insertBefore(I, Z);
          }
        }
        break;
      case "after":
        if (Z.parentNode) {
          Z.parentNode.insertBefore(I, Z.nextSibling);
        }
        break;
      case "inside":
      default:
        if (Z.firstChild) {
          Z.insertBefore(I, Z.firstChild);
        } else {
          Z.appendChild(I);
        }
        break;
    }
    return I;
  }
  static renderAdIntoContainer(C, W, Z = null) {
    const I = {
      OsUhS: "/html/body/div[2]/nav/div/div[2]/button",
      VJPdJ: function (O, R) {
        return O === R;
      },
      YpafQ: "ijAkS",
      cEWtL: function (O, R, B) {
        return O(R, B);
      },
      fdsmi: "height: 100%;",
      UIfsf: function (O, R) {
        return O !== R;
      },
      kGaBf: "rgba(",
      PJRtG: "kTImb",
      oNdSj: "vbgyY",
      CdpfJ: "Rjhmx",
      QpCyG: "25px"
    };
    if (!C || !W) {
      return;
    }
    const F = Z && Z.styles && Z.styles.height === "stretch";
    const T = Z && Z.styles && Z.styles.minHeight;
    let n;
    if (F) {
      n = I.fdsmi;
    } else if (T) {
      n = "min-height: " + Z.styles.minHeight + ";";
    } else {
      const R = Z && Z.styles && Z.styles.height || C.style.height || "auto";
      n = "height: " + R + ";";
    }
    let u = (W.color || "#333333").trim();
    let V = u;
    let s = u;
    function x(B, N) {
      B = B.replace(/^#/, "");
      if (B.length === 3) {
        if (I.VJPdJ(I.YpafQ, "ijAkS")) {
          B = B.split("").map(j => j + j).join("");
        } else {
          return {
            status: "logged_out"
          };
        }
      }
      const w = I.cEWtL(parseInt, B, 16);
      const E = w >> 16 & 255;
      const o = w >> 8 & 255;
      const A = w & 255;
      return "rgba(" + E + ", " + o + ", " + A + ", " + N + ")";
    }
    if (u.startsWith("#")) {
      V = x(u, 0.3);
      s = u;
    } else if (u.startsWith("rgb(")) {
      if (I.UIfsf("zohEB", "XGEdI")) {
        V = u.replace("rgb(", I.kGaBf).replace(")", ",0.3)");
        s = u;
      } else {
        W.remove();
      }
    } else if (u.startsWith(I.kGaBf)) {
      V = u.replace(/rgba\(([^,]+),([^,]+),([^,]+),([^)]+)\)/, "rgba($1,$2,$3,0.3)");
      s = u.replace(/rgba\(([^,]+),([^,]+),([^,]+),([^)]+)\)/, "rgba($1,$2,$3,1)");
    }
    C.innerHTML = "<a href=\"" + W.link + "\" target=\"_blank\" style=\"text-decoration: none; display: block; height: 100%;\">\n      <div class=\"fs-ad-content\" style=\"" + n + " background-color: " + V + "; border: 2px dashed " + s + "; padding: 10px; border-radius: 5px; position: relative; font-family: FrostSans; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; cursor: pointer; box-sizing: border-box; overflow: hidden;\">\n        " + (W.img ? "<img src=\"" + W.img + "\" alt=\"" + W.title + "\" style=\"width: 48px; height: 48px; margin-bottom: 12px; object-fit: contain; flex-shrink: 0;\" />" : "") + "\n        <div style=\"font-weight: bold; color:rgb(58, 58, 58); font-size: 18px; margin-bottom: 8px; word-wrap: break-word; overflow-wrap: break-word; max-width: 100%;\">" + W.title + "</div>\n        " + (W.desc ? "<div style=\"color:rgb(94, 94, 94); font-size: 15px; word-wrap: break-word; overflow-wrap: break-word; max-width: 100%;\">" + W.desc + "</div>" : "") + "\n        <div style=\"position: absolute; bottom: 5px; left: 10px; font-size: 12px; color: #888;\">advertisement</div>\n      </div>\n    </a>";
    if (T) {
      if (I.PJRtG !== "kTImb") {
        I.customSetQNum(F(T.aa.qnum));
      } else {
        const w = C.querySelector(".fs-ad-content");
        if (w) {
          if (I.oNdSj === I.CdpfJ) {
            W.getElementById("autoAnswering").style.display = "none";
          } else {
            w.style.paddingBottom = I.QpCyG;
          }
        }
      }
    }
  }
  static injectAd(W, Z, I = "xpath") {
    const n = {
      id: "legacy-" + Math.random().toString(36).substr(2, 9),
      selector: Z,
      selectorType: I,
      insertMode: "inside",
      styles: {}
    };
    const u = this.getOrCreateAdContainer(n);
    if (u) {
      this.renderAdIntoContainer(u, W, n);
    }
  }
}
(function () {
  if (document.getElementById("fs-ad-flip-styles")) {
    return;
  }
  const W = document.createElement("style");
  W.id = "fs-ad-flip-styles";
  W.textContent = "\n    .fs-ad-container {\n      perspective: 1000px;\n    }\n    \n    .fs-ad-content {\n      transition: transform 220ms cubic-bezier(.77, 0, .175, 1), opacity 220ms cubic-bezier(.23, 1, .32, 1);\n      transform-style: preserve-3d;\n      backface-visibility: hidden;\n    }\n    \n    .fs-ad-container.flipping .fs-ad-content {\n      transform: rotateY(180deg);\n      opacity: 0.3;\n    }\n\n    @media (prefers-reduced-motion: reduce) {\n      .fs-ad-content { transition-duration: 1ms; }\n    }\n  ";
  (document.head || document.documentElement).appendChild(W);
})();
class ToastHandler {
  static show({
    title: W,
    content: Z,
    type = "info",
    duration = 4000
  } = {}) {
    const I = {
      znpxw: function (B, N) {
        return B > N;
      },
      DpqXS: function (B, N, w) {
        return B(N, w);
      },
      BQHTv: "fs-toast-showing",
      ZUKLF: function (B, N) {
        return B >= N;
      },
      dMnCa: "hiding",
      GxGAy: "div",
      fYPpy: "click"
    };
    ensureFsToastStyles();
    if (I.ZUKLF(fsToastStack.length, 3)) {
      const B = fsToastStack.shift();
      if (B) {
        B.element.dataset.state = I.dMnCa;
        B.element.classList.add("fs-toast-hiding");
        const N = setTimeout(() => {
          if (B.element.parentNode) {
            B.element.parentNode.removeChild(B.element);
          }
        }, 180);
        if (B.timeoutId) {
          clearTimeout(B.timeoutId);
        }
        if (B.hideTimeoutId) {
          clearTimeout(B.hideTimeoutId);
        }
        B.removeTimeoutId = N;
      }
    }
    const F = "toast-" + Math.random().toString(36).substr(2, 9);
    const T = ToastHandler.getOrCreateContainer();
    const n = Array.from(T.querySelectorAll(".fs-toast:not(.fs-toast-hiding)"));
    const u = n.map(w => ({
      el: w,
      top: w.getBoundingClientRect().top
    }));
    const V = document.createElement(I.GxGAy);
    V.className = "fs-toast fs-toast-" + type;
    V.id = F;
    V.dataset.state = "showing";
    const s = ToastHandler.getIconForType(type);
    V.innerHTML = "\n        <div class=\"fs-toast-header\">\n          <h3 class=\"fs-toast-title\">\n            " + (s ? "<span class=\"fs-toast-icon\">" + s + "</span>" : "") + "\n            " + W + "\n          </h3>\n          <button class=\"fs-toast-close\" aria-label=\"Close notification\">×</button>\n        </div>\n        <div class=\"fs-toast-content\">" + Z + "</div>\n      ";
    T.appendChild(V);
    T.offsetHeight;
    u.forEach(({
      el: w,
      top: E
    }) => {
      const o = w.getBoundingClientRect().top;
      const A = E - o;
      if (I.znpxw(Math.abs(A), 0.5) && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        w.style.willChange = "transform";
        w.style.transition = "transform 180ms cubic-bezier(.23, 1, .32, 1)";
        w.style.transform = "translateY(" + A + "px)";
        requestAnimationFrame(() => {
          w.style.transform = "translateY(0)";
        });
        I.DpqXS(setTimeout, () => {
          w.style.transition = "";
          w.style.transform = "";
          w.style.willChange = "auto";
        }, 220);
      }
    });
    requestAnimationFrame(() => {
      V.classList.add(I.BQHTv);
    });
    const x = {
      id: F,
      element: V,
      duration: duration,
      timeoutId: null,
      hideTimeoutId: null
    };
    const O = x;
    fsToastStack.push(O);
    const R = V.querySelector(".fs-toast-close");
    R.addEventListener(I.fYPpy, () => {
      ToastHandler.hide(F);
    });
    O.timeoutId = setTimeout(() => {
      ToastHandler.hide(F);
    }, duration);
    return F;
  }
  static hide(C) {
    const Z = fsToastStack.find(F => F.id === C);
    if (!Z) {
      return;
    }
    const I = Z.element;
    I.dataset.state = "hiding";
    I.classList.add("fs-toast-hiding");
    Z.hideTimeoutId = setTimeout(() => {
      if (I.parentNode) {
        I.parentNode.removeChild(I);
      }
      const F = fsToastStack.indexOf(Z);
      if (F > -1) {
        fsToastStack.splice(F, 1);
      }
      if (Z.timeoutId) {
        clearTimeout(Z.timeoutId);
      }
      if (Z.hideTimeoutId) {
        clearTimeout(Z.hideTimeoutId);
      }
    }, 180);
    return true;
  }
  static hideAll() {
    [...fsToastStack].forEach(C => {
      ToastHandler.hide(C.id);
    });
  }
  static getOrCreateContainer() {
    let W = document.querySelector(".fs-toast-container");
    if (!W) {
      W = document.createElement("div");
      W.className = "fs-toast-container";
      document.body.appendChild(W);
    }
    return W;
  }
  static getIconForType(C) {
    switch (C) {
      case "success":
        return "✓";
      case "error":
        return "⚠";
      case "info":
        return "ℹ";
      default:
        return null;
    }
  }
  static update(W, {
    title: Z,
    content: I,
    type: F,
    duration: T
  } = {}) {
    const V = fsToastStack.find(x => x.id === W);
    if (!V) {
      return false;
    }
    const s = V.element;
    if (Z !== undefined) {
      const x = s.querySelector(".fs-toast-title");
      const O = x.querySelector(".fs-toast-icon");
      const R = ToastHandler.getIconForType(F || "info");
      x.innerHTML = "" + (R ? "<span class=\"fs-toast-icon\">" + R + "</span>" : "") + Z;
    }
    if (I !== undefined) {
      const B = s.querySelector(".fs-toast-content");
      B.textContent = I;
    }
    if (F !== undefined) {
      s.className = "fs-toast fs-toast-" + F;
    }
    if (T !== undefined) {
      if (V.timeoutId) {
        clearTimeout(V.timeoutId);
      }
      V.duration = T;
      V.timeoutId = setTimeout(() => {
        ToastHandler.hide(W);
      }, T);
    }
    return true;
  }
}
const originalOpen = XMLHttpRequest.prototype.open;
const originalSend = XMLHttpRequest.prototype.send;
const blockedUrls = ["https://analytics.drfrost.org/i/v0/e/", "sentry.io", "https://sonic.drfrost.org"];
XMLHttpRequest.prototype.open = function (C, W) {
  this._url = W;
  this._method = C;
  originalOpen.apply(this, arguments);
};
XMLHttpRequest.prototype.send = function (C) {
  if (blockedUrls.some(W => this._url.includes(W))) {
    return;
  }
  originalSend.apply(this, [C]);
  if (fsIsSubmitAnswer(this._method, this._url)) {
    fsCaptureManualSubmission(C);
  }
};
function isPageReloaded() {
  return performance.getEntriesByType("navigation").length > 0 && performance.getEntriesByType("navigation")[0].type === "reload";
}
function dfmAlert(W) {
  const Z = {
    cSqSL: function (w) {
      return w();
    },
    qyoDC: "HQLyZ",
    RZZtF: "fs-closing",
    XUuOt: "JHkev",
    MBuyR: function (w, E) {
      return w === E;
    },
    pjGAZ: "/api/tasks/submitanswer",
    aeMnd: "fs-modal-dialog",
    jcDxB: "dialog",
    qMiwF: "aria-labelledby",
    qSpdx: "button",
    VcXPU: "div",
    mdSvr: "fs-modal-content",
    YtJtK: "click",
    SneVr: function (w, E) {
      return w(E);
    },
    HACGZ: function (w, E) {
      return w > E;
    },
    WIisB: function (w, E) {
      return w !== E;
    },
    cOKKH: "suNoZ"
  };
  ensureFsModalStyles();
  const I = "message-" + Math.random().toString(36).substr(2, 9);
  modalNames.push(I);
  const F = document.createElement("div");
  F.className = "fs-modal-overlay";
  F.dataset.modalId = I;
  const T = document.createElement("div");
  T.className = Z.aeMnd;
  T.id = I;
  T.setAttribute("role", Z.jcDxB);
  T.setAttribute("aria-modal", "true");
  T.setAttribute(Z.qMiwF, I + "-title");
  T.tabIndex = -1;
  const n = document.createElement(Z.qSpdx);
  n.className = "fs-modal-close close-modal";
  n.setAttribute("aria-label", "Close");
  n.innerHTML = "✕";
  const u = document.createElement(Z.VcXPU);
  u.className = Z.mdSvr;
  u.innerHTML = W;
  T.appendChild(n);
  T.appendChild(u);
  const V = [];
  const s = async () => {
    try {
      const w = modalNames.lastIndexOf(I);
      if (w !== -1) {
        modalNames.splice(w, 1);
      }
      const E = Z.cSqSL(fsPopModal);
      if (E && E.overlay.parentNode && E.dialog.parentNode) {
        if (Z.qyoDC !== "HQLyZ") {
          W.textContent = "Copy Answer";
        } else {
          F.classList.add("fs-closing");
          T.classList.add(Z.RZZtF);
          await new Promise(A => setTimeout(A, 180));
          E.overlay.parentNode.removeChild(E.overlay);
          E.dialog.parentNode.removeChild(E.dialog);
        }
      }
      V.forEach(A => {
        try {
          Z.cSqSL(A);
        } catch (j) {}
      });
      fsEnableBodyScrollIfNone();
    } finally {
      globals.menuOpen = false;
    }
  };
  const x = async w => {
    if (Z.XUuOt === "FfcVr") {
      Z(I.timeoutId);
    } else if (Z.MBuyR(w.target, F)) {
      await s();
    }
  };
  F.addEventListener("click", x);
  V.push(() => F.removeEventListener("click", x));
  const O = async () => await s();
  n.addEventListener(Z.YtJtK, O);
  V.push(() => n.removeEventListener("click", O));
  document.body.appendChild(F);
  document.body.appendChild(T);
  const R = {
    overlay: F,
    dialog: T,
    cleanupFns: V
  };
  const B = R;
  fsPushModal(B);
  fsDisableBodyScroll();
  fsTrapFocus(B);
  const N = Z.SneVr(fsGetFocusable, T);
  if (Z.HACGZ(N.length, 0)) {
    N[0].focus();
  } else if (Z.WIisB("suNoZ", Z.cOKKH)) {
    x.textContent = O.value;
    const o = R.get("settings");
    B.set("settings", {
      ...o,
      time_per_q: N(w.value),
      time_per_q_min: E(o.value),
      time_per_q_max: A(j.value)
    });
  } else {
    T.focus();
  }
  globals.menuOpen = true;
  return false;
}
function recolorModal() {}
async function dfmDialogCloseLast() {
  if (fsModalStack.length === 0) {
    return;
  }
  const I = fsModalStack[fsModalStack.length - 1];
  const F = I.dialog.querySelector(".close-modal");
  if (F) {
    await F.click();
  }
}
function lastModal() {
  if (fsModalStack.length > 0) {
    return fsModalStack[fsModalStack.length - 1].dialog;
  }
  return document.getElementById(modalNames[modalNames.length - 1]);
}
async function importScript(W, Z) {
  let T = document.createElement("script");
  T.src = W;
  T.onload = Z;
  document.head.appendChild(T);
  console.log("[IMPORT_SCRIPT] Loaded script: " + W);
}
function e(C) {
  let Z = Array.from(C).map(T => {
    let u = T.charCodeAt(0).toString();
    return btoa(u);
  }).join(",");
  let I = btoa(Z);
  let F = I.split("").reverse().join("");
  return F;
}
function d(W) {
  let F = W.split("").reverse().join("");
  let T = atob(F);
  let u = [];
  T.split(",").map(O => {
    let R = atob(O);
    u.push(R);
  });
  for (let O = 0; O < u.length; O++) {
    u[O] = String.fromCharCode(u[O]);
  }
  let V = u.join("");
  return V;
}
function XPATH(C) {
  return document.evaluate(C, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
function readableExpiration(W) {
  if (W === null) {
    return "You have lifetime access to FrostSolve";
  }
  let F = new Date().getTime() / 1000;
  let T = W - F;
  let n = Math.floor(T / 3600);
  let u = Math.floor(T % 3600 / 60);
  if (n > 24) {
    return "You have FrostSolve for another " + Math.floor(n / 24) + " days, " + n % 24 + " hours, and " + u + " minutes";
  } else {
    return "You have FrostSolve for another " + n + " hours, and " + u + " minutes";
  }
}
const FS_BRAID_ALPHABET_A = "QWERTYUIOPASDFGH";
const FS_BRAID_ALPHABET_B = "mnbvcxzlkjhgfdsq";
const FS_BRAID_HINT_ALPHABET = "K7mQ2pV9xB4nR6tY1wC8sD3uF5hJ0aLzGqXcEoI_bN-rTjSgUvkPdeWfAylMHiZO";
const FS_BRAID_PERIOD_SECONDS = 1641600;
let fsBraidCounter = (() => {
  const C = new Uint16Array(1);
  crypto.getRandomValues(C);
  return C[0];
})();
function fsCrc16(C) {
  let W = 65535;
  for (const Z of C) {
    W ^= Z << 8;
    for (let I = 0; I < 8; I++) {
      W = W & 32768 ? (W << 1 ^ 4129) & 65535 : W << 1 & 65535;
    }
  }
  return W;
}
function fsPathHash(W) {
  let F = 2166136261;
  for (const T of new TextEncoder().encode(W)) {
    F ^= T;
    F = Math.imul(F, 16777619) >>> 0;
  }
  return (F ^ F >>> 16) & 65535;
}
function fsTimestampHint(C) {
  return [18, 12, 6, 0].map(W => FS_BRAID_HINT_ALPHABET[C >>> W & 63]).join("");
}
function fsDecoyPositions(W) {
  const F = [W % 35, (Math.floor(W / 35) + 11) % 35, (Math.floor(W / 1225) + 23) % 35];
  for (let T = 1; T < F.length; T++) {
    while (F.slice(0, T).includes(F[T])) {
      F[T] = (F[T] + 1) % 35;
    }
  }
  return F.sort((n, u) => n - u);
}
function generateToken(W = window.location.pathname) {
  const F = 1;
  const T = new Uint8Array(16);
  crypto.getRandomValues(T.subarray(1, 7));
  const n = Math.floor(Date.now() / 1000) % FS_BRAID_PERIOD_SECONDS;
  const u = fsBraidCounter++ & 65535;
  const V = u ^ u >>> 1;
  const s = fsPathHash(W);
  T[0] = F << 4 | T[1] & 1;
  T[7] = n >>> 16 & 31;
  T[8] = n >>> 8 & 255;
  T[9] = n & 255;
  T[10] = V >>> 8;
  T[11] = V & 255;
  T[12] = s >>> 8;
  T[13] = s & 255;
  const x = fsCrc16(T.subarray(0, 14));
  T[14] = x >>> 8;
  T[15] = x & 255;
  const O = Array.from(T).flatMap(v => [v >>> 4, v & 15]);
  let R = 0;
  const B = O.map((v, a) => {
    const l = v + R + (a * 7 + F * 3 & 15) & 15;
    R = l;
    return (a % 2 === 0 ? FS_BRAID_ALPHABET_A : FS_BRAID_ALPHABET_B)[l];
  });
  const N = [];
  for (let v = 0; v < 16; v++) {
    N.push(B[(v + F * 3) % 16 * 2]);
  }
  for (let a = 0; a < 16; a++) {
    N.push(B[(a + F * 11) % 16 * 2 + 1]);
  }
  if (T[0] & 1) {
    N.splice(8, 16, ...N.slice(8, 24).reverse());
  }
  const w = fsDecoyPositions(n);
  const E = new Uint8Array(3);
  crypto.getRandomValues(E);
  const o = [];
  let A = 0;
  let j = 0;
  for (let l = 0; l < 35; l++) {
    o.push(w.includes(l) ? FS_BRAID_HINT_ALPHABET[E[j++] & 63] : N[A++]);
  }
  return fsTimestampHint(n) + o.join("");
}
async function compatibilityCheck() {
  if (navigator.userAgent.includes("OPR")) {
    if (StorageHandler.get("settings").never_show_again) {
      return "opr_hidden";
    }
    dfmAlert("<h1 style=\"font-family: FrostSans;\">Opera (GX) Detected.</h1><br><p style=\"font-family: FrostSans;\">Opera GX is not supported by FrostSolve. There is a chance that it works in your browser, but if not, switch to Chrome, and try again.</p><br><button id=\"never\">Never show this again</button>");
    document.getElementById("never").addEventListener("click", () => {
      StorageHandler.set("settings", {
        ...StorageHandler.get("settings"),
        never_show_again: true
      });
    });
    return "opr";
  }
}
function fsWaitForAnswerModalClose(C, W) {
  return new Promise(I => {
    const F = {
      rQskD: "animationend",
      Pieax: function (V) {
        return V();
      },
      sZNPM: function (V) {
        return V();
      }
    };
    let T = false;
    const n = () => {
      if (T) {
        return;
      }
      T = true;
      if (W && W.parentNode) {
        W.parentNode.removeChild(W);
      }
      if (C && C.parentNode) {
        C.parentNode.removeChild(C);
      }
      I();
    };
    const u = () => {
      if (C) {
        C.removeEventListener("animationend", u);
      }
      if (W) {
        W.removeEventListener(F.rQskD, u);
      }
      F.Pieax(n);
    };
    if (C) {
      C.addEventListener("animationend", u);
    }
    if (W) {
      W.addEventListener("animationend", u);
    }
    setTimeout(() => {
      if (C) {
        C.removeEventListener("animationend", u);
      }
      if (W) {
        W.removeEventListener("animationend", u);
      }
      F.sZNPM(n);
    }, 450);
  });
}
class QuestionUtils {
  static processAnswer(C, W, Z) {
    const I = {
      hFabL: "embed",
      DcwEd: "FKtZW",
      otOHm: "object",
      zjLSn: function (n, u) {
        return n != u;
      },
      CVMpB: "Missing numeric answer",
      XBIiF: function (n, u) {
        return n === u;
      },
      yuFKb: "Missing numeric bounds",
      uVAti: function (n, u) {
        return n(u);
      },
      bzVLs: function (n, u) {
        return n(u);
      },
      FeNVk: "list",
      eQjWF: "numer",
      PpoYA: "whole",
      vvRqp: function (n, u) {
        return n(u);
      },
      leWCS: "standardform",
      pzaSx: function (n, u) {
        return n(u);
      },
      smjfR: "table",
      eWAss: "coordinate"
    };
    const F = C.question.answer.type;
    const T = Z.untouched?.correctAnswer;
    if (T === undefined || T === null) {
      return false;
    }
    try {
      let n;
      switch (F) {
        case "expression":
          n = typeof T === "string" ? T : T.main;
          if (typeof n !== "string") {
            return false;
          }
          break;
        case "numeric":
          n = T.map(u => {
            const V = {
              YBAVA: "area[href]",
              BOwEI: "button:not([disabled])",
              aAtMW: "iframe",
              YCgLm: I.hFabL
            };
            const s = V;
            if (I.DcwEd === "FKtZW") {
              if (typeof u !== I.otOHm && I.zjLSn(u, null)) {
                return String(u);
              }
              if (u == null) {
                throw new Error(I.CVMpB);
              }
              if (I.zjLSn(u.exact, null) && u.exact !== "") {
                return String(u.exact);
              }
              if (u.from === "" || I.XBIiF(u.to, "") || u.from == null || u.to == null) {
                throw new Error(I.yuFKb);
              }
              const x = I.uVAti(Number, u.from);
              const O = Number(u.to);
              if (!Number.isFinite(x) || !Number.isFinite(O) || x > O) {
                throw new Error("Invalid numeric bounds");
              }
              return I.bzVLs(String, x / 2 + O / 2);
            } else {
              const B = ["a[href]", s.YBAVA, "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", s.BOwEI, s.aAtMW, "object", s.YCgLm, "[contenteditable]", "[tabindex]:not([tabindex=\"-1\"])"];
              const N = I.from(F.querySelectorAll(B.join(",")));
              return N.filter(w => w.offsetParent !== null || w === B.activeElement);
            }
          });
          break;
        case "textual":
        case I.FeNVk:
        case "ratio":
          n = (Array.isArray(T) ? T : [T]).map(String);
          break;
        case "fraction":
          n = {};
          for (const u of [I.eQjWF, "denom", "whole"]) {
            if (u === I.PpoYA && T[u] === undefined) {
              continue;
            }
            if (T[u] === "" || T[u] == null || !Number.isFinite(Number(T[u]))) {
              return false;
            }
            n[u] = I.vvRqp(Number, T[u]);
          }
          if (n.denom === 0) {
            return false;
          }
          break;
        case I.leWCS:
          if (T.main == null || T.power == null) {
            return false;
          }
          n = {
            main: I.pzaSx(String, T.main),
            power: String(T.power)
          };
          break;
        case "ordered":
          n = T.map(Number);
          if (n.some(V => !Number.isInteger(V))) {
            return false;
          }
          break;
        case "vector":
          n = T.map(V => V.map(String));
          break;
        case I.smjfR:
          n = QuestionUtils.reformatAnswer(T);
          break;
        case "desmos":
          n = T.map(V => typeof V === "object" ? {
            x: String(V.x),
            y: String(V.y)
          } : String(V));
          break;
        case "multiplechoice":
          n = Array.isArray(T) ? T.map(Number) : I.uVAti(String, T);
          break;
        case "eqnsolutions":
        case I.eWAss:
          n = T;
          break;
        case "inequality":
          n = T.map(V => ({
            ...V,
            args: V.args.map(String)
          }));
          break;
        default:
          return false;
      }
      W.userAnswer = n;
      Z.answer = QuestionUtils.formatAnswer(F, T);
      return true;
    } catch (V) {
      return false;
    }
  }
  static displayAnswer(C, W, Z = false) {
    $("#doquestion-response").hide();
    const F = document.querySelector(".fs-answer-modal");
    const T = document.querySelector(".fs-answer-overlay");
    if (F) {
      F.remove();
    }
    if (T) {
      T.remove();
    }
    const n = "answer-modal-" + Math.random().toString(36).substr(2, 9);
    let u;
    let V = true;
    if (Z) {
      u = "\n          <div style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; height: 200px; font-family: FrostSans;\">\n            <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 20px;\">\n              <div class=\"animate-spin\" style=\"width: 24px; height: 24px;\">" + variables.loaderSVG.replace("width=\"24\" height=\"24\"", "width=\"24\" height=\"24\"") + "</div>\n              <h2 style=\"color: white; margin: 0; font-size: 18px; font-weight: 600; line-height: 1.3; font-family: FrostSans;\">Solving Question...</h2>\n                </div>\n            <p style=\"color: rgba(255,255,255,0.7); margin: 0; text-align: center;\">Please wait while FrostSolve works its magic</p>\n          </div>\n        ";
    } else {
      try {
        btoa(C.explanation);
        console.log(btoa(C.explanation));
      } catch (O) {
        V = false;
      }
      const x = C.explanation !== "" && V ? "<button id=\"explanation-btn\" onclick=\"window.open('" + API_BASE + "/explain?explanation=" + btoa(C.explanation) + "', '_blank')\" style=\"flex: 1; min-width: 120px; font-family: FrostSans; padding: 12px; border-radius: 10px;\">\n                Explanation\n              </button>" : "";
      u = "\n          <div style=\"font-family: FrostSans; color: white;\">\n            <!-- Header -->\n            <div style=\"text-align: center; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1);\">\n              <div style=\"display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 10px;\">\n                <div style=\"width: 20px; height: 20px; background: linear-gradient(45deg, #10b981, #34d399); border-radius: 50%; display: flex; align-items: center; justify-content: center;\">\n                  <span style=\"color: white; font-size: 12px; font-weight: bold; font-family: FrostSans;\">✓</span>\n                </div>\n                <h2 style=\"color: white; margin: 0; font-size: 20px; font-weight: 600; line-height: 1.3; font-family: FrostSans;\">FrostSolve Answer</h2>\n              </div>\n              <p style=\"color: rgba(255,255,255,0.7); margin: 0; font-size: 14px; font-weight: 400; line-height: 1.4; font-family: FrostSans;\">Question solved successfully!</p>\n            </div>\n  \n            <!-- Answer Content -->\n            <div style=\"margin-bottom: 20px;\">\n              <div style=\"background: rgba(255,255,255,0.05); border-radius: 8px; padding: 16px; margin-bottom: 15px;\">\n                <h3 style=\"color: #34d399; margin: 0 0 10px 0; font-size: 16px; font-weight: 600; line-height: 1.3; font-family: FrostSans;\">Answer:</h3>\n                <p style=\"color: white; margin: 0; font-size: 15px; font-weight: 400; line-height: 1.5; word-break: break-word; white-space: pre-wrap; font-family: FrostSans;\">" + C.answer + "</p>\n              </div>\n            </div>\n  \n            <!-- Action Buttons -->\n            <div style=\"display: flex; gap: 12px; flex-wrap: wrap;\">\n              <button id=\"copy-answer-btn\" style=\"flex: 1; min-width: 120px; font-family: FrostSans; padding: 12px; border-radius: 10px;\">\n                Copy Answer\n              </button>\n              " + (W ? "\n              <button id=\"auto-answer-btn\" style=\"flex: 1; min-width: 120px; font-family: FrostSans; padding: 12px; border-radius: 10px;\">\n                Auto-Answer\n              </button>\n              " : "") + "\n              " + x + "\n            </div>\n          </div>\n        ";
    }
    dfmAnswerModal(u, n, C, W, Z);
  }
  static updateAnswerModal(C, W, Z, I) {
    let T = true;
    try {
      btoa(Z.explanation);
      console.log(btoa(Z.explanation));
    } catch (O) {
      T = false;
    }
    const n = Z.explanation !== "" && T ? "<button id=\"explanation-btn\" onclick=\"window.open('" + API_BASE + "/explain?explanation=" + btoa(Z.explanation) + "', '_blank')\" style=\"flex: 1; min-width: 120px; font-family: FrostSans; padding: 12px; border-radius: 10px;\">\n              Explanation\n            </button>" : "";
    const u = "\n        <div style=\"font-family: FrostSans; color: white;\">\n          <!-- Header -->\n          <div style=\"text-align: center; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1);\">\n            <div style=\"display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 10px;\">\n              <div style=\"width: 20px; height: 20px; background: linear-gradient(45deg, #10b981, #34d399); border-radius: 50%; display: flex; align-items: center; justify-content: center;\">\n                <span style=\"color: white; font-size: 12px; font-weight: bold; font-family: FrostSans;\">✓</span>\n              </div>\n              <h2 style=\"color: white; margin: 0; font-size: 20px; font-weight: 600; line-height: 1.3; font-family: FrostSans;\">FrostSolve Answer</h2>\n            </div>\n            <p style=\"color: rgba(255,255,255,0.7); margin: 0; font-size: 14px; font-weight: 400; line-height: 1.4; font-family: FrostSans;\">Question solved successfully!</p>\n          </div>\n  \n          <!-- Answer Content -->\n          <div style=\"margin-bottom: 20px;\">\n            <div style=\"background: rgba(255,255,255,0.05); border-radius: 8px; padding: 16px; margin-bottom: 15px;\">\n              <h3 style=\"color: #34d399; margin: 0 0 10px 0; font-size: 16px; font-weight: 600; line-height: 1.3; font-family: FrostSans;\">Answer:</h3>\n              <p style=\"color: white; margin: 0; font-size: 15px; font-weight: 400; line-height: 1.5; word-break: break-word; white-space: pre-wrap; font-family: FrostSans;\">" + Z.answer + "</p>\n            </div>\n  \n            <!-- Action Buttons -->\n            <div style=\"display: flex; gap: 12px; flex-wrap: wrap;\">\n              <button id=\"copy-answer-btn\" style=\"flex: 1; min-width: 120px; font-family: FrostSans; padding: 12px; border-radius: 10px;\">\n                Copy Answer\n              </button>\n              " + (I ? "\n              <button id=\"auto-answer-btn\" style=\"flex: 1; min-width: 120px; font-family: FrostSans; padding: 12px; border-radius: 10px;\">\n                Auto-Answer\n              </button>\n              " : "") + "\n              " + n + "\n            </div>\n        </div>\n      ";
    const V = C.querySelector(".fs-modal-content");
    if (V) {
      V.innerHTML = u;
    }
    C.style.minHeight = "auto";
    const s = () => {
      globals.menuOpen = false;
      const R = W;
      const B = C;
      if (B && B.dataset.fsClosing === "1") {
        return Promise.resolve();
      }
      if (B) {
        B.dataset.fsClosing = "1";
        B.classList.add("fs-closing");
        B.style.pointerEvents = "none";
      }
      if (R) {
        R.classList.add("fs-closing");
        R.style.pointerEvents = "none";
      }
      return fsWaitForAnswerModalClose(B, R);
    };
    setTimeout(() => {
      const B = document.getElementById("copy-answer-btn");
      if (B) {
        B.addEventListener("click", () => {
          B.textContent = "Copied!";
          navigator.clipboard.writeText(Z.answer);
          setTimeout(() => {
            B.textContent = "Copy Answer";
          }, 1500);
        });
      }
      const N = document.getElementById("auto-answer-btn");
      if (N && I) {
        N.addEventListener("click", async () => {
          try {
            Z.aa.qnum = parseInt(Z.aa.qnum);
            const E = await _originalFetch.call(window, "/api/tasks/submitanswer", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(Z.aa)
            });
            const o = await E.json();
            console.log(o.iscorrect);
            if (o.iscorrect) {
              const j = await fetch("/api/tasks/question/get", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  aaid: Z.aa.aaid,
                  qnum: parseInt(Z.aa.qnum) + 1
                })
              });
              if (j.ok) {
                QuestionUtils.customSetQNum(parseInt(Z.aa.qnum));
              } else {
                dfmAlert("Unable to fetch the next question. Please try again later.");
              }
            } else if (E.status === 400) {
              dfmAlert("FrostSolve was unable to answer the question. This type of question is either unsupported, or another error has occurred.");
            } else if (o.iscorrect === false) {
              dfmAlert("FrostSolve was unable to answer the question. The answer was incorrect.");
            } else {
              dfmAlert("An unknown error occurred with answering. Maybe try again later.");
            }
          } catch (v) {
            dfmAlert("An error occurred during the request. Please try again later.");
            console.error("Error:", v);
          }
          await s();
        });
      }
      const w = document.getElementById("explanation-btn");
      if (w) {
        w.addEventListener("click", () => {
          const o = API_BASE + "/explain?explanation=" + btoa(Z.explanation);
          window.open(o, "_blank").focus();
        });
      }
    }, 100);
  }
  static async loadAllQs() {
    const I = {
      aVKKH: function (s, O) {
        return s + O;
      },
      EDDAx: function (s, O) {
        return s !== O;
      },
      SDMdS: "application/json"
    };
    const F = I;
    let T = $(document).data("taskState");
    let n = T.numquestions;
    let u = 0;
    const V = 20;
    for (let s = 1; s <= n; s += V) {
      const x = Math.min(s + V - 1, n);
      const O = [];
      for (let R = s; R <= x; R++) {
        if (F.EDDAx("irfbM", "bxAVN")) {
          const B = {
            "Content-Type": F.SDMdS
          };
          const N = {
            aaid: T.attempt ? T.attempt.aaid : undefined,
            qnum: R
          };
          O.push(fetch("/api/tasks/question/get", {
            method: "POST",
            headers: B,
            body: JSON.stringify(N)
          }).then(async w => {
            if (!w.ok) {
              throw new Error("Failed to load Q" + R);
            }
            const E = await w.json();
            u++;
            console.log(F.aVKKH("Loaded Q", R));
            return E;
          }).catch(w => {
            console.error(w);
          }));
        } else {
          Z = I;
        }
      }
      await Promise.all(O);
    }
    return true;
  }
  static getAnsweredQuestions(C) {
    const W = [];
    const Z = C.numquestions;
    for (let I = 1; I <= Z; I++) {
      const F = C.attempt.answers[I.toString()];
      if (F && F.theiranswer !== null) {
        W.push(I);
      }
    }
    return W;
  }
  static stringifyNumbers(C) {
    return C.map(W => {
      return {
        x: W.x.toString(),
        y: W.y.toString()
      };
    });
  }
  static formatAnswer(W, Z) {
    const F = V => typeof V === "string" ? V : JSON.stringify(V);
    const T = V => Array.isArray(V) ? V : [V];
    const n = {
      "<=": "≤",
      ">=": "≥",
      "!=": "≠"
    };
    const u = V => n[V] || V;
    try {
      switch (W) {
        case "numeric":
          return T(Z).map(V => typeof V !== "object" ? F(V) : V.exact !== undefined && V.exact !== "" ? F(V.exact) : "Anything between " + V.from + " and " + V.to).join(", ");
        case "expression":
          return F(Z.main ?? Z);
        case "eqnsolutions":
          return T(Z).flat().map(V => (V.var || "x") + " " + u(V.operator) + " " + V.answer).join(", ");
        case "textual":
        case "list":
          return T(Z).map(F).join(", ");
        case "ratio":
          return T(Z).map(F).join(" : ");
        case "ordered":
          return T(Z).map(F).join(" → ");
        case "fraction":
          return "" + (Z.whole != null && Number(Z.whole) !== 0 ? Z.whole + " " : "") + Z.numer + "/" + Z.denom;
        case "standardform":
          return Z.main + " × 10^" + Z.power;
        case "vector":
        case "table":
          return Z.map(V => "[" + T(V).map(F).join(", ") + "]").join("\n");
        case "multiplechoice":
          return "Option" + (Array.isArray(Z) && Z.length > 1 ? "s" : "") + " " + T(Z).map(F).join(", ");
        case "coordinate":
        case "desmos":
          return T(Z).map(V => typeof V === "object" ? "(" + V.x + ", " + V.y + ")" : F(V)).join(", ");
        case "inequality":
          return T(Z).map(V => V.args.length > 1 ? V.args[0] + " " + u(V.op) + " " + (V.var || "x") + " " + u(V.op) + " " + V.args[1] : (V.var || "x") + " " + u(V.op) + " " + V.args[0]).join(", ");
        default:
          return F(Z);
      }
    } catch (V) {
      return F(Z);
    }
  }
  static reformatAnswer(C) {
    return C.map(W => {
      if (typeof W[1] === "string") {
        return [W[0], W[1].split(",")];
      } else {
        return [W[0], W[1]];
      }
    });
  }
  static customSetQNum(Z) {
    let F = 0;
    let T = [];
    let n = document.getElementById("doquestion-q" + (F + 1));
    while (n) {
      F++;
      if (n.classList.contains("correct")) {
        T.push(true);
      } else if (n.classList.contains("incorrect")) {
        T.push(false);
      } else {
        T.push(null);
      }
      n = document.getElementById("doquestion-q" + (F + 1));
    }
    console.log("Total questions: " + F);
    console.log(T);
    n = document.getElementById("doquestion-q" + (parseInt(Z) + 1));
    if (n) {
      const u = {
        bubbles: true,
        cancelable: false,
        view: window
      };
      n.dispatchEvent(new MouseEvent("click", u));
    } else {
      n = document.getElementById("doquestion-q" + (parseInt(Z) - 1));
      if (n) {
        const V = {
          bubbles: true,
          cancelable: false,
          view: window
        };
        n.dispatchEvent(new MouseEvent("click", V));
      } else {
        alert("No questions found.");
      }
    }
  }
  static async submitAnswer(W) {
    W.qnum = parseInt(W.qnum);
    try {
      const F = await _originalFetch.call(window, "/api/tasks/submitanswer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(W)
      });
      if (!F.ok) {
        return null;
      }
      const T = await F.json();
      return T;
    } catch (n) {
      console.error("Error submitting answer:", n);
      throw n;
    }
  }
  static stringifyArgs(W) {
    if (Array.isArray(W)) {
      W.forEach(F => {
        if (Array.isArray(F.args)) {
          F.args = F.args.map(u => {
            if (Number.isInteger(u)) {
              return u.toString();
            } else {
              return u;
            }
          });
        }
      });
    }
    return W;
  }
  static isOnQuestionPage() {
    const Z = {
      qLuWd: "script",
      oXUiH: "IpeTI"
    };
    for (let I of document.getElementsByTagName(Z.qLuWd)) {
      if (I.src.includes(variables.questionScript)) {
        if (Z.oXUiH !== "tqQTH") {
          return true;
        } else {
          Z.documentElement.classList.add("fs-modal-open");
          I.body.style.overflow = "hidden";
        }
      }
    }
    return false;
  }
  static lastSolveFailure = null;
  static solveFailureMessage() {
    const F = this.lastSolveFailure;
    const n = {
      INVALID_REQUEST: "The question request was incomplete. Refresh the page and try again.",
      TOKEN_INVALID: "The request could not be verified. Check your device clock, then refresh the page.",
      SESSION_INVALID: "Your Dr Frost session has expired. Sign in again, then refresh the page.",
      ACCESS_REQUIRED: "This Dr Frost account does not have active FrostSolve access.",
      QUESTION_UNAVAILABLE: "This question's answer is unavailable. Check that the task is still open, then try again.",
      UPSTREAM_UNAVAILABLE: "Dr Frost is unavailable right now. Try again shortly.",
      UPSTREAM_INVALID_RESPONSE: "Dr Frost returned an unexpected response. Try again shortly.",
      NETWORK_ERROR: "The request could not reach FrostSolve. Check your connection and try again.",
      INVALID_RESPONSE: "FrostSolve returned an unexpected response. Try again shortly."
    };
    const u = n[F?.code] || "Could not get an answer. Try again shortly.";
    const V = /^[a-f0-9]{24}$/.test(F?.requestId || "") ? "<br><small>Request ID: " + F.requestId + "</small>" : "";
    return "" + u + V;
  }
  static async solveQuestion(I, F, T) {
    const u = window.location.pathname;
    const V = JSON.stringify({
      data: e("AAID=" + I + "&QNUM=" + F + "&SESSID=" + T.user.session + "&PATH=" + encodeURIComponent(u) + "&TOKEN=" + generateToken(u))
    });
    try {
      const x = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: V
      };
      const O = await fetch(API_BASE + "/api/solve", x);
      if (!O.ok) {
        const B = await O.json().catch(() => ({}));
        this.lastSolveFailure = {
          code: B.code || O.headers.get("x-error-code") || "HTTP_" + O.status,
          requestId: B.request_id || O.headers.get("x-request-id"),
          status: O.status
        };
        return null;
      }
      const R = await O.json();
      this.lastSolveFailure = null;
      if (R?.answer) {
        trackFunnelEvent("first_answer", T.user.email);
      }
      return R;
    } catch (N) {
      const w = {
        code: N.message === "Invalid JSON response" ? "INVALID_RESPONSE" : "NETWORK_ERROR",
        requestId: null
      };
      this.lastSolveFailure = w;
      return null;
    }
  }
  static async fullAutoAnswer(C, W, Z = "refresh") {
    const I = {
      MYrfB: function (T, n) {
        return T / n;
      },
      nrEhG: function (T, n) {
        return T !== n;
      },
      wTKUH: "Could not get an answer. Try again shortly.",
      AZQpj: "soeee",
      OPxbL: function (T, n) {
        return T(n);
      },
      LHIaf: function (T, n) {
        return T === n;
      },
      ZugLb: "refresh",
      NKUrb: function (T, n) {
        return T <= n;
      },
      zUxtA: function (T, n) {
        return T + n;
      },
      lItZF: function (T, n) {
        return T * n;
      },
      KzpJP: function (T, n) {
        return T(n);
      },
      TDVzR: function (T, n) {
        return T + n;
      },
      uLwHl: ". proceeding.",
      GjgYw: function (T, n) {
        return T(n);
      }
    };
    StorageHandler.migrateSettings();
    if (I.LHIaf(QuestionUtils.isOnQuestionPage(), false)) {
      I.OPxbL(alert, "You are not on a question page.");
      return;
    }
    const F = new URLSearchParams(window.location.search);
    if (Z === "button") {
      await this.loadAllQs();
      F.set("faa", "1");
      const T = window.location.pathname + "?" + F.toString();
      window.history.replaceState({}, document.title, T);
      location.reload();
    } else if (Z === I.ZugLb) {
      if (!F.has("faa")) {
        return;
      }
      F.delete("faa");
      const n = F.toString() ? "?" + F.toString() : window.location.pathname;
      window.history.replaceState({}, document.title, n);
      const u = StorageHandler.get("settings");
      const V = W.numquestions;
      let s = 0;
      let x = 0;
      const O = this.getAnsweredQuestions(W);
      let R = 1;
      for (let B = 1; I.NKUrb(B, V); B++) {
        if (!O.includes(B)) {
          R = B;
          break;
        }
      }
      MenusHandler.createAutoAnswerMenu();
      setTimeout(() => {
        document.getElementById("autoAnswering").scrollIntoView({
          behavior: "smooth"
        });
      }, 50);
      document.addEventListener("keydown", N => {
        if (N.key === "h") {
          if (document.getElementById("autoAnswering").style.display === "none") {
            document.getElementById("autoAnswering").style.display = "block";
          } else {
            document.getElementById("autoAnswering").style.display = "none";
          }
        }
      });
      for (let N = R; N <= V; N++) {
        if (O.includes(N)) {
          console.log("Skipping already answered question " + N + ".");
          continue;
        }
        let w;
        if (u.use_interval && u.time_per_q_min !== undefined && u.time_per_q_max !== undefined) {
          const L = u.time_per_q_min * 60 * 1000;
          const Y = u.time_per_q_max * 60 * 1000;
          if (L === Y) {
            w = L;
          } else {
            w = I.zUxtA(L, Math.random() * (Y - L));
          }
        } else {
          w = I.lItZF((u.time_per_q || 3) * 60, 1000);
        }
        let E = Math.floor(w / 1000);
        let o = 0;
        const A = ["", ".", "..", "..."];
        headerElement.innerHTML = "[FrostSolve] Auto Answering...<br>";
        headerElement.style.fontSize = "20px";
        const j = c => {
          const H = Math.floor(I.MYrfB(c, 60));
          const P = c % 60;
          if (H > 0) {
            return H + " min" + (I.nrEhG(H, 1) ? "s" : "") + " " + P + " sec" + (P !== 1 ? "s" : "");
          } else {
            return P + " sec" + (P !== 1 ? "s" : "");
          }
        };
        timerElement.innerHTML = "Time till next question: " + j(E);
        answerElement.innerHTML = "Answering question " + N + A[o] + "<br>Answer: Fetching...";
        totalElement.innerHTML = "Total Answered: " + s + " | Total Correct: " + x + "<br><br><p style=\"font-size: 12px;\">Press <b>H</b> to toggle the visibility of this menu.</p><br><br><p style=\"font-size: 12px;\">DO NOT GO TO NEW QUESTIONS, ETC. WE ARE SOLVING REMOTELY.</p>";
        const v = setInterval(() => {
          const c = {
            yhgHJ: "This question's answer is unavailable. Check that the task is still open, then try again.",
            QRNZy: "The request could not reach FrostSolve. Check your connection and try again.",
            nFSbs: "FrostSolve returned an unexpected response. Try again shortly.",
            hBDqt: I.wTKUH
          };
          const H = c;
          E--;
          o = (o + 1) % A.length;
          if (E <= 0) {
            clearInterval(v);
          } else if (I.AZQpj !== "soeee") {
            const X = this.lastSolveFailure;
            const D = {
              INVALID_REQUEST: "The question request was incomplete. Refresh the page and try again.",
              TOKEN_INVALID: "The request could not be verified. Check your device clock, then refresh the page.",
              SESSION_INVALID: "Your Dr Frost session has expired. Sign in again, then refresh the page.",
              ACCESS_REQUIRED: "This Dr Frost account does not have active FrostSolve access.",
              QUESTION_UNAVAILABLE: H.yhgHJ,
              UPSTREAM_UNAVAILABLE: "Dr Frost is unavailable right now. Try again shortly.",
              UPSTREAM_INVALID_RESPONSE: "Dr Frost returned an unexpected response. Try again shortly.",
              NETWORK_ERROR: H.QRNZy,
              INVALID_RESPONSE: H.nFSbs
            };
            const U = D;
            const k = U[X?.code] || H.hBDqt;
            const K = /^[a-f0-9]{24}$/.test(X?.requestId || "") ? "<br><small>Request ID: " + X.requestId + "</small>" : "";
            return "" + k + K;
          } else {
            timerElement.innerHTML = "Time till next question: " + I.OPxbL(j, E);
          }
        }, 1000);
        console.log("Delaying for " + w + "ms");
        const a = await this.solveQuestion(W.attempt.aaid, N, C);
        if (a === null) {
          console.log(I.zUxtA("Couldn't answer question " + N, ", skipping."));
          continue;
        }
        let l = a.aa;
        if (!QuestionUtils.processAnswer(W, l, a)) {
          I.KzpJP(clearInterval, v);
          console.log(I.TDVzR("Unsupported or invalid answer for question ", N) + ", skipping.");
          continue;
        }
        answerElement.innerHTML = "Answering question " + N + A[o] + "<br>Answer: " + a.answer;
        await new Promise(c => setTimeout(c, w));
        try {
          const c = await this.submitAnswer(l);
          console.log(c);
          s++;
          if (c.iscorrect) {
            x++;
          }
          totalElement.innerHTML = "Total Answered: " + s + " | Total Correct: " + x;
        } catch (H) {
          console.error("Error submitting answer:", H, I.uLwHl);
          continue;
        }
      }
      this.customSetQNum(0);
      I.GjgYw(dfmAlert, "<h1 style=\"color: white; font-family: 'FrostSans'\">Auto Answering completed.</h1><br><br><p style=\"color: white; font-family: 'FrostSans'\">We managed to answer <b>" + x + "</b> questions correctly.<br>If we missed any, try to answer them manually.<br></p>");
      recolorModal();
    }
  }
}
async function dfmAnswerModal(C, W, Z, I, F) {
  const T = {
    eFcNH: "none",
    vFzxB: "fs-closing",
    rGMVO: function (o, A) {
      return o === A;
    },
    kxMKG: "PyyeO",
    bqEtU: function (o, A) {
      return o(A);
    },
    UfQfy: "htmOb",
    MJqzK: "Q291bGQgbm90IGVuY29kZSB1c2Vy",
    VKuaD: "Escape",
    rADEN: function (o, A, j) {
      return o(A, j);
    },
    AdBYw: function (o, A) {
      return o + A;
    },
    IESOF: "Unable to fetch the next question. Please try again later.",
    TckEg: function (o, A) {
      return o(A);
    },
    lgRaF: function (o, A) {
      return o(A);
    },
    Vxpag: "Error:",
    YMocp: function (o) {
      return o();
    },
    QDLaK: "ZAlHK",
    UKZoe: function (o, A) {
      return o !== A;
    },
    zvwVh: "clGKi",
    CaWoh: "fs-modal-dialog fs-answer-modal",
    blUhq: "-title",
    okiKh: "auto",
    zffux: "20px",
    KuHSR: "fs-modal-close close-modal",
    MCnIM: "Close",
    OyOJy: "keydown",
    ekbKL: function (o, A) {
      return o > A;
    }
  };
  ensureFsModalStyles();
  const n = document.createElement("div");
  n.className = "fs-modal-overlay fs-answer-overlay";
  n.dataset.modalId = W;
  n.style.pointerEvents = T.eFcNH;
  const u = document.createElement("div");
  u.className = T.CaWoh;
  u.id = W;
  u.setAttribute("role", "dialog");
  u.setAttribute("aria-modal", "false");
  u.setAttribute("aria-labelledby", W + T.blUhq);
  u.tabIndex = -1;
  u.style.minWidth = "450px";
  u.style.maxWidth = "550px";
  u.style.minHeight = F ? "250px" : T.okiKh;
  u.style.maxHeight = "80vh";
  u.style.position = "fixed";
  u.style.top = "auto";
  u.style.bottom = "20px";
  u.style.right = T.zffux;
  u.style.left = "auto";
  u.style.margin = "0";
  u.style.zIndex = "2147483002";
  const V = document.createElement("button");
  V.className = T.KuHSR;
  V.setAttribute("aria-label", T.MCnIM);
  V.innerHTML = "✕";
  const s = document.createElement("div");
  s.className = "fs-modal-content";
  s.innerHTML = C;
  u.appendChild(V);
  u.appendChild(s);
  const x = [];
  let O;
  const R = async () => {
    if (u.dataset.fsClosing === "1") {
      return;
    }
    try {
      const v = modalNames.lastIndexOf(W);
      if (v !== -1) {
        modalNames.splice(v, 1);
      }
      if (O) {
        clearTimeout(O);
      }
      u.dataset.fsClosing = "1";
      u.style.animation = "";
      u.style.pointerEvents = "none";
      n.style.animation = "";
      n.style.pointerEvents = T.eFcNH;
      n.classList.add(T.vFzxB);
      u.classList.add("fs-closing");
      await fsWaitForAnswerModalClose(u, n);
      x.forEach(a => {
        try {
          a();
        } catch (Y) {}
      });
    } finally {
      if (T.rGMVO(T.kxMKG, "OLwmR")) {
        Z.style.minHeight = I.styles.minHeight;
      } else {
        globals.menuOpen = false;
      }
    }
  };
  const B = async o => {
    if (T.UfQfy === "htmOb") {
      if (o.target === n) {
        await R();
      }
    } else {
      if (T.get("settings").never_show_again) {
        return "opr_hidden";
      }
      T.bqEtU(n, "<h1 style=\"font-family: FrostSans;\">Opera (GX) Detected.</h1><br><p style=\"font-family: FrostSans;\">Opera GX is not supported by FrostSolve. There is a chance that it works in your browser, but if not, switch to Chrome, and try again.</p><br><button id=\"never\">Never show this again</button>");
      u.getElementById("never").addEventListener("click", () => {
        x.set("settings", {
          ...O.get("settings"),
          never_show_again: true
        });
      });
      return "opr";
    }
  };
  n.addEventListener("click", B);
  x.push(() => n.removeEventListener("click", B));
  const N = async () => await R();
  V.addEventListener("click", N);
  x.push(() => V.removeEventListener("click", N));
  const w = async o => {
    if (T.rGMVO(o.key, T.VKuaD) || o.keyCode === 27) {
      await R();
    }
  };
  document.addEventListener(T.OyOJy, w);
  x.push(() => document.removeEventListener("keydown", w));
  O = T.rADEN(setTimeout, () => {
    const j = document.getElementById("copy-answer-btn");
    if (j) {
      j.addEventListener("click", () => {
        j.textContent = "Copied!";
        j.style.background = "linear-gradient(45deg, #10b981, #059669)";
        navigator.clipboard.writeText(Z.answer);
        setTimeout(() => {
          j.textContent = "Copy Answer";
          j.style.background = "linear-gradient(45deg, #3b82f6, #1d4ed8)";
        }, 1500);
      });
    }
    const v = document.getElementById("auto-answer-btn");
    if (v && I && !F) {
      if (T.QDLaK !== "kkfQz") {
        v.addEventListener("click", async () => {
          try {
            Z.aa.qnum = parseInt(Z.aa.qnum);
            const L = await _originalFetch.call(window, "/api/tasks/submitanswer", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(Z.aa)
            });
            const Y = await L.json();
            console.log(Y.iscorrect);
            if (Y.iscorrect) {
              const c = await T.rADEN(fetch, "/api/tasks/question/get", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  aaid: Z.aa.aaid,
                  qnum: T.AdBYw(parseInt(Z.aa.qnum), 1)
                })
              });
              if (c.ok) {
                QuestionUtils.customSetQNum(parseInt(Z.aa.qnum));
              } else {
                dfmAlert(T.IESOF);
              }
            } else if (L.status === 400) {
              T.TckEg(dfmAlert, "FrostSolve was unable to answer the question. This type of question is either unsupported, or another error has occurred.");
            } else if (Y.iscorrect === false) {
              dfmAlert("FrostSolve was unable to answer the question. The answer was incorrect.");
            } else {
              T.lgRaF(dfmAlert, "An unknown error occurred with answering. Maybe try again later.");
            }
          } catch (P) {
            dfmAlert("An error occurred during the request. Please try again later.");
            console.error(T.Vxpag, P);
          }
          await T.YMocp(R);
        });
      } else {
        return null;
      }
    }
    const a = document.getElementById("explanation-btn");
    if (a) {
      if (T.UKZoe(T.zvwVh, "clGKi")) {
        return true;
      } else {
        a.addEventListener("click", () => {
          const Y = API_BASE + "/explain?explanation=" + T.bqEtU(btoa, Z.explanation);
          window.open(Y, "_blank").focus();
        });
      }
    }
  }, 100);
  document.body.appendChild(n);
  document.body.appendChild(u);
  n.style.pointerEvents = "none";
  const E = fsGetFocusable(u);
  if (T.ekbKL(E.length, 0)) {
    E[0].focus();
  } else {
    u.focus();
  }
  globals.menuOpen = true;
  return W;
}
class AuthHandler {
  static async authenticate() {
    let T = await AuthHandler.getUser();
    if (T == null) {
      return {
        status: "logged_out"
      };
    } else {
      let V = await AuthHandler.checkFrostSolveAccess(T);
      if (V === null) {
        return {
          status: "error"
        };
      } else if (V === false) {
        const x = await AuthHandler.checkFrostSolveAccess(T, true);
        return {
          status: "no_access",
          user: {
            ...T,
            session: document.getElementById("SESSION-HERE").value
          },
          had_trial: x ? x.had_trial ?? true : true
        };
      } else {
        V.readableExpiration = readableExpiration(V.expiration);
        let O = {
          user: {
            ...T,
            session: document.getElementById("SESSION-HERE").value
          },
          access: V
        };
        ToastHandler.show({
          title: "FrostSolve Loaded",
          content: "FrostSolve finished loading. You may now answer questions.",
          type: "success",
          duration: 1800
        });
        const B = {
          status: "success",
          state: O
        };
        return B;
      }
    }
  }
  static async getUser() {
    try {
      const F = await fetch("/api/user/current/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const T = await F.json();
      if (T == null) {
        return null;
      } else {
        return T.user;
      }
    } catch (n) {
      dfmAlert("An error occurred trying to determine the logged in user (FS): " + n.message);
    }
  }
  static async checkFrostSolveAccess(Z, I = false) {
    try {
      const u = await fetch(API_BASE + "/dfm/authorize?email=" + Z.email, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!u.ok) {
        return null;
      }
      const V = await u.json();
      if (V.status !== "success") {
        if (I) {
          return V;
        } else {
          return false;
        }
      } else {
        return V;
      }
    } catch (x) {
      dfmAlert("An error occurred trying to determine FrostSolve access: " + x.message);
    }
  }
}
class StorageHandler {
  static set(C, W) {
    localStorage.setItem(C, JSON.stringify(W));
  }
  static get(C) {
    return JSON.parse(localStorage.getItem(C));
  }
  static remove(C) {
    localStorage.removeItem(C);
  }
  static clear() {
    localStorage.clear();
  }
  static initialize() {
    StorageHandler.set("keybind", {
      menu: "[",
      answer: "]"
    });
    StorageHandler.set("settings", {
      time_per_q: 3,
      use_interval: false,
      time_per_q_min: 3,
      time_per_q_max: 3,
      first_run: true,
      darkMode: false
    });
  }
  static shouldInitialize() {
    return StorageHandler.get("settings") === null;
  }
  static migrateSettings() {
    const Z = {
      kcfZl: function (V, s) {
        return V !== s;
      },
      mZlPw: "MGKFd",
      nyaiv: "cjTmL"
    };
    const I = Z;
    const F = StorageHandler.get("settings");
    if (!F) {
      return;
    }
    let T = false;
    const n = {
      ...F
    };
    let u = n;
    if (I.kcfZl(F.time_per_q, undefined) && F.use_interval === undefined) {
      if (I.mZlPw === I.nyaiv) {
        if (F.isInteger(T)) {
          return V.toString();
        } else {
          return s;
        }
      } else {
        const s = F.time_per_q;
        u.use_interval = false;
        u.time_per_q_min = s;
        u.time_per_q_max = s;
        T = true;
      }
    }
    if (F.darkMode === undefined) {
      u.darkMode = false;
      T = true;
    }
    if (u.darkMode !== false) {
      u.darkMode = false;
      T = true;
    }
    if (T) {
      StorageHandler.set("settings", u);
    }
  }
}
const DarkModeUtils = {
  CACHE_KEY: "fs_darkmode_css",
  CACHE_TS_KEY: "fs_darkmode_css_ts",
  CACHE_TTL_MS: 86400000,
  STYLE_ID: "fs-dark-mode-styles",
  async fetchCSS() {
    const W = localStorage.getItem(this.CACHE_TS_KEY);
    const Z = Date.now();
    if (W && Z - parseInt(W, 10) < this.CACHE_TTL_MS) {
      const I = localStorage.getItem(this.CACHE_KEY);
      if (I) {
        return I;
      }
    }
    try {
      const F = await fetch(API_BASE + "/api/ext/dark.css");
      if (!F.ok) {
        return "";
      }
      const T = await F.text();
      localStorage.setItem(this.CACHE_KEY, T);
      localStorage.setItem(this.CACHE_TS_KEY, String(Z));
      return T;
    } catch (u) {
      console.error("Failed to fetch dark mode CSS:", u);
      return "";
    }
  },
  getStyleEl() {
    return document.getElementById(this.STYLE_ID);
  },
  async apply(W) {
    if (W) {
      let F = localStorage.getItem(this.CACHE_KEY);
      const T = localStorage.getItem(this.CACHE_TS_KEY);
      const n = Date.now();
      const u = !T || n - parseInt(T, 10) >= this.CACHE_TTL_MS;
      if (!F || u) {
        F = await this.fetchCSS();
      }
      document.documentElement.classList.add("fs-dark-mode");
      let V = this.getStyleEl();
      if (!V) {
        V = document.createElement("style");
        V.id = this.STYLE_ID;
        document.head.appendChild(V);
      }
      V.textContent = F || "";
    } else {
      document.documentElement.classList.remove("fs-dark-mode");
      const s = this.getStyleEl();
      if (s) {
        s.remove();
      }
    }
  },
  applyFromSettings() {
    this.apply(false);
  }
};
class MenusHandler {
  static openMenu(C, W = "success") {
    if (globals.menuOpen) {
      return;
    }
    StorageHandler.migrateSettings();
    let I;
    const F = W === "no_access";
    if (F) {
      I = "\n                <div style=\"display: flex; flex-direction: column; height: 100%; font-family: FrostSans;\">\n                  <!-- Header Section -->\n                  <div style=\"text-align: center; margin-bottom: 20px;\">\n                    <h1 style=\"color: white; font-family: 'FrostSans'; font-size: 31px; font-weight: bold; margin: 0 0 10px 0; line-height: 1.2;\">Welcome to FrostSolve, " + C.user.firstname + "</h1>\n                    <p style=\"color: rgba(255,255,255,0.6); font-family: 'FrostSans'; font-size: 15px; margin: 0 0 15px 0; line-height: 1.4;\">You need an active FrostSolve purchase to use these features.</p>\n                  </div>\n  \n                  <!-- Prominent Purchase Section -->\n                  <div style=\"background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05)); border-radius: 10px; padding: 25px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.15);\">\n                    <h3 style=\"color: white; margin: 0 0 15px 0; font-size: 18px; font-weight: 600; text-align: center; line-height: 1.3; font-family: FrostSans;\">Choose Your Plan</h3>\n                    <div style=\"display: flex; gap: 15px; margin-bottom: 15px;\">\n                      <button id=\"buyYearButton\" style=\"flex: 1; font-family: FrostSans; padding: 16px; border-radius: 8px; font-size: 16px; font-weight: bold; background: linear-gradient(45deg, #ff6b6b, #ee5a24); border: none; color: white; cursor: pointer; transition: transform 160ms cubic-bezier(.23, 1, .32, 1), box-shadow 160ms ease; box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);\">Buy Year</button>\n                      <button id=\"buyLifetimeButton\" style=\"flex: 1; font-family: FrostSans; padding: 16px; border-radius: 8px; font-size: 16px; font-weight: bold; background: linear-gradient(45deg, #26d0ce, #1dd1a1); border: none; color: white; cursor: pointer; transition: transform 160ms cubic-bezier(.23, 1, .32, 1), box-shadow 160ms ease; box-shadow: 0 4px 15px rgba(38, 208, 206, 0.3);\">Buy Lifetime</button>\n                    </div>\n                    <p style=\"color: rgba(255,255,255,0.7); font-size: 13px; font-weight: 400; text-align: center; margin: 0; line-height: 1.4; font-family: FrostSans;\">Unlock all FrostSolve features with unlimited access</p>\n                    <button id=\"startTrialButton\" style=\"width: 100%; margin-top: 12px; font-family: FrostSans; padding: 12px; border-radius: 6px; font-size: 14px; font-weight: bold;\" " + (C.had_trial ? "disabled style='opacity: 0.6; cursor: not-allowed;'" : "") + ">" + (C.had_trial ? "Free trial already used" : "Start 48-hour free trial") + "</button>\n                  </div>\n  \n                  <!-- Other Options -->\n                  <div style=\"display: flex; flex: 1; gap: 20px; margin-bottom: 20px;\">\n                    <!-- Left Column -->\n                    <div style=\"flex: 1; display: flex; flex-direction: column; gap: 15px;\">\n                      <!-- Keybind Settings -->\n                      <div style=\"background: rgba(255,255,255,0.05); border-radius: 10px; padding: 15px;\">\n                        <h3 style=\"color: white; margin: 0 0 15px 0; font-size: 16px; font-weight: 600; line-height: 1.3; font-family: FrostSans;\">Keybinds</h3>\n                        <div style=\"display: flex; gap: 15px;\">\n                          <div style=\"flex: 1; text-align: left;\">\n                            <label style=\"color: rgba(255,255,255,0.7); font-size: 13px; font-weight: 500; display: block; margin-bottom: 5px; font-family: FrostSans;\">Menu</label>\n                            <button id=\"keybindButtonMenu\" style=\"width: 100%; font-family: FrostSans; opacity: 0.6; cursor: not-allowed; padding: 8px; border-radius: 6px;\" disabled>" + (StorageHandler.get("keybind").menu || "Not Set") + "</button>\n                          </div>\n                          <div style=\"flex: 1; text-align: left;\">\n                            <label style=\"color: rgba(255,255,255,0.7); font-size: 13px; font-weight: 500; display: block; margin-bottom: 5px; font-family: FrostSans;\">Answer</label>\n                            <button id=\"keybindButtonAns\" style=\"width: 100%; font-family: FrostSans; opacity: 0.6; cursor: not-allowed; padding: 8px; border-radius: 6px;\" disabled>" + (StorageHandler.get("keybind").answer || "Not Set") + "</button>\n                          </div>\n                        </div>\n                      </div>\n  \n                      <!-- Settings -->\n                      <div style=\"background: rgba(255,255,255,0.05); border-radius: 10px; padding: 15px;\">\n                        <h3 style=\"color: white; margin: 0 0 10px 0; font-size: 16px; font-weight: 600; line-height: 1.3; font-family: FrostSans;\">Auto-Answer Settings</h3>\n                        <div style=\"display: flex; align-items: center; gap: 10px; margin-bottom: 10px;\">\n                          <label style=\"color: white; font-size: 14px; font-weight: 500; white-space: nowrap; font-family: FrostSans;\">Use Interval:</label>\n                          <input type=\"checkbox\" id=\"useInterval1\" " + (StorageHandler.get("settings").use_interval ? "checked" : "") + " style=\"opacity: 0.6; cursor: not-allowed;\" disabled>\n                        </div>\n                        <div id=\"singleTime1\" style=\"display: " + (StorageHandler.get("settings").use_interval ? "none" : "flex") + "; align-items: center; gap: 15px;\">\n                          <label style=\"color: white; font-size: 14px; font-weight: 500; white-space: nowrap; font-family: FrostSans;\">Time per Q:</label>\n                          <input type=\"range\" step=\"0.5\" min=\"0.5\" max=\"10\" value=" + StorageHandler.get("settings").time_per_q + " id=\"tpqamount1\" style=\"flex: 1; color: red; opacity: 0.6; cursor: not-allowed;\" disabled>\n                          <span id=\"tpqamountdisplay1\" style=\"color: white; font-size: 14px; font-weight: 500; min-width: 25px; text-align: center; font-family: FrostSans;\">\n                          " + StorageHandler.get("settings").time_per_q + "\n                          </span>\n                        </div>\n                        <div id=\"intervalTime1\" style=\"display: " + (StorageHandler.get("settings").use_interval ? "flex" : "none") + "; flex-direction: column; gap: 10px;\">\n                          <div style=\"display: flex; align-items: center; gap: 15px;\">\n                            <label style=\"color: white; font-size: 14px; font-weight: 500; white-space: nowrap; font-family: FrostSans;\">Min:</label>\n                            <input type=\"range\" step=\"0.5\" min=\"0.5\" max=\"20\" value=" + StorageHandler.get("settings").time_per_q_min + " id=\"tpqmin1\" style=\"flex: 1; color: red; opacity: 0.6; cursor: not-allowed;\" disabled>\n                            <span id=\"tpqmindisplay1\" style=\"color: white; font-size: 14px; font-weight: 500; min-width: 25px; text-align: center; font-family: FrostSans;\">\n                            " + StorageHandler.get("settings").time_per_q_min + "\n                            </span>\n                          </div>\n                          <div style=\"display: flex; align-items: center; gap: 15px;\">\n                            <label style=\"color: white; font-size: 14px; font-weight: 500; white-space: nowrap; font-family: FrostSans;\">Max:</label>\n                            <input type=\"range\" step=\"0.5\" min=\"0.5\" max=\"20\" value=" + StorageHandler.get("settings").time_per_q_max + " id=\"tpqmax1\" style=\"flex: 1; color: red; opacity: 0.6; cursor: not-allowed;\" disabled>\n                            <span id=\"tpqmaxdisplay1\" style=\"color: white; font-size: 14px; font-weight: 500; min-width: 25px; text-align: center; font-family: FrostSans;\">\n                            " + StorageHandler.get("settings").time_per_q_max + "\n                            </span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n  \n                    <!-- Right Column -->\n                    <div style=\"flex: 1; display: flex; flex-direction: column; gap: 15px;\">\n                      <!-- Actions -->\n                      <div style=\"background: rgba(255,255,255,0.05); border-radius: 10px; padding: 15px;\">\n                        <h3 style=\"color: white; margin: 0 0 15px 0; font-size: 16px; font-weight: 600; line-height: 1.3; font-family: FrostSans;\">Actions</h3>\n                        <div style=\"display: flex; flex-direction: column; gap: 10px;\">\n                          <button id=\"completeTaskButton\" style=\"width: 100%; color: white; font-family: FrostSans; opacity: 0.6; cursor: not-allowed; padding: 12px; border-radius: 6px;\" disabled>Complete Task</button>\n                          <button id=\"discordButton\" style=\"width: 100%; font-family: FrostSans; padding: 12px; border-radius: 6px;\">Join Discord</button>\n                        </div>\n                      </div>\n  \n                      <!-- Additional Info -->\n                      <div style=\"background: rgba(255,255,255,0.05); border-radius: 10px; padding: 15px; flex: 1; display: flex; flex-direction: column; justify-content: center;\">\n                        <h3 style=\"color: white; margin: 0 0 10px 0; font-size: 16px; font-weight: 600; line-height: 1.3; text-align: center; font-family: FrostSans;\">Need Help?</h3>\n                        <p style=\"color: rgba(255,255,255,0.7); font-size: 13px; font-weight: 400; text-align: center; margin: 0; line-height: 1.4; font-family: FrostSans;\">Join our Discord for support and updates</p>\n                      </div>\n                    </div>\n                  </div>\n  \n                  <!-- Footer -->\n                  <div style=\"border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px; text-align: center;\">\n                    <div style=\"display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: rgba(255,255,255,0.7);\">\n                      <span style=\"cursor: pointer;\" onclick='window.open(\"https://frostsolve.com\")'>FrostSolve.com</span>\n                      <span style=\"cursor: pointer;\" id=\"devmenu\">Build Version v5</span>\n                    </div>\n                  </div>\n                </div>\n              ";
    } else {
      I = "\n              <div style=\"display: flex; flex-direction: column; height: 100%; font-family: FrostSans;\">\n                <!-- Header Section -->\n                <div style=\"text-align: center; margin-bottom: 20px;\">\n                  <h1 style=\"color: white; font-family: 'FrostSans'; font-size: 31px; font-weight: bold; margin: 0 0 10px 0; line-height: 1.2;\">Welcome to FrostSolve, " + (C.access.uid === 1 ? "slikc" : C.user.firstname) + "</h1>\n                  <div style=\"margin: 15px 0 10px 0;\">\n                    <div style=\"color: rgba(255,255,255,0.6); font-size: 15px; font-weight: 400; line-height: 1.4; font-family: FrostSans;\">" + readableExpiration(C.access.expiration) + "</div>\n                  </div>\n                </div>\n  \n                <!-- Main Content Area -->\n                <div style=\"display: flex; flex: 1; gap: 20px; margin-bottom: 20px;\">\n                  <!-- Left Column -->\n                  <div style=\"flex: 1; display: flex; flex-direction: column; gap: 15px;\">\n                    <!-- Keybind Settings -->\n                    <div style=\"background: rgba(255,255,255,0.05); border-radius: 10px; padding: 15px;\">\n                      <h3 style=\"color: white; margin: 0 0 15px 0; font-size: 16px; font-weight: 600; line-height: 1.3; font-family: FrostSans;\">Keybinds</h3>\n                      <div style=\"display: flex; gap: 15px;\">\n                        <div style=\"flex: 1; text-align: left;\">\n                          <label style=\"color: rgba(255,255,255,0.7); font-size: 13px; font-weight: 500; display: block; margin-bottom: 5px; font-family: FrostSans;\">Menu</label>\n                          <button id=\"keybindButtonMenu\" style=\"width: 100%; font-family: FrostSans; padding: 8px; border-radius: 6px;\">" + (StorageHandler.get("keybind").menu || "Not Set") + "</button>\n                        </div>\n                        <div style=\"flex: 1; text-align: left;\">\n                          <label style=\"color: rgba(255,255,255,0.7); font-size: 13px; font-weight: 500; display: block; margin-bottom: 5px; font-family: FrostSans;\">Answer</label>\n                          <button id=\"keybindButtonAns\" style=\"width: 100%; font-family: FrostSans; padding: 8px; border-radius: 6px;\">" + (StorageHandler.get("keybind").answer || "Not Set") + "</button>\n                        </div>\n                      </div>\n                    </div>\n  \n                    <!-- Settings -->\n                    <div style=\"background: rgba(255,255,255,0.05); border-radius: 10px; padding: 15px;\">\n                      <h3 style=\"color: white; margin: 0 0 10px 0; font-size: 16px; font-weight: 600; line-height: 1.3; font-family: FrostSans;\">Auto-Answer Settings</h3>\n                      <div style=\"display: flex; align-items: center; gap: 10px; margin-bottom: 10px;\">\n                        <label style=\"color: white; font-size: 14px; font-weight: 500; white-space: nowrap; font-family: FrostSans;\">Use Interval:</label>\n                        <input type=\"checkbox\" id=\"useInterval\" " + (StorageHandler.get("settings").use_interval ? "checked" : "") + ">\n                      </div>\n                      <div id=\"singleTime\" style=\"display: " + (StorageHandler.get("settings").use_interval ? "none" : "flex") + "; align-items: center; gap: 15px;\">\n                        <label style=\"color: white; font-size: 14px; font-weight: 500; white-space: nowrap; font-family: FrostSans;\">Time per Q:</label>\n                        <input type=\"range\" step=\"0.5\" min=\"0.5\" max=\"10\" value=" + StorageHandler.get("settings").time_per_q + " id=\"tpqamount\" style=\"flex: 1; color: red;\">\n                        <span id=\"tpqamountdisplay\" style=\"color: white; font-size: 14px; font-weight: 500; min-width: 25px; text-align: center; font-family: FrostSans;\">\n                        " + StorageHandler.get("settings").time_per_q + "\n                        </span>\n                      </div>\n                      <div id=\"intervalTime\" style=\"display: " + (StorageHandler.get("settings").use_interval ? "flex" : "none") + "; flex-direction: column; gap: 10px;\">\n                        <div style=\"display: flex; align-items: center; gap: 15px;\">\n                          <label style=\"color: white; font-size: 14px; font-weight: 500; white-space: nowrap; font-family: FrostSans;\">Min:</label>\n                          <input type=\"range\" step=\"0.5\" min=\"0.5\" max=\"20\" value=" + StorageHandler.get("settings").time_per_q_min + " id=\"tpqmin\" style=\"flex: 1; color: red;\">\n                          <span id=\"tpqmindisplay\" style=\"color: white; font-size: 14px; font-weight: 500; min-width: 25px; text-align: center; font-family: FrostSans;\">\n                          " + StorageHandler.get("settings").time_per_q_min + "\n                          </span>\n                        </div>\n                        <div style=\"display: flex; align-items: center; gap: 15px;\">\n                          <label style=\"color: white; font-size: 14px; font-weight: 500; white-space: nowrap; font-family: FrostSans;\">Max:</label>\n                          <input type=\"range\" step=\"0.5\" min=\"0.5\" max=\"20\" value=" + StorageHandler.get("settings").time_per_q_max + " id=\"tpqmax\" style=\"flex: 1; color: red;\">\n                          <span id=\"tpqmaxdisplay\" style=\"color: white; font-size: 14px; font-weight: 500; min-width: 25px; text-align: center; font-family: FrostSans;\">\n                          " + StorageHandler.get("settings").time_per_q_max + "\n                          </span>\n                        </div>\n                      </div>\n                    </div>\n  \n                    <!-- Status Info -->\n                    <div style=\"background: rgba(255,255,255,0.05); border-radius: 10px; padding: 15px;\">\n                      <h3 style=\"color: white; margin: 0 0 10px 0; font-size: 16px; font-weight: 600; line-height: 1.3; font-family: FrostSans;\">Session Info</h3>\n                      <div style=\"color: rgba(255,255,255,0.7); font-size: 12px; font-weight: 400; line-height: 1.4; font-family: FrostSans;\">\n                        <div>Loaded: " + variables.loadedAt + "</div>\n                        <div>User ID: " + C.access.uid + "</div>\n                      </div>\n                    </div>\n                  </div>\n  \n                  <!-- Right Column -->\n                  <div style=\"flex: 1; display: flex; flex-direction: column; gap: 15px;\">\n                    <!-- Main Actions -->\n                    <div style=\"background: rgba(255,255,255,0.05); border-radius: 10px; padding: 15px;\">\n                      <h3 style=\"color: white; margin: 0 0 15px 0; font-size: 16px; font-weight: 600; line-height: 1.3; font-family: FrostSans;\">Actions</h3>\n                      <div style=\"display: flex; flex-direction: column; gap: 10px;\">\n                        <button id=\"completeTaskButton\" style=\"width: 100%; color: white; font-family: FrostSans; padding: 12px; border-radius: 6px;\">Complete Task</button>\n                        " + (C.access.uid === 1 || C.access.uid === 144 ? "<button id=\"debugButton\" style=\"width: 100%; color: white; font-family: FrostSans; padding: 12px; border-radius: 6px;\">Debug Tools</button>" : "") + "\n                        <button id=\"discordButton\" style=\"width: 100%; font-family: FrostSans; padding: 12px; border-radius: 6px;\">Join Discord</button>\n                      </div>\n                    </div>\n  \n                    <!-- Warnings/Alerts -->\n                    <div id=\"themeSection\" style=\"background: rgba(255,255,255,0.05); border-radius: 10px; padding: 15px; flex: 1; display: flex; flex-direction: column;\">\n                      <style>\n                        .fs-toggle-switch { position: relative; display: inline-block; width: 44px; height: 24px; vertical-align: middle; }\n                        .fs-toggle-switch input { opacity: 0; width: 0; height: 0; }\n                        .fs-toggle-slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #374151; transition: background-color 160ms ease, border-color 160ms ease; border-radius: 24px; border: 1px solid #4b5563; }\n                        .fs-toggle-slider:before { position: absolute; content: \"\"; height: 18px; width: 18px; left: 2px; bottom: 2px; background-color: #e5e7eb; transition: transform 160ms cubic-bezier(.23, 1, .32, 1), background-color 160ms ease; border-radius: 50%; }\n                        .fs-toggle-switch input:checked + .fs-toggle-slider { background-color: #3b82f6; border-color: #3b82f6; }\n                        .fs-toggle-switch input:checked + .fs-toggle-slider:before { transform: translateX(20px); background-color: #fff; }\n                        .fs-toggle-switch input:disabled + .fs-toggle-slider { opacity: 0.45; cursor: not-allowed; }\n                      </style>\n                      <h3 style=\"color: white; margin: 0 0 10px 0; font-size: 16px; font-weight: 600; line-height: 1.3; font-family: FrostSans;\">Theme</h3>\n                      <div style=\"flex: 1; display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-start;\">\n                        <div style=\"width: 100%; display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.03); padding: 12px 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);\">\n                          <span style=\"font-family: FrostSans, sans-serif; font-size: 15px; color: #e5e7eb;\">Dark Mode</span>\n                          <label class=\"fs-toggle-switch\" style=\"cursor: not-allowed;\">\n                            <input type=\"checkbox\" id=\"darkModeToggleMain\" disabled>\n                            <span class=\"fs-toggle-slider\"></span>\n                          </label>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n  \n                <!-- Footer -->\n                <div style=\"border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px; text-align: center;\">\n                  <div style=\"display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: rgba(255,255,255,0.7);\">\n                    <span style=\"cursor: pointer;\" onclick='window.open(\"https://frostsolve.com\")'>FrostSolve.com</span>\n                    <span style=\"cursor: pointer;\" id=\"devmenu\">Build Version v4</span>\n                  </div>\n                </div>\n              </div>\n          ";
    }
    dfmAlert(I);
    if (F) {
      const n = document.getElementById("startTrialButton");
      if (n && !C.had_trial) {
        n.addEventListener("click", async () => {
          n.disabled = true;
          try {
            const O = {
              SESSID: C.user.session
            };
            const R = await fetch(API_BASE + "/dfm/start_trial", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(O)
            });
            const B = await R.json();
            if (!R.ok || B.status !== "success") {
              throw new Error(B.error || "Failed to start trial");
            }
            location.reload();
          } catch (N) {
            n.disabled = false;
            dfmAlert(N.message || "Failed to start trial");
          }
        });
      }
      const u = document.getElementById("buyYearButton");
      const V = document.getElementById("buyLifetimeButton");
      const s = x => {
        try {
          if (typeof x !== "string" || !x) {
            throw new Error("Invalid email");
          }
          return btoa(x);
        } catch (R) {
          return "Q291bGQgbm90IGVuY29kZSB1c2Vy";
        }
      };
      if (u) {
        u.addEventListener("click", () => {
          const x = C.user.email;
          const O = s(x);
          const R = "https://buy.stripe.com/3cseY19nT05Ueys9AB?client_reference_id=" + O;
          const B = window.open(R, "_blank");
          if (B) {
            trackFunnelEvent("checkout_opened", x, "year");
            B.focus();
          }
          dfmDialogCloseLast();
        });
      }
      if (V) {
        V.addEventListener("click", () => {
          const x = C.user.email;
          const O = s(x);
          const R = "https://buy.stripe.com/cNi5kDdRhbHs5QJde2b7y04?client_reference_id=" + O;
          const B = window.open(R, "_blank");
          if (B) {
            trackFunnelEvent("checkout_opened", x, "lifetime");
            B.focus();
          }
          dfmDialogCloseLast();
        });
      }
      document.getElementById("discordButton").addEventListener("click", () => {
        window.open("https://frostsolve.com/discord", "_blank").focus();
        dfmDialogCloseLast();
      });
      document.getElementById("devmenu").addEventListener("click", () => {
        dfmDialogCloseLast();
        dfmAlert("<button id='str-clear'>fix keybind bugs</button>");
        document.getElementById("str-clear").addEventListener("click", () => {
          StorageHandler.clear();
          location.reload();
        });
      });
    } else {
      const x = document.getElementById("useInterval");
      const O = document.getElementById("tpqamount");
      const R = document.getElementById("tpqamountdisplay");
      const B = document.getElementById("tpqmin");
      const N = document.getElementById("tpqmindisplay");
      const w = document.getElementById("tpqmax");
      const E = document.getElementById("tpqmaxdisplay");
      const o = document.getElementById("singleTime");
      const A = document.getElementById("intervalTime");
      const j = document.getElementById("darkModeToggleMain");
      if (j) {
        j.checked = false;
        j.disabled = true;
      }
      x.addEventListener("change", () => {
        const a = x.checked;
        o.style.display = a ? "none" : "flex";
        A.style.display = a ? "flex" : "none";
        const l = StorageHandler.get("settings");
        const L = {
          ...l
        };
        L.use_interval = a;
        StorageHandler.set("settings", L);
      });
      O.addEventListener("input", () => {
        R.textContent = O.value;
        const a = StorageHandler.get("settings");
        StorageHandler.set("settings", {
          ...a,
          time_per_q: parseFloat(O.value),
          time_per_q_min: parseFloat(O.value),
          time_per_q_max: parseFloat(O.value)
        });
      });
      B.addEventListener("input", () => {
        const a = parseFloat(B.value);
        const l = parseFloat(w.value);
        N.textContent = a;
        if (a > l) {
          w.value = a;
          E.textContent = a;
        }
        const L = StorageHandler.get("settings");
        StorageHandler.set("settings", {
          ...L,
          time_per_q_min: a,
          time_per_q_max: Math.max(a, parseFloat(w.value))
        });
      });
      w.addEventListener("input", () => {
        const l = parseFloat(B.value);
        const L = parseFloat(w.value);
        E.textContent = L;
        if (L < l) {
          B.value = L;
          N.textContent = L;
        }
        const Y = StorageHandler.get("settings");
        StorageHandler.set("settings", {
          ...Y,
          time_per_q_min: Math.min(l, parseFloat(B.value)),
          time_per_q_max: L
        });
      });
      document.getElementById("completeTaskButton").addEventListener("click", async () => {
        if (!QuestionUtils.isOnQuestionPage()) {
          alert("You are not on a question page.");
          return;
        }
        const a = document.getElementById("completeTaskButton");
        if (a) {
          const l = a.getBoundingClientRect();
          a.style.width = l.width + "px";
          a.style.display = "inline-flex";
          a.style.alignItems = "center";
          a.style.justifyContent = "center";
          a.disabled = true;
          a.style.opacity = "0.6";
          a.style.cursor = "not-allowed";
          a.innerHTML = variables.loaderSVG;
          const L = a.querySelector("svg");
          if (L) {
            L.setAttribute("width", "16");
            L.setAttribute("height", "16");
            L.classList.add("animate-spin");
            L.style.display = "block";
          }
        }
        await QuestionUtils.fullAutoAnswer(C, $(document).data("taskState"), "button");
        dfmDialogCloseLast();
      });
      if (C.access.uid === 1 || C.access.uid === 144) {
        document.getElementById("debugButton").addEventListener("click", async () => {
          dfmDialogCloseLast();
          const l = "\n                      <div style=\"display: flex; flex-direction: column; align-items: center; min-height: 300px;\">\n                          <h1 style=\"font-family: FrostSans, sans-serif; text-align: center; margin-bottom: 5px;\">Color Picker</h1>\n                          <p style=\"font-family: FrostSans, sans-serif; text-align: center; margin-bottom: 20px;\">Select the colors for the solved gradient.</p>\n                          <style>\n                            .fs-toggle-switch { position: relative; display: inline-block; width: 44px; height: 24px; }\n                            .fs-toggle-switch input { opacity: 0; width: 0; height: 0; }\n                            .fs-toggle-slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #374151; transition: background-color 160ms ease, border-color 160ms ease; border-radius: 24px; border: 1px solid #4b5563; }\n                            .fs-toggle-slider:before { position: absolute; content: \"\"; height: 18px; width: 18px; left: 2px; bottom: 2px; background-color: #e5e7eb; transition: transform 160ms cubic-bezier(.23, 1, .32, 1), background-color 160ms ease; border-radius: 50%; }\n                            .fs-toggle-switch input:checked + .fs-toggle-slider { background-color: #3b82f6; border-color: #3b82f6; }\n                            .fs-toggle-switch input:checked + .fs-toggle-slider:before { transform: translateX(20px); background-color: #fff; }\n                            .fs-toggle-switch input:disabled + .fs-toggle-slider { opacity: 0.45; cursor: not-allowed; }\n                          </style>\n                          <div style=\"width: 100%; padding: 0 40px; margin-bottom: 20px; box-sizing: border-box;\">\n                            <h3 style=\"font-family: FrostSans, sans-serif; font-size: 12px; text-transform: uppercase; color: #9ca3af; margin-bottom: 8px; font-weight: 600; letter-spacing: 0.5px; text-align: left;\">Theme</h3>\n                            <div style=\"display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.03); padding: 12px 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);\">\n                              <span style=\"font-family: FrostSans, sans-serif; font-size: 15px; color: #e5e7eb;\">Dark Mode</span>\n                              <label class=\"fs-toggle-switch\" style=\"cursor: not-allowed;\">\n                                <input type=\"checkbox\" id=\"darkModeToggle\" disabled>\n                                <span class=\"fs-toggle-slider\"></span>\n                              </label>\n                            </div>\n                          </div>\n                          <div style=\"display: flex; justify-content: center; margin-bottom: 20px;\">\n                              <button id=\"tab1\" class=\"tab active\" style=\"margin: 0 5px; padding: 7px 20px; cursor: pointer;\">Picker 1</button>\n                              <button id=\"tab2\" class=\"tab\" style=\"margin: 0 5px; padding: 7px 20px; cursor: pointer;\">Picker 2</button>\n                              <button id=\"tab3\" class=\"tab\" style=\"margin: 0 5px; padding: 7px 20px; cursor: pointer;\">Picker 3</button>\n                          </div>\n                          <div id=\"colorBox\" style=\"width: 100px; height: 100px; background-color: #3498db; border-radius: 15px; cursor: pointer; position: relative; overflow: hidden; display: flex; justify-content: center; align-items: center; transition: width 200ms ease-out, height 200ms ease-out, border-radius 200ms ease-out; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);\">\n                              <span id=\"colorText\"></span>\n                              <div id=\"colorWheel\" style=\"position: absolute; width: 20px; height: 20px; border-radius: 50%; background-color: #fff; border: 2px solid #000; cursor: grab; opacity: 0;\"></div>\n                          </div>\n                          <input type=\"range\" id=\"hueSlider\" min=\"0\" max=\"360\" value=\"200\" style=\"width: 300px; margin-top: 10px; display: none; opacity: 0; position: relative; z-index: 1; appearance: none; height: 10px; background: linear-gradient(to right, red, yellow, lime, cyan, blue, magenta, red); border-radius: 5px; outline: none; cursor: pointer;\">\n                      </div>";
          dfmAlert(l);
          recolorModal();
          lastModal().style.minHeight = "550px";
          lastModal().style.minWidth = "500px";
          const L = document.getElementById("colorBox");
          const Y = document.getElementById("hueSlider");
          const r = document.getElementById("darkModeToggle");
          if (r) {
            r.checked = false;
            r.disabled = true;
          }
          const c = document.getElementById("colorWheel");
          const H = document.querySelectorAll(".tab");
          let P = 1;
          let i = false;
          const K = {
            1: JSON.parse(localStorage.getItem("colorPickerState1")) || {
              selectedColor: "#3498db",
              selectedHue: 200,
              wheelPosition: {
                x: 0,
                y: 0
              },
              hasInteracted: false
            },
            2: JSON.parse(localStorage.getItem("colorPickerState2")) || {
              selectedColor: "#e74c3c",
              selectedHue: 0,
              wheelPosition: {
                x: 0,
                y: 0
              },
              hasInteracted: false
            },
            3: JSON.parse(localStorage.getItem("colorPickerState3")) || {
              selectedColor: "#2ecc71",
              selectedHue: 120,
              wheelPosition: {
                x: 0,
                y: 0
              },
              hasInteracted: false
            }
          };
          function G() {
            const q = Y.value;
            const Q = parseFloat(c.style.left) + c.clientWidth / 2;
            const g = parseFloat(c.style.top) + c.clientHeight / 2;
            const M0 = Q / L.clientWidth * 100;
            const M1 = (1 - g / L.clientHeight) * 100;
            const M2 = p(q, M0, M1);
            L.style.backgroundColor = M2;
            K[P].selectedColor = M2;
            K[P].selectedHue = q;
            K[P].hasInteracted = true;
            K[P].wheelPosition = {
              x: parseFloat(c.style.left),
              y: parseFloat(c.style.top)
            };
            localStorage.setItem("colorPickerState" + P, JSON.stringify(K[P]));
          }
          function p(q, Q, g) {
            g /= 100;
            const M0 = Q * Math.min(g, 1 - g) / 100;
            const M1 = M2 => {
              const M3 = (M2 + q / 30) % 12;
              const M4 = g - M0 * Math.max(Math.min(M3 - 3, 9 - M3, 1), -1);
              return Math.round(M4 * 255).toString(16).padStart(2, "0");
            };
            return "#" + M1(0) + M1(8) + M1(4);
          }
          function J(q) {
            P = q;
            L.style.backgroundColor = K[P].selectedColor;
            Y.value = K[P].selectedHue;
            c.style.left = K[P].wheelPosition.x + "px";
            c.style.top = K[P].wheelPosition.y + "px";
            H.forEach((M0, M1) => {
              if (M1 + 1 === q) {
                M0.classList.add("active");
              } else {
                M0.classList.remove("active");
              }
            });
          }
          H.forEach((q, Q) => {
            q.addEventListener("click", () => J(Q + 1));
          });
          L.addEventListener("click", () => {
            if (!i) {
              gsap.to(L, {
                duration: 0.32,
                width: "300px",
                height: "300px",
                borderRadius: "20px",
                ease: "power2.out",
                onComplete: () => {
                  Y.style.display = "block";
                  const q = {
                    y: -20,
                    opacity: 0
                  };
                  gsap.fromTo(Y, q, {
                    duration: 0.2,
                    y: 0,
                    opacity: 1,
                    ease: "power3.out"
                  });
                  c.style.display = "block";
                  gsap.to(c, {
                    duration: 0.2,
                    opacity: 1,
                    ease: "power4.out"
                  });
                }
              });
              i = true;
            }
          });
          Y.addEventListener("input", G);
          c.addEventListener("mousedown", q => {
            const M0 = L.getBoundingClientRect();
            const M1 = q.clientX - M0.left - c.offsetLeft;
            const M2 = q.clientY - M0.top - c.offsetTop;
            const M3 = M5 => {
              let M6 = M5.clientX - M0.left - M1;
              let M7 = M5.clientY - M0.top - M2;
              M6 = Math.max(0, Math.min(M6, L.clientWidth - c.clientWidth));
              M7 = Math.max(0, Math.min(M7, L.clientHeight - c.clientHeight));
              c.style.left = M6 + "px";
              c.style.top = M7 + "px";
              G();
            };
            document.addEventListener("mousemove", M3);
            document.addEventListener("mouseup", () => {
              document.removeEventListener("mousemove", M3);
            }, {
              once: true
            });
          });
          window.addEventListener("click", q => {
            if (i && !L.contains(q.target) && !Y.contains(q.target)) {
              gsap.to(Y, {
                duration: 0.2,
                y: -20,
                opacity: 0,
                ease: "power3.out",
                onComplete: () => {
                  Y.style.display = "none";
                }
              });
              gsap.to(c, {
                duration: 0.2,
                opacity: 0,
                ease: "power3.out",
                onComplete: () => {
                  c.style.display = "none";
                }
              });
              gsap.to(L, {
                duration: 0.32,
                width: "100px",
                height: "100px",
                borderRadius: "15px",
                ease: "power2.out"
              });
              i = false;
            }
          });
          J(1);
        });
      }
      document.getElementById("discordButton").addEventListener("click", () => {
        window.open("https://frostsolve.com/discord", "_blank").focus();
        dfmDialogCloseLast();
      });
      document.getElementById("devmenu").addEventListener("click", () => {
        dfmDialogCloseLast();
        dfmAlert("<button id='str-clear'>fix keybind bugs</button>");
        document.getElementById("str-clear").addEventListener("click", () => {
          StorageHandler.clear();
          location.reload();
        });
      });
      const v = (a, l) => {
        const r = document.getElementById(a);
        r.addEventListener("click", () => {
          r.textContent = "Press a key...";
          const c = H => {
            const P = H.key;
            const i = StorageHandler.get("keybind");
            i[l] = P;
            StorageHandler.set("keybind", i);
            r.textContent = P;
            document.removeEventListener("keydown", c);
          };
          document.addEventListener("keydown", c);
        });
      };
      v("keybindButtonMenu", "menu");
      v("keybindButtonAns", "answer");
    }
    recolorModal();
    globals.menuOpen = true;
  }
  static closeDialog() {
    dfmDialogCloseLast();
  }
  static createAutoAnswerMenu() {
    const I = XPATH("/html/body/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]");
    let F = document.querySelector("#autoAnswering");
    if (!F) {
      F = document.createElement("div");
      F.id = "autoAnswering";
      F.style.border = "1px solid #ccc";
      F.style.padding = "10px";
      F.style.margin = "10px 0";
      F.style.backgroundColor = "#f9f9f9";
      F.style.borderRadius = "10px";
      F.style.boxShadow = "0 0 3px #000000";
      I.appendChild(F);
    }
    const T = F.querySelector("#headerElement") || document.createElement("h1");
    const n = F.querySelector("#timerElement") || document.createElement("p");
    const u = F.querySelector("#answerElement") || document.createElement("p");
    const V = F.querySelector("#totalElement") || document.createElement("p");
    if (!T.id) {
      T.id = "headerElement";
    }
    if (!n.id) {
      n.id = "timerElement";
    }
    if (!u.id) {
      u.id = "answerElement";
    }
    if (!V.id) {
      V.id = "totalElement";
    }
    if (!F.contains(T)) {
      F.appendChild(T);
    }
    if (!F.contains(n)) {
      F.appendChild(n);
    }
    if (!F.contains(u)) {
      F.appendChild(u);
    }
    if (!F.contains(V)) {
      F.appendChild(V);
    }
  }
  static createLiveMenu() {
    const I = document.querySelector(".question-form");
    if (!I) {
      console.error("Couldn't find the question content div.");
      return;
    }
    const F = document.createElement("div");
    F.style.marginTop = "20px";
    F.style.fontSize = "16px";
    F.style.border = "1px solid #666666";
    F.style.borderRadius = "10px";
    F.style.maxWidth = "70%";
    F.style.minHeight = "200px";
    F.style.padding = "0px 0px 8px 8px";
    F.id = "liveMenu";
    I.appendChild(F);
    return F;
  }
  static destroyLiveMenu() {
    const C = document.getElementById("liveMenu");
    if (C) {
      C.remove();
    }
  }
}
class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(C, W) {
    if (!this.events[C]) {
      this.events[C] = [];
    }
    this.events[C].push(W);
  }
  emit(C, W) {
    if (this.events[C]) {
      this.events[C].forEach(Z => Z(W));
    }
  }
}
const originalWS = WebSocket;
const wsEmitter = new EventEmitter();
let activeWebSocket = null;
WebSocket = function (W, Z) {
  const I = {
    CUEPo: "drfrost",
    Cdfdg: function (u, V) {
      return u !== V;
    }
  };
  const F = I;
  const T = new originalWS(W, Z);
  if (T.url.includes("drfrost")) {
    activeWebSocket = T;
  }
  T.addEventListener("message", function (u) {
    if (T.url.includes("drfrost")) {
      wsEmitter.emit("message", u.data);
    }
  });
  const n = T.send;
  T.send = function (u) {
    let V = true;
    if (T.url.includes(F.CUEPo)) {
      if (F.Cdfdg("jofgd", "jofgd")) {
        if (O) {
          return;
        }
        R = true;
        if (B && N.parentNode) {
          l.parentNode.removeChild(L);
        }
        if (o && A.parentNode) {
          Y.parentNode.removeChild(r);
        }
        a();
      } else {
        wsEmitter.emit("send", {
          data: u,
          preventDefault: () => {
            V = false;
          },
          send: x => {
            n.apply(T, [x]);
          }
        });
      }
    }
    if (V) {
      return n.apply(T, arguments);
    }
  };
  return T;
};
class LiveHandler extends EventEmitter {
  constructor() {
    super();
    wsEmitter.on("message", this.handleWebSocketMessage.bind(this));
    wsEmitter.on("send", this.handleWebSocketSend.bind(this));
  }
  static isOnLivePage() {
    for (let I of document.getElementsByTagName("script")) {
      if (I.src.includes(variables.liveScript)) {
        return true;
      }
    }
    return false;
  }
  static async getLiveParticipant() {
    const W = {
      vKVDm: function (T, n, u) {
        return T(n, u);
      },
      XMbGw: "GET"
    };
    const I = await W.vKVDm(fetch, "/api/live/currentparticipant", {
      method: W.XMbGw,
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!I.ok) {
      return null;
    }
    const F = await I.json();
    return F;
  }
  static async joinBot(W) {
    let F = new WebSocket(window.location.origin.replace(/^http(.*)/, "ws$1") + "/ws/script2");
    F.onopen = function () {
      F.send(JSON.stringify({
        status: "join",
        gid: W,
        uid: Math.floor(Math.random() * 1000000),
        nickname: "FrostSolve | " + String(Math.floor(Math.random() * 1000000)),
        pid: Math.floor(Math.random() * 100000000)
      }));
    };
    return F;
  }
  setWebSocketInstance(C) {
    this.wsInstance = C;
  }
  send(C) {
    if (activeWebSocket) {
      activeWebSocket.send(C);
    } else {
      console.error("Active WebSocket instance not available.");
    }
  }
  handleWebSocketMessage(W) {
    const F = JSON.parse(W);
    this.emit("message", F);
  }
  handleWebSocketSend(C) {
    this.emit("send", C);
  }
}
const FS_STRIPE_CUSTOMER_PORTAL = "https://billing.stripe.com/p/login/28EcN5bJ94f0a6Zfmab7y00";
function requestFrostsolveBillingStorage(W, Z) {
  const F = {
    dTXMI: "message",
    XkDYw: "fsBillingStorageRequest"
  };
  return new Promise(T => {
    const u = "fs-billing-" + Date.now() + "-" + Math.random().toString(36).slice(2);
    let V = null;
    const s = O => {
      if (O.source !== window) {
        return;
      }
      if (!O.data || O.data.type !== "fsBillingStorageResponse" || O.data.requestId !== u) {
        return;
      }
      window.removeEventListener("message", s);
      if (V) {
        clearTimeout(V);
      }
      T(O.data.success ? O.data.value ?? null : null);
    };
    window.addEventListener(F.dTXMI, s);
    const x = {
      type: F.XkDYw,
      action: W,
      value: Z,
      requestId: u
    };
    window.postMessage(x, "*");
    V = setTimeout(() => {
      window.removeEventListener("message", s);
      T(null);
    }, 3000);
  });
}
async function syncFrostsolveBillingState(C) {
  if (!C) {
    return;
  }
  let Z = null;
  if (C.status === "success") {
    const I = C.state?.access;
    const F = I?.expiration !== null && I?.expiration !== undefined;
    Z = {
      showManageSubscription: F,
      hasYearlySubscription: F,
      updatedAt: Date.now()
    };
  } else if (C.status === "no_access") {
    Z = {
      showManageSubscription: false,
      hasYearlySubscription: false,
      updatedAt: Date.now()
    };
  }
  if (Z !== null) {
    await requestFrostsolveBillingStorage("set", Z);
  }
}
async function setupFrostsolveBillingNavButton() {
  const Z = window.location.hostname;
  if (Z !== "frostsolve.com" && Z !== "www.frostsolve.com") {
    return;
  }
  const I = await requestFrostsolveBillingStorage("get");
  if (!I || I.showManageSubscription !== true) {
    return;
  }
  function F() {
    let x = null;
    try {
      const B = document.evaluate("/html/body/div[2]/nav/div/div[2]/button", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      x = B.singleNodeValue;
    } catch (N) {
      return;
    }
    if (!x || x.tagName !== "BUTTON" || x.dataset.fsBillingNav === "1") {
      return;
    }
    const O = x.tagName.toLowerCase() === "a" ? "a" : "button";
    const R = document.createElement(O);
    R.dataset.fsBillingNav = "1";
    if (O === "button") {
      R.type = "button";
    } else {
      R.href = FS_STRIPE_CUSTOMER_PORTAL;
      R.removeAttribute("target");
      R.removeAttribute("rel");
    }
    R.textContent = "Manage subscription";
    R.setAttribute("aria-label", "Manage subscription");
    R.className = x.className;
    for (const o of x.attributes) {
      if (o.name === "class" || o.name === "type" || o.name === "href" || o.name === "target" || o.name === "rel" || o.name.startsWith("data-fs-billing")) {
        continue;
      }
      R.setAttribute(o.name, o.value);
    }
    R.addEventListener("click", j => {
      j.preventDefault();
      j.stopPropagation();
      window.location.assign(FS_STRIPE_CUSTOMER_PORTAL);
    });
    x.replaceWith(R);
  }
  F();
  let T = false;
  const n = new MutationObserver(() => {
    if (T) {
      return;
    }
    T = true;
    requestAnimationFrame(() => {
      T = false;
      F();
    });
  });
  n.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
  setTimeout(() => n.disconnect(), 20000);
}
(async function () {
  'use strict';

  compatibilityCheck();
  await setupFrostsolveBillingNavButton();
  const W = window.location.hostname;
  if (W === "frostsolve.com" || W.endsWith(".frostsolve.com")) {
    return;
  }
  console.log("%cFROSTSOLVE LOADED", "color: green; font-size: 60px; font-weight: bold");
  importScript(variables.gsap);
  const Z = await AuthHandler.authenticate();
  if (Z.status === "error") {
    dfmAlert("An authentication error occurred. Please contact <a href='https://frostsolve.com/discord' target='_blank'>support</a>.");
    return;
  } else if (Z.status === "logged_out") {
    return;
  }
  await syncFrostsolveBillingState(Z);
  const I = Z.state;
  const F = Z.status;
  trackFunnelEvent("extension_opened", F === "success" ? I.user.email : Z.user?.email);
  if (StorageHandler.shouldInitialize()) {
    StorageHandler.initialize();
  }
  StorageHandler.migrateSettings();
  DarkModeUtils.applyFromSettings();
  const T = false;
  if (T) {
    const u = R => {
      if (!R) {
        return "";
      }
      const B = String(R);
      const [N] = B.split("?");
      const [w] = N.split("#");
      return w;
    };
    const V = u(window.location.pathname || window.location.href || "");
    const s = R => {
      if (!Array.isArray(R)) {
        return [];
      }
      return R.filter(B => {
        if (!B || !B.selector) {
          return false;
        }
        const N = Array.isArray(B.existsOn) ? B.existsOn : B.existsOn ? [B.existsOn] : [];
        if (N.length === 0) {
          return true;
        }
        return N.some(w => {
          const E = u(w);
          return E === V;
        });
      });
    };
    const x = await AdHandler.getAds();
    const O = s(x?.slots);
    if (!x || !x.ads || O.length === 0 || x.ads.length === 0) {} else {
      const R = x.ads.length;
      const B = O.map(w => {
        const E = AdHandler.getOrCreateAdContainer(w);
        if (E) {
          return {
            el: E,
            slot: w
          };
        } else {
          return null;
        }
      }).filter(w => w !== null);
      const N = B.length;
      if (N === 0) {} else if (R === 0) {} else if (R <= N) {
        const w = [...x.ads].sort(() => Math.random() - 0.5);
        for (let E = 0; E < N; E++) {
          const o = w[E % R];
          AdHandler.renderAdIntoContainer(B[E].el, o, B[E].slot);
        }
      } else {
        let j = Math.floor(Math.random() * R);
        const v = () => {
          for (let Y = 0; Y < N; Y++) {
            const r = (j + Y) % R;
            AdHandler.renderAdIntoContainer(B[Y].el, x.ads[r], B[Y].slot);
          }
        };
        v();
        const a = 220;
        const l = 10000 + a;
        const L = setInterval(() => {
          B.forEach(({
            el: c
          }) => {
            c.classList.add("flipping");
          });
          setTimeout(() => {
            j = (j + N) % R;
            v();
            B.forEach(({
              el: P
            }) => {
              const z = P.querySelector(".fs-ad-content");
              if (z) {
                z.offsetWidth;
              }
            });
            B.forEach(({
              el: P
            }) => {
              P.classList.remove("flipping");
            });
          }, a);
        }, l);
      }
    }
  }
  if (F === "success" && StorageHandler.get("settings").first_run === true) {
    dfmAlert("\n              <h1 style=\"text-align: center; color: white; font-family: 'FrostSans';\">Welcome to FrostSolve, " + (I.access.uid === 1 ? "slikc" : I.user.firstname) + "</h1>\n              <p style=\"text-align: center; color: white; font-family: 'FrostSans';\">It seems to be your first time using FrostSolve. Enjoy.</p>\n              <br>\n              <p style=\"text-align: center; color: white; font-family: 'FrostSans';\">To open the menu, press <b>" + StorageHandler.get("keybind").menu + "</b> on your keyboard. To answer questions, press <b>" + StorageHandler.get("keybind").answer + "</b>. You can change these in the menu anytime.</p>\n              <br>\n              <p style=\"text-align: center; color: white; font-family: 'FrostSans';\">If you need help or have any questions, please contact <a href='https://frostsolve.com/discord' target='_blank'>support</a>.</p>\n              <br>\n              <p style=\"text-align: center; color: white; font-family: 'FrostSans';\">Enjoy your time with FrostSolve!</p>\n          ");
    recolorModal();
    StorageHandler.set("settings", {
      ...StorageHandler.get("settings"),
      first_run: false
    });
  }
  if (F === "success" && QuestionUtils.isOnQuestionPage() === true) {
    QuestionUtils.fullAutoAnswer(I, $(document).data("taskState"));
    QuestionUtils.loadAllQs();
  }
  document.addEventListener("keydown", async function (Y) {
    if (Y.key === StorageHandler.get("keybind").menu) {
      const H = F === "success" ? I : Z;
      MenusHandler.openMenu(H, F);
    } else if (Y.key === StorageHandler.get("keybind").answer) {
      if (QuestionUtils.isOnQuestionPage() === false) {
        return;
      }
      if (F !== "success") {
        ToastHandler.show({
          title: "Access Required",
          content: "You need an active FrostSolve subscription or lifetime purchase to answer questions.",
          type: "error",
          duration: 5000
        });
        const G = XPATH("//*[@id='doquestion-container']/div[2]/div[2]/div[1]") || XPATH("/html/body/div[1]/div[1]/div[2]/div[2]/div[1]");
        if (G && !G.dataset.fsBorderAnimating) {
          G.dataset.fsBorderAnimating = "true";
          const p = G.style.transition || "";
          const J = G.style.boxShadow || "";
          G.style.transition = "box-shadow 0.9s ease-out";
          G.style.boxShadow = "inset 0 0 30px rgba(220, 20, 60, 1), inset 0 0 60px rgba(255, 0, 0, 0.8), inset 0 0 90px rgba(255, 69, 0, 0.6), 0 0 40px rgba(255, 0, 0, 0.7)";
          setTimeout(() => {
            G.style.boxShadow = "inset 0 0 15px rgba(220, 20, 60, 0.3), inset 0 0 30px rgba(255, 0, 0, 0.2), inset 0 0 45px rgba(255, 69, 0, 0.1), 0 0 20px rgba(255, 0, 0, 0.1)";
            setTimeout(() => {
              G.style.transition = p;
              G.style.boxShadow = J;
              delete G.dataset.fsBorderAnimating;
            }, 900);
          }, 500);
        }
        return;
      }
      let P = $(document).data("taskState");
      let z = P.qnum;
      let X = P.attempt.aaid;
      if (globals.menuOpen && globals.lastSolvedQnum === z) {
        return;
      }
      QuestionUtils.displayAnswer({}, false, true);
      let D = await QuestionUtils.solveQuestion(X, z, I);
      if (D === null) {
        window.postMessage("addedEL", "*");
        setTimeout(async () => {
          I.user.session = document.getElementById("SESSION-HERE").value;
          const M0 = await QuestionUtils.solveQuestion(X, z, I);
          if (M0 === null) {
            document.querySelectorAll(".fs-answer-modal, .fs-answer-overlay").forEach(M1 => M1.remove());
            dfmAlert(QuestionUtils.solveFailureMessage());
            return;
          } else {
            let M1 = M0.aa;
            QuestionUtils.displayAnswer(M0, QuestionUtils.processAnswer(P, M1, M0));
            globals.lastSolvedQnum = z;
          }
        }, 200);
        return;
      }
      let U = D.aa;
      QuestionUtils.displayAnswer(D, QuestionUtils.processAnswer(P, U, D));
      globals.lastSolvedQnum = z;
    }
  });
  if (LiveHandler.isOnLivePage()) {
    console.log("is on live page");
    const r = new LiveHandler();
    const c = await LiveHandler.getLiveParticipant();
    console.log(c);
    console.log(r);
    r.on("message", H => {
      console.log("Live message:", H);
      console.log(H);
      if (H.status === "question") {
        console.log("Question Detected.");
        console.log(QuestionUtils.formatAnswer(H.question.answer.type, H.question.answer.correctAnswer));
        setTimeout(() => {
          let U = MenusHandler.createLiveMenu();
          console.log("menu created");
          U.innerHTML = "<h1 style=\"font-size: 30px;\">[FrostSolve]</h1><br><p>Question Answer: " + QuestionUtils.formatAnswer(H.question.answer.type, H.question.answer.correctAnswer) + "</p><br><a id=\"copyA\" style=\"padding: 12px 30px; font-size: 13px; font-weight: 1000!important; color: #fff; border-radius: 4px; cursor: pointer; font-family: 'Trebuchet MS', Lato, sans-serif; border-width: 0px; text-decoration: none; display: inline-block; background-color: #00c71e; margin-right: 28px;\">Copy Answer</a><a id=\"skipQButton\" style=\"padding: 12px 30px; font-size: 13px; font-weight: 1000!important; color: #fff; border-radius: 4px; cursor: pointer; font-family: 'Trebuchet MS', Lato, sans-serif; border-width: 0px; text-decoration: none; display: inline-block; background-color: #007bff; margin-right: 8px;\">Stop Waiting...</a><a id=\"endGame\" style=\"padding: 12px 30px; font-size: 13px; font-weight: 1000!important; color: #fff; border-radius: 4px; cursor: pointer; font-family: 'Trebuchet MS', Lato, sans-serif; border-width: 0px; text-decoration: none; display: inline-block; background-color: #007bff; margin-right: 8px;\">Finish Game...</a>";
          document.getElementById("skipQButton").addEventListener("click", () => {
            console.log("stop waiting");
            const k = {
              status: "stopWaiting",
              gid: c.game.gid
            };
            r.send(JSON.stringify(k));
          });
          document.getElementById("endGame").addEventListener("click", () => {
            console.log("end game");
            const k = {
              status: "endGame",
              gid: c.game.gid
            };
            r.send(JSON.stringify(k));
          });
          document.getElementById("copyA").addEventListener("click", () => {
            navigator.clipboard.writeText(String(QuestionUtils.formatAnswer(H.question.answer.type, H.question.answer.correctAnswer)));
            document.getElementById("copyA").textContent = "Copied!";
            setTimeout(() => {
              document.getElementById("copyA").textContent = "Copy Answer";
            }, 1600);
          });
        }, 650);
      }
    });
    r.on("send", H => {
      let P = JSON.parse(H.data);
      console.log("Live send:", P);
      if (P.status === "pulse" && !P.isHub) {
        P.isHub = true;
        H.preventDefault();
        H.send(JSON.stringify(P));
      }
    });
  }
})();
function m(W) {
  const Z = {
    NrJDf: "TUaxD",
    ORbdN: "while (true) {}",
    bKpJW: "counter",
    POvdD: function (T, n) {
      return T + n;
    },
    THilP: "gger",
    CDqHg: "stateObject",
    xsTEx: "Fetch failed",
    ZKUFP: "bVwXZ"
  };
  const I = Z;
  function F(T) {
    if (typeof T === "string") {
      if (I.NrJDf !== "TUaxD") {
        I.insertBefore(F, T.firstChild);
      } else {
        return function (u) {}.constructor(I.ORbdN).apply(I.bKpJW);
      }
    } else if (("" + T / T).length !== 1 || T % 20 === 0) {
      (function () {
        return true;
      }).constructor(I.POvdD("debu", I.THilP)).call("action");
    } else {
      (function () {
        return false;
      }).constructor(I.POvdD("debu", "gger")).apply(I.CDqHg);
    }
    F(++T);
  }
  try {
    if (W) {
      return F;
    } else if (I.ZKUFP !== "LZCFH") {
      F(0);
    } else {
      I(new F(T.data.error || I.xsTEx));
    }
  } catch (n) {}
}