import { initializeSearch } from './searchModule.js';
import { setupDarkModeToggle } from './darkModeManager.js';

export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const paramValue = urlParams.get(param);
  
    return paramValue;
  }

  
// utils.mjs

/**
 * Load HTML from a specified URL and return as text
 */
export async function loadHtml(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.text();
    } catch (error) {
      console.error('Failed to load HTML:', error);
    }
  }
  
  /**
   * Render HTML from a URL into a specified DOM element
   */
  export async function renderHtml(url, elementId) {
    const htmlContent = await loadHtml(url);
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = htmlContent;
    } else {
      console.error(`Element with id '${elementId}' not found`);
    }
  }
  
  /**
   * Load header and footer HTML and render into page
   */
  export async function loadHeaderFooter() {
    await renderHtml('/partials/header.html', 'main-header');
    await renderHtml('/partials/footer.html', 'main-footer');
    initializeSearch();
    setupDarkModeToggle();
  }
  