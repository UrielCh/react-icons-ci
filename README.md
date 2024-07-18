# Circum Icons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/ci)](https://jsr.io/@preact-icons/ci)

**License** [MPL-2.0 license](https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE)

**Project** [https://circumicons.com/](https://circumicons.com/)

[See available icons here](https://react-icons.deno.dev/ci)

## install the module

```bash
deno add @preact-icons/ci
dnpx jsr add @preact-icons/ci
pnpm dlx jsr add @preact-icons/ci
bunx jsr add @preact-icons/ci
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { CiAirportSign1 } from "@preact-icons/ci"
```

## import a single icon, downloading just one icon

```ts
import { CiAirportSign1 } from "react-icons/ci/CiAirportSign1"
```

or using default export

```ts
import CiAirportSign1 from "react-icons/ci/CiAirportSign1.ts"
```
