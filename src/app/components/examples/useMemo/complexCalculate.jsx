import React, { useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const factorial = (n) => {
    return n ? n * factorial(n - 1) : 1;
};

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(1);
    const [otherState, setOtherState] = useState(false);

    useEffect(() => {
        console.log("render");
    });

    const buttonColor = otherState ? "primary" : "secondary";

    const fact = useMemo(() => factorial(value), [value]);

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Результат вычисления факториала: {fact}</p>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((prevState) => prevState + 100)}
                >
                    Увеличить
                </button>
                <button
                    className="btn btn-success mx-2 ms-md-2"
                    onClick={() => setValue((prevState) => prevState - 100)}
                >
                    Уменьшить
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"btn ms-md-2 btn-" + buttonColor}
                    onClick={() => setOtherState((prevState) => !prevState)}
                >
                    Уменьшить
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
