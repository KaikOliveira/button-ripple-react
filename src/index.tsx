import * as React from "react";

import * as S from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  /**
   * @param loadingMessage The message to be shown when component is loading. Default is 'loading'
   */
  loadingMessage?: string;
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
}

const ButtonBase: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = (
  {
    children,
    onClick,
    backgroundColor = "#08090A",
    colorLoading = "#fff",
    isLoading = false,
    maxWidth,
    height,
    ...rest
  }: ButtonProps,
  refBtn
) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const [coords, setCoords] = React.useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = React.useState(false);

  const ref = refBtn || buttonRef;

  React.useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  React.useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  return (
    <S.Container
      backgroundColor={backgroundColor}
      onClick={(e: any) => {
        const rect = e.target.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
      }}
      disabled={isLoading || rest.disabled}
      isLoading={isLoading}
      maxWidth={maxWidth}
      maxHeight={height}
      ref={ref}
      {...rest}
    >
      {isRippling && (
        <S.Ripple
          backgroundColor={backgroundColor}
          left={coords.x}
          top={coords.y}
        />
      )}
      <S.LoadingComponent color={colorLoading} isShow={isLoading}>
        <span>loading</span>
      </S.LoadingComponent>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export const Button = React.forwardRef(ButtonBase);
