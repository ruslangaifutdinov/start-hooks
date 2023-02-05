import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ComponentList = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        const config = {
            ...child.props,
            index: index + 1
        };
        return React.cloneElement(child, config);
    });
};

const Component = ({ index }) => {
    return <div>{index}. Компонент списка</div>;
};

Component.propTypes = {
    index: PropTypes.number
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ComponentList>
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
                <Component />
            </ComponentList>
        </CollapseWrapper>
    );
};

export default ChildrenExercise;
