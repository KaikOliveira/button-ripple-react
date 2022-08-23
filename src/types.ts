import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
   * @param width defines the width of the component. Default is 100%
   */
  width?: string;
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
}

export interface Coordinates {
  x: number;
  y: number;
}

export interface RippleProps {
  backgroundColor: string;
  left: number;
  top: number;
}

export interface ButtonContainerProps {
  isLoading: boolean;
  backgroundColor: string;
  maxWidth?: string;
  maxHeight?: string;
}

export type LoadingComponentProps = {
  isShow: boolean;
  color: string;
  disableLoadingRotation?: boolean;
};
