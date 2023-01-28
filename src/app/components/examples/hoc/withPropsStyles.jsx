import React from "react";
import CardWrapper from "../../common/Card";

// eslint-disable-next-line react/display-name
const withPropsStyles = (Component) => (props) => {
    return (
        <CardWrapper>
            <Component {...props} name="new Name" />
        </CardWrapper>
    );
};

export default withPropsStyles;
