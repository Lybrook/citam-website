/**
 * Formats a date string or Date object to a human-readable format
 * 
 * @param {string|Date} date - The date to format
 * @param {Object} options - Formatting options
 * @param {boolean} options.includeTime - Whether to include the time
 * @param {string} options.locale - The locale to use for formatting
 * @returns {string} - Formatted date string
 */
export function formatDate(date: string | Date, { includeTime = false, locale = 'en-US' } = {}) {
    try {
      const dateObj = typeof date === 'string' ? new Date(date) : date
      
      if (isNaN(dateObj.getTime())) {
        return 'Invalid date'
      }
      
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long' as const,
        year: 'numeric',
        month: 'long' as const,
        day: 'numeric',
        ...(includeTime ? { hour: '2-digit', minute: '2-digit' } : {})
      }
      
      return dateObj.toLocaleDateString(locale, options)
    } catch (error) {
      console.error('Error formatting date:', error)
      return 'Date formatting error'
    }
  }
  
  /**
   * Returns a relative time string (e.g., "2 days ago", "in 3 hours")
   * 
   * @param {string|Date} date - The date to format
   * @returns {string} - Relative time string
   */
  export function getRelativeTimeString(date: string | Date) {
    try {
      const dateObj = typeof date === 'string' ? new Date(date) : date
      
      if (isNaN(dateObj.getTime())) {
        return 'Invalid date'
      }
      
      const now = new Date()
      const diffInMs = dateObj.getTime() - now.getTime()
      const diffInSec = Math.round(diffInMs / 1000)
      const diffInMin = Math.round(diffInSec / 60)
      const diffInHours = Math.round(diffInMin / 60)
      const diffInDays = Math.round(diffInHours / 24)
      
      if (diffInSec < -60) {
        if (diffInMin > -60) {
          return `${Math.abs(diffInMin)} minute${Math.abs(diffInMin) === 1 ? '' : 's'} ago`
        } else if (diffInHours > -24) {
          return `${Math.abs(diffInHours)} hour${Math.abs(diffInHours) === 1 ? '' : 's'} ago`
        } else if (diffInDays > -7) {
          return `${Math.abs(diffInDays)} day${Math.abs(diffInDays) === 1 ? '' : 's'} ago`
        }
      } else if (diffInSec > 60) {
        if (diffInMin < 60) {
          return `in ${diffInMin} minute${diffInMin === 1 ? '' : 's'}`
        } else if (diffInHours < 24) {
          return `in ${diffInHours} hour${diffInHours === 1 ? '' : 's'}`
        } else if (diffInDays < 7) {
          return `in ${diffInDays} day${diffInDays === 1 ? '' : 's'}`
        }
      } else {
        return 'just now'
      }
      
      // If more than a week, use the actual date
      return formatDate(dateObj)
    } catch (error) {
      console.error('Error getting relative time:', error)
      return 'Date error'
    }
  }