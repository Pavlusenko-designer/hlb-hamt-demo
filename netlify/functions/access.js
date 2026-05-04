const fs = require("fs");
const path = require("path");
const { createSessionCookie, hasValidSession, verifyPassword } = require("./lib/auth");

const homepagePath = path.resolve(__dirname, "../../private/index.html");

function protectedHomepage() {
    return fs
        .readFileSync(homepagePath, "utf8")
        .replace('src="main.js"', 'src="/protected-main.js"');
}

function response(statusCode, body, headers = {}) {
    return {
        statusCode,
        headers: {
            "Cache-Control": "no-store",
            ...headers
        },
        body
    };
}

exports.handler = async (event) => {
    if (event.httpMethod === "GET") {
        if (!hasValidSession(event)) {
            return response(401, "Unauthorized");
        }

        return response(200, protectedHomepage(), {
            "Content-Type": "text/html; charset=utf-8"
        });
    }

    if (event.httpMethod !== "POST") {
        return response(405, "Method Not Allowed", {
            Allow: "GET, POST"
        });
    }

    let payload = {};
    try {
        payload = JSON.parse(event.body || "{}");
    } catch {
        return response(400, "Bad Request");
    }

    if (!verifyPassword(payload.password)) {
        return response(401, "Unauthorized");
    }

    return response(200, protectedHomepage(), {
        "Content-Type": "text/html; charset=utf-8",
        "Set-Cookie": createSessionCookie(event)
    });
};
