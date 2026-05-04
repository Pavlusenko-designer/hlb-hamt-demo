const fs = require("fs");
const path = require("path");
const { hasValidSession } = require("./lib/auth");

const scriptPath = path.resolve(__dirname, "../../private/main.js");

exports.handler = async (event) => {
    if (!hasValidSession(event)) {
        return {
            statusCode: 401,
            headers: {
                "Cache-Control": "no-store"
            },
            body: "Unauthorized"
        };
    }

    return {
        statusCode: 200,
        headers: {
            "Cache-Control": "no-store",
            "Content-Type": "application/javascript; charset=utf-8"
        },
        body: fs.readFileSync(scriptPath, "utf8")
    };
};
