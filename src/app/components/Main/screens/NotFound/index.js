import React from 'react';
import {Grid, Row} from '@material/react-layout-grid/dist/index';
import {Headline1, Headline5} from "@material/react-typography/dist/index";
import CellCenter from "../../../../../components/CellCenter";

export default function NoMatch({ location }) {
    return (
        <Grid>
            <Row>
                <CellCenter desktopColumns={10} tabletColumns={8} phoneColumns={4}>
                    <Headline1 className='color-error'>404 - Not Found</Headline1>
                    <Headline5>
                        No match for <code>{location.pathname}</code>
                    </Headline5>
                </CellCenter>
            </Row>
        </Grid>
    );
}
