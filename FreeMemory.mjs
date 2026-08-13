/*
 * Drafting: (if interperted it correctly) os memory and total memory gives u raw numbers in bytes
 * not very readable for us
 * What i think this function does is we feed it raw bytes and the it hands it back to a reable string "" for e.g 9 GB.
 * It's basically a translator for bytes to string.
 * TLDR: how many times can I divide by 1024 before the number gets small enough to be readable" each division by 1024 moves you up one unit (Bytes KB MB GB TB).
 * The Math.log trick is just a fast way to calculate that division-count without writing a loop
 */

export function bytesToSize(bytes) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
}
