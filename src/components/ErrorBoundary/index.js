import React, {Component} from 'react';
import {Grid, Row} from "@material/react-layout-grid";
import CellCenter from "../CellCenter";
import {Headline1, Headline5} from "@material/react-typography";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { errorMessage: null};
    }

    static getDerivedStateFromError(error) {
        return { errorMessage: error.message };
    }

    componentDidCatch(error, errorInfo) {
        // console.debug(errorInfo.componentStack);
    }

    render() {
        const {errorMessage} = this.state;

        if (errorMessage) {
            return (
                <Grid>
                    <Row>
                        <CellCenter desktopColumns={10} tabletColumns={8} phoneColumns={4}>
                            <Headline1 className='color-error'>Something went wrong</Headline1>
                            <Headline5>
                                Error Message: <code>{errorMessage}</code>
                            </Headline5>
                        </CellCenter>
                    </Row>
                </Grid>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
