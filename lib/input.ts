  /**
   * @module
   *
   * This module contains functions to process the input.
   *
   */

/**
 * Regex for the newline, which contains the line feed, and optionally the carriage return character.
 */
const NEWLINE_REGEX = /\r?\n/;

/**
 * Returns a list of lines of the input that are not empty.
 * 
 * ```ts
 * nonEmptyLines("a\nb\n\n\nc\n") // ["a", "b", "c"]
 * ```
 * 
 * @param input The input string which might contain multiple lines.
 * @param lineSeparator Line separator. Defaults to the line feed (\n) optionally preceeded by a cariage return (\r).
 */
export function nonEmptyLines(
  input: string,
  lineSeparator: string | RegExp = NEWLINE_REGEX
): string[] {
  return input.split(lineSeparator).filter((l) => l.length > 0);
}

/**
 * Returns a list of grouped lines.
 * 
 * ```ts
 * groupedLines("a\nb\nc\n\nx\ny\nz\n") // [["a", "b", "c"], ["x", "y", "z"]]
 * ```
 * 
 * @param input The input string which might contain multiple lines.
 * @param groupSep Group separator. Characters in the input which mark the separation of different groups of lines.
 */
export function groupedLines(
  input: string,
  groupSep: string | RegExp = /\r?\n\r?\n/
): string[][] {
  return input.split(groupSep).map((g) => nonEmptyLines(g));
}
