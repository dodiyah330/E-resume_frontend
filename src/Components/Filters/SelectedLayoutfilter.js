import React from "react";
import { Route } from "react-router";
import { useState, useEffect } from 'react';


export default function SelectedLayoutfilter({ component: Component, ...restOfProps }) {
    const [selectedLayout, setSelectedLayout] = useState(false);

    useEffect(() => {
        if (restOfProps.selectedLayout === restOfProps.id) {
            setSelectedLayout(true)
        }
    },[ restOfProps])

    return (
        <Route
            {...restOfProps}
            render={(props) =>
                selectedLayout && <Component {...props} {...restOfProps} />
            }
        />
    );
}



