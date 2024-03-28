import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        //   TODO Add Scope Enum Here
        // 'scope-enum': [2, 'always', ['yourscope', 'yourscope']],
        "type-enum": [
            2,
            "always",
            [
                "chore",
                "ci",
                "docs",
                "feat",
                "fix",
                "perf",
                "prod",
                "refactor",
                "revert",
                "spec",
                "style",
                "vercel",
            ],
        ],
    },
};

export default Configuration;
