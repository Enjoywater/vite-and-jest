### Vite

- yarn create vite <프로젝트이름> --template react-ts
- yarn
- yarn vite

### Jest

- yarn add --dev ts-jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @babel/preset-react @babel/preset-typescript @babel/preset-env identity-obj-proxy jest-environment-jsdom
- `App.tsx` 내부 최상위 `tag`에 `role="main"` 추가
- package.json

```
"scripts": {
  "test": "jest"
}
```

- jest.config.json

```
{
    "roots": ["<rootDir>/test/"],
    "testEnvironment": "jsdom",
    "moduleNameMapper": {
        "\\.(css|less|svg)$": "identity-obj-proxy"
    },
    "setupFilesAfterEnv": ["<rootDir>/test/setup.ts"],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    }
}
```

- babel.config.json

```
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "node": "current"
                }
            }
        ],
        "@babel/preset-react",
        "@babel/preset-typescript"
    ]
}
```

- test/setup.ts

```
import "@testing-library/jest-dom";
```

- test/App.test.tsx

```
import { render, screen } from "@testing-library/react";
import App from "App.tsx path";

test("Renders main element", () => {
    render(<App />);
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
});
```

- yarn test
