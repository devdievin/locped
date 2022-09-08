
const validateCode = (code) => {
    if (code.length !== 13) {
        return false;
    }

    return true;
}

export function check(code) {
    if (validateCode(code)) {
        console.log("Tem 13 chars");
        return true;
    }
    return false;
}

