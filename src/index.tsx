import * as React from "react";

import * as S from "./styles";
import { LoadingIcon } from "./svg/icons";
import { ButtonProps, Coordinates } from "./types";

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
    width,
    height,
    loadingIcon,
    disableLoadingRotation = false,
    ...rest
  }: ButtonProps,
  refBtn
) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const [coords, setCoords] = React.useState<Coordinates>({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = React.useState(false);

  const ref = refBtn || buttonRef;

  React.useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
      return;
    }

    setIsRippling(false);
  }, [coords]);

  React.useEffect(() => {
    if (!isRippling) {
      setCoords({ x: -1, y: -1 });
    }
  }, [isRippling]);

  function handleButtonClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    setCoords({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
    onClick && onClick(event);
  }

  return (
    <S.Container
      backgroundColor={backgroundColor}
      onClick={handleButtonClick}
      disabled={isLoading || rest.disabled}
      isLoading={isLoading}
      maxWidth={width}
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
      <S.LoadingComponent
        disableLoadingRotation={disableLoadingRotation}
        color={colorLoading}
        isShow={isLoading}
      >
        {loadingIcon || <LoadingIcon />}
      </S.LoadingComponent>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export const Button = React.forwardRef(ButtonBase);
