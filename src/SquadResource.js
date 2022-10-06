export const options = {
    host: "http://localhost",
    port: "8080",
    path: "/squad/"
};

export function getSquad(){
    return options.host + ":" + options.port + options.path
}