export const errorHandler = (error, req, res, next) => {
    const { message = 'Server Error', status = 500 } = error;

    res.status(status).json({
        message
    });
}