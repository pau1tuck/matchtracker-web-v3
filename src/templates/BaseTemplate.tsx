import { useTranslations } from "next-intl";

import { NavBar } from "@/components/NavBar";
import { AppConfig } from "@/libs/AppConfig";

type BaseTemplateProps = {
    user?: any;
    MainMenu: React.ReactNode;
    UserMenu?: React.ReactNode;
    children: React.ReactNode;
};

const BaseTemplate: React.FC<BaseTemplateProps> = ({
    user = null,
    MainMenu,
    UserMenu,
    children,
}) => {
    const t = useTranslations("BaseTemplate");

    return (
        <div className="w-full px-1 text-gray-700 antialiased">
            <div className="mx-auto max-w-screen-md">
                <header className="border-b border-gray-300">
                    <NavBar user={user} />
                    <div className="flex justify-between">
                        <nav>
                            <ul className="flex flex-wrap gap-x-5 text-xl">
                                {MainMenu}
                            </ul>
                        </nav>

                        <nav>
                            <ul className="flex flex-wrap gap-x-5 text-xl">
                                {UserMenu}
                            </ul>
                        </nav>
                    </div>
                    <div className="pb-8 pt-16">
                        <h1 className="text-3xl font-bold text-gray-900">
                            {AppConfig.name}
                        </h1>
                        <h2 className="text-xl">{t("description")}</h2>
                    </div>
                </header>

                <main>{children}</main>

                <footer className="border-t border-gray-300 py-8 text-center text-sm">
                    © Copyright {new Date().getFullYear()} {AppConfig.name}.
                    {` ${t("made_with")} `}
                    <a
                        href="https://matchtracker.io"
                        className="text-blue-700 hover:border-b-2 hover:border-blue-700"
                    >
                        MatchTracker
                    </a>
                </footer>
            </div>
        </div>
    );
};

export { BaseTemplate };

/*
PLEASE READ THIS SECTION
I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.* The link doesn't need to appear on every pages, one link on one page is enough.
For example, in the `About` page. Thank you for your support, it'll mean a lot to me
https://creativedesignsguru.com"
*/
