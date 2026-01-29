type Role = "ADMIN" | "WRITER" | "USER";

const normalizeUser = (data: any, role: Role) => {
    return {
        id: data.id,
        email: data.email,
        role,
        accessToken: data.accessToken,
    };
};
