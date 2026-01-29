type NormalizedUser = {
    id: string;
    role: "ADMIN" | "WRITER" | "USER";
    accessToken: string;
};
