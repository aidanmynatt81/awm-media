// Locks/unlocks client gallery links with the client's access code.
// The code itself is never stored anywhere — only the locked result.
(function () {
  const enc = new TextEncoder();
  const dec = new TextDecoder();
  const b64 = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf)));
  const unb64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
  const clean = (code) => code.trim().toLowerCase().replace(/\s+/g, "");

  async function keyFrom(code, salt) {
    const base = await crypto.subtle.importKey("raw", enc.encode(clean(code)), "PBKDF2", false, ["deriveKey"]);
    return crypto.subtle.deriveKey(
      { name: "PBKDF2", salt, iterations: 200000, hash: "SHA-256" },
      base, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]
    );
  }

  window.Lock = {
    async lock(code, data) {
      const salt = crypto.getRandomValues(new Uint8Array(16));
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const key = await keyFrom(code, salt);
      const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, enc.encode(JSON.stringify(data)));
      return { s: b64(salt), i: b64(iv), d: b64(ct) };
    },
    async unlock(code, entry) {
      try {
        const key = await keyFrom(code, unb64(entry.s));
        const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv: unb64(entry.i) }, key, unb64(entry.d));
        return JSON.parse(dec.decode(pt));
      } catch (e) {
        return null;
      }
    },
  };
})();
