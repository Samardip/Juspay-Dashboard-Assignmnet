import React, { useState } from 'react'

export const HomeContainerHooks = () => {
    const [dark, setDark] = useState(false);
    return {
        dark,
        setDark
    }
}

