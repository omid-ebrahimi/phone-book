import React from 'react';
import {Cell} from "@material/react-layout-grid";

const CellCenter = ({desktopColumns, tabletColumns, phoneColumns, children, ...props}) => {

    const desktopSideColumns = (12 - desktopColumns) / 2;
    const tabletSideColumns = (8 - tabletColumns) / 2;
    const phoneSideColumns = (4 - phoneColumns) / 2;

    return (
        <>
            <Cell desktopColumns={desktopSideColumns} tabletColumns={tabletSideColumns}
                  phoneColumns={phoneSideColumns}/>
            <Cell desktopColumns={desktopColumns} tabletColumns={tabletColumns} phoneColumns={phoneColumns} {...props}>
                {children}
            </Cell>
            <Cell desktopColumns={desktopSideColumns} tabletColumns={tabletSideColumns}
                  phoneColumns={phoneSideColumns}/>
        </>
    );
};

export default CellCenter;