import Link from "next/link";
import { useTranslations } from "next-intl";

import LocaleSwitcher from "@/components/LocaleSwitcher";
import { BaseTemplate } from "@/templates/BaseTemplate";

export default function Layout(props: { children: React.ReactNode }) {
    const t = useTranslations("RootLayout");

    return (
        <BaseTemplate
            user={false}
            MainMenu={
                <li>
                    <Link
                        href="/about/"
                        className="border-none text-gray-700 hover:text-gray-900"
                    >
                        {t("about_link")}
                    </Link>
                </li>
            }
            UserMenu={
                <>
                    <li>
                        <Link
                            href="/sign-in/"
                            className="border-none text-gray-700 hover:text-gray-900"
                        >
                            {t("sign_in_link")}
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/sign-up/"
                            className="border-none text-gray-700 hover:text-gray-900"
                        >
                            {t("sign_up_link")}
                        </Link>
                    </li>

                    <li>
                        <LocaleSwitcher />
                    </li>
                </>
            }
        >
            <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
        </BaseTemplate>
    );
}
