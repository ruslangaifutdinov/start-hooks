import React, { useState, useEffect, useRef, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});

    const withOutCallBack = useRef(0);
    const withCallBack = useRef(0);

    const validateWithOutCallback = (data) => {
        console.log(data);
    };

    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);

    const handleChange = ({ target }) => {
        setData((preState) => ({
            ...preState,
            [target.name]: target.value
        }));
    };

    useEffect(() => {
        validateWithOutCallback(data);
        validateWithCallback(data);
    }, [data]);

    useEffect(() => {
        withOutCallBack.current++;
    }, [validateWithOutCallback]);

    useEffect(() => {
        withCallBack.current++;
    }, [validateWithCallback]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render without callback: {withOutCallBack.current}</p>
            <p>Render with callback: {withCallBack.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                value={data.email || ""}
                name="email"
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
