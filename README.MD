## Demo

<h1 align="center">
  <img src=./demo/demo.gif />
</h1>

## How to install

```bash
// with npm
npm install button-ripple-react
```

#### or

```bash
// with yarn
yarn add button-ripple-react
```

## How to use

```jsx
import { Button } from "button-ripple-react";

const App = () => {
  return <Button>Teste</Button>;
};
```

### Props

| Name                   | Type              | Default   | Description                                                                       |
| ---------------------- | ----------------- | --------- | --------------------------------------------------------------------------------- |
| children:              | `React.ReactNode` | `null`    | The content of the component. Normally a list of `FileItem` components or a label |
| loadingIcon?:          | `React.ReactNode` | `null`    | LoadingIcon custom loading icon.                                                  |
| isLoading?:            | `boolean`         | `false`   | isLoading control the component loading state and disabled button                 |
| width?:                | `string`          | `100%`    | defines the width of the component . Default is 100%.                             |
| height                 | `string`          | `100%`    | defines the component height. Default is 100%                                     |
| backgroundColor?:      | `string`          | `#08090A` | defines the component backgroundColor. Default is '#08090A'                       |
| colorLoading           | `string`          | `#FFFFFF` | defines the component colorLoading. Default is #fff footer                        |
| disableLoadingRotation | `boolean`         | `true`    | defines whether rotation animation is active on loading. The default is true      |
