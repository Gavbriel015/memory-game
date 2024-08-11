import { useState } from "react";

export function useSettingsGame() {
    const [settings, setSettings] = useState();
    return [settings, setSettings];
}
