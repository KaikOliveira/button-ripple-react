# Button Ripple

## Demo

<h1 align="center">
  <img src=./demo/Animation.gif />
</h1>

## How to install

```bash
 yarn add button-ripple-react or npm install button-ripple-react
```

## How to use

```js
import { Button } from "button-ripple-react";

const App = () => {
  return <Button>Teste</Button>;
};
```

## How use props

```js
  children: React.ReactNode;
  /**
   * @param loadingIcon custom loading icon.
   */
  loadingIcon?: React.ReactNode;
  /**
   * @param isLoading control the component loading state
   */
  isLoading?: boolean;
  /**
   * @param maxWidth defines the maximum width of the component
   */
  maxWidth?: string;
  /**
   * @param height defines the component height. Default is 100%
   */
  height?: string;
  /**
   * @param backgroundColor defines the component backgroundColor. Default is '#08090A'
   */
  backgroundColor?: string;
  /**
   * @param colorLoading defines the component colorLoading. Default is #fff
   */
  colorLoading?: string;
  /**
   * @param disableLoadingRotation defines whether rotation animation is active on loading. The default is true
   */
  disableLoadingRotation?: boolean;
```
