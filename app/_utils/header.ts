import { DEFAULT_HEADER_COLORS } from "../_assets/data";


type Colors = React.CSSProperties;

export function changeHeaderColors(colors?: Colors, isDefault?: boolean) {
    const header = document.getElementById('page-header');

    if(!header) return;

    for(const [key, value] of Object.entries(colors || DEFAULT_HEADER_COLORS)) {
        header.style.setProperty(key, value);
        if (isDefault) header.style.setProperty(`${key}-default`, value);
    }
};

export function revertHeaderColorsToDefault() {
    const header = document.getElementById('page-header');

    if(!header) return;

    for(const [key, fallbackValue] of Object.entries(DEFAULT_HEADER_COLORS)) {
        const value = header.style.getPropertyValue(`${key}-default`);
        header.style.setProperty(key, value ? value : fallbackValue);
    };
};

export function setDefaultHeaderColors(colors: Colors) {
    changeHeaderColors(colors, true);
}