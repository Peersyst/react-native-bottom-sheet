import type { ReactNode, RefObject } from 'react';
import type { BottomSheetModalPrivateMethods } from '../bottomSheetModal';

export interface BottomSheetModalRef {
  key: string;
  ref: RefObject<BottomSheetModalPrivateMethods>;
  willUnmount: boolean;
}

export interface BottomSheetModalProviderProps {
  children?: ReactNode;
  /**
   * Whether to render the PortalProvider component.
   * For some cases where you already have a PortalProvider higher in the tree.
   * Set to false to avoid issues with multiple PortalProviders.
   * @default true
   */
  shouldRenderPortalProvider?: boolean;
}
