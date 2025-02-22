/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2022 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import * as React from 'react';
import type { HighlightArea } from './types/RenderHighlightsProps';

export const getCssProperties = (area: HighlightArea): React.CSSProperties => {
    return {
        left: `${area.left}%`,
        top: `${area.top}%`,
        height: `${area.height}%`,
        width: `${area.width}%`,
    };
};
