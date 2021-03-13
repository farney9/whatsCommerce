export const validateEmail = (text) => {
    let regularExpression = /^\w+([\.-]?\w+)*@\w([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regularExpression.test(text) === false) {
        return false;
    } else {
        return true;
    }
}