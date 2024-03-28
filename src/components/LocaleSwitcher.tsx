"use client";

import { useLocale } from "next-intl";
import type { ChangeEventHandler } from "react";

import { AppConfig } from "@/libs/AppConfig";
import { usePathname, useRouter } from "@/libs/i18nNavigation";

export default function LocaleSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
        router.push(pathname, { locale: event.target.value });
        router.refresh();
    };

    return (
        <select
            defaultValue={locale}
            onChange={handleChange}
            className="border border-gray-300 font-medium focus:outline-none focus-visible:ring"
        >
            {AppConfig.locales.map((elt) => (
                <option key={elt} value={elt}>
                    {elt.toUpperCase()}
                </option>
            ))}
        </select>
    );
}
