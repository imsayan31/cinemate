import { useCallback } from 'react';

/**
 * Custom hook: useFormatDate
 * - Accepts various date inputs (DD-MM-YYYY, YYYY-MM-DD, Date object, timestamp)
 * - Returns a `formatDate` function: formatDate(input, options)
 * - Options:
 *    - locale: string (default 'en-US')
 *    - format: 'long' | 'short' | 'medium' | 'iso' | IntlOptionsObject
 * Example:
 *   const formatDate = useFormatDate();
 *   formatDate('14-10-1994') => 'October 14, 1994'
 */

function parseDate(input) {
  if (!input && input !== 0) return null;

  // If already a Date
  if (input instanceof Date) return input;

  // If numeric timestamp
  if (typeof input === 'number') {
    const d = new Date(input);
    return Number.isNaN(d.getTime()) ? null : d;
  }

  if (typeof input === 'string') {
    const trimmed = input.trim();

    // Match DD-MM-YYYY
    if (/^\d{2}-\d{2}-\d{4}$/.test(trimmed)) {
      const [d, m, y] = trimmed.split('-').map(Number);
      const dt = new Date(y, m - 1, d);
      return Number.isNaN(dt.getTime()) ? null : dt;
    }

    // Match YYYY-MM-DD or ISO-ish
    if (/^\d{4}-\d{2}-\d{2}/.test(trimmed)) {
      const dt = new Date(trimmed);
      return Number.isNaN(dt.getTime()) ? null : dt;
    }

    // Last resort: try Date.parse
    const dt = new Date(trimmed);
    return Number.isNaN(dt.getTime()) ? null : dt;
  }

  return null;
}

export default function useFormatDate() {
  const formatDate = useCallback((input, options = {}) => {
    const { locale = 'en-US', format = 'long' } = options;

    const dt = parseDate(input);
    if (!dt) return input ?? '';

    // If user passed a full Intl options object
    if (typeof format === 'object' && format !== null) {
      try {
        return new Intl.DateTimeFormat(locale, format).format(dt);
      } catch {
        return dt.toDateString();
      }
    }

    // Predefined format shortcuts
    let intlOptions;
    switch (format) {
      case 'short':
        intlOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
        break;
      case 'medium':
        intlOptions = { year: 'numeric', month: 'short', day: 'numeric' };
        break;
      case 'iso':
        return dt.toISOString().split('T')[0];
      case 'long':
      default:
        intlOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        break;
    }

    try {
      return new Intl.DateTimeFormat(locale, intlOptions).format(dt);
    } catch {
      return dt.toDateString();
    }
  }, []);

  return formatDate;
}
