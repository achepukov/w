"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const posts_1 = __importDefault(require("./routes/posts"));
const app = express_1.default();
const { PORT } = process.env;
app.get("/", (req, res) => {
    res.send('API');
});
app.use(body_parser_1.default.json());
app.use('/posts', posts_1.default);
const errorHandler = (_a, req, res, next) => {
    var { statusCode = 400 } = _a, err = __rest(_a, ["statusCode"]);
    if (res.headersSent) {
        return next(err);
    }
    res.status(statusCode);
    res.send(err);
};
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map