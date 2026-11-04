export enum Theme {
  Light = "light",
  Dark = "dark",
}

export const DEFAULT_THEME: Theme = Theme.Dark;

export const THEME_STORAGE_KEY = "theme";

export const isTheme = (value: string | null): value is Theme =>
  value === Theme.Light || value === Theme.Dark;

/**
 * Chạy đồng bộ trong <head> trước lần paint đầu tiên để tránh nháy theme.
 * Nếu chưa có lựa chọn đã lưu thì giữ DEFAULT_THEME (đã render sẵn trên <html>).
 */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="${Theme.Light}"||t==="${Theme.Dark}")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;
