export const validateUrl       = (u) => /^https?:\/\/.+\..+/.test(u);
export const validateMinutes   = (v) => /^[0-9]+$/.test(v);
export const validateShortcode = (c) => /^[\w-]{3,10}$/.test(c);
