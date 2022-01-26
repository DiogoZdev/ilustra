export function themeGetter() {
  /**
   * Global Function to determine the application theme
   */
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  } else {
    return "light";
  }
}