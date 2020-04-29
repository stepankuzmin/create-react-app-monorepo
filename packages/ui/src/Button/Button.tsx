import React from 'react';
import { compose, composeU } from '@bem-react/core';

import {
  Button as ButtonDesktop,
  withThemeAction,
  withThemeNormal,
  withThemePseudo,
  withThemeLink,
  withViewDefault,
  withViewAction,
  withViewClear,
  withViewLink,
  withViewPseudo,
  withSizeM,
  withPinCircleCircle,
  withWidthMax
} from '@yandex/ui/Button/desktop';

const withButtonProps = compose(
  composeU(withThemeAction, withThemeNormal, withThemePseudo, withThemeLink),
  composeU(withViewDefault, withViewAction, withViewClear, withViewLink, withViewPseudo),
  withPinCircleCircle,
  withSizeM,
  withWidthMax
);

export const Button = withButtonProps(ButtonDesktop);
