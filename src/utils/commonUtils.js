
export const convertProxytoObject = (proxy) => {
    return JSON.parse(JSON.stringify(proxy))
}

export const hasKeyObject = (object) => {
    const keys = Object.keys(convertProxytoObject(object))
    if (keys.length === 0) return false;
    return true;
}