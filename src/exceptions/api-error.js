module.exports = class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnauthorizedError() {
        return new ApiError(401, "Користувач не авторизований");
    }

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors);
    }

    static TaskNotFound() {
        return new ApiError(404, "Task not found", 404);
    }
    
    static DuplicateTask() {
        return new ApiError(400, "Task is exist in your todo list!");
    }
};