/**
 * Wraps text in curly double quotes, turning any quotation already inside it into
 * single quotes so nested quotes read correctly: “He said, ‘Follow me.’”
 */
export function quoted(text: string): string {
  const inner = text
    .replace(/"([^"]*)"/g, '‘$1’')
    .replace(/“/g, '‘')
    .replace(/”/g, '’');
  return `“${inner}”`;
}
