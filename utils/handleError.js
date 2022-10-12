const handleHttpError = (res, message = 'Algo Sucedio', code = 403) => {
    res.status(code).send(message);
};

module.exports = {
    handleHttpError
}