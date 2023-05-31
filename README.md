# Circum Icons icons for deno / Preact

**License** [MPL-2.0 license](https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE)

**Project** [https://circumicons.com/](https://circumicons.com/)

[See available icons here](https://react-icons.github.io/react-icons/icons?name=ci)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/ci":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-ci@1.0.5/mod.ts",
    "react-icons/ci/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-ci@1.0.5/ico/",
  }
}
```

## Direct import sample

```ts
import { CiAirportSign1 } from "https://deno.land/x/react_icons_ci@1.0.5/mod.ts"
```

## import_map import sample

```ts
import { CiAirportSign1 } from "react-icons/ci"
```

## minimal import

```ts
import { CiAirportSign1 } from "react-icons/ci/CiAirportSign1.ts"
```

## minimal import using default export

```ts
import CiAirportSign1 from "react-icons/ci/CiAirportSign1.ts"
```

