# Circum Icons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/ci)](https://jsr.io/@preact-icons/name)

**License** [MPL-2.0 license](https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE)

**Project** [https://circumicons.com/](https://circumicons.com/)

[See available icons here](https://react-icons.deno.dev/ci)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.10",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/ci": "jsr:@preact-icons/ci@^1.0.11/mod.ts",
    "react-icons/ci/": "jsr:@preact-icons/ci@^1.0.11/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib ci

```ts
import { CiAirportSign1 } from "jsr:preact-icons/ci@1.0.11/mod.ts"
```

## import_map import an icon from all icons

```ts
import { CiAirportSign1 } from "react-icons/ci"
```

## import a single icon, downloading just one icon

```ts
import { CiAirportSign1 } from "react-icons/ci/CiAirportSign1.ts"
```

or using default export

```ts
import CiAirportSign1 from "react-icons/ci/CiAirportSign1.ts"
```

