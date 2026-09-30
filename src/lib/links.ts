import * as WebBrowser from 'expo-web-browser';

export * from './urls';

/** Opens a URL in the in-app browser (SFSafariViewController on iOS). */
export async function openUrl(url: string): Promise<void> {
  await WebBrowser.openBrowserAsync(url, {
    presentationStyle: WebBrowser.WebBrowserPresentationStyle.PAGE_SHEET,
  });
}
