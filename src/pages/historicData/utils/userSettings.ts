import type { UserWorkspaceSettings } from '../types';

const USER_SETTINGS_KEY = 'historicalData_userSettings';

/**
 * Get user workspace settings from localStorage
 */
export function getUserSettings(): UserWorkspaceSettings {
  try {
    const stored = localStorage.getItem(USER_SETTINGS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to load user settings:', error);
  }
  return {};
}

/**
 * Save user workspace settings to localStorage
 */
export function saveUserSettings(settings: UserWorkspaceSettings): void {
  try {
    localStorage.setItem(USER_SETTINGS_KEY, JSON.stringify(settings));
  } catch (error) {
    console.error('Failed to save user settings:', error);
  }
}

/**
 * Get the default workspace ID for the current user
 */
export function getDefaultWorkspaceId(): string | undefined {
  const settings = getUserSettings();
  return settings.defaultWorkspaceId;
}

/**
 * Set the default workspace ID for the current user
 */
export function setDefaultWorkspaceId(workspaceId: string | undefined): void {
  const settings = getUserSettings();
  settings.defaultWorkspaceId = workspaceId;
  saveUserSettings(settings);
}

/**
 * Clear all user settings
 */
export function clearUserSettings(): void {
  try {
    localStorage.removeItem(USER_SETTINGS_KEY);
  } catch (error) {
    console.error('Failed to clear user settings:', error);
  }
}
