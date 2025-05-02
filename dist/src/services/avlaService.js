"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = authenticate;
exports.emitirApolice = emitirApolice;
var axios_1 = require("axios");
var BASE_URL = process.env.NEXT_PUBLIC_AVLA_API || 'https://pmjh82e4r8.execute-api.us-west-2.amazonaws.com/qa';
function authenticate() {
    return __awaiter(this, void 0, void 0, function () {
        var response, token, error_1;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.post("".concat(BASE_URL, "/login"), {
                            username: process.env.AVLA_USERNAME,
                            password: process.env.AVLA_PASSWORD,
                            organizationUnitName: process.env.AVLA_ORG_UNIT,
                        })];
                case 1:
                    response = _c.sent();
                    token = (_a = response.data) === null || _a === void 0 ? void 0 : _a.accessToken;
                    if (!token)
                        throw new Error('Token não encontrado na resposta');
                    return [2 /*return*/, token];
                case 2:
                    error_1 = _c.sent();
                    console.error('Erro ao autenticar:', ((_b = error_1.response) === null || _b === void 0 ? void 0 : _b.data) || error_1.message);
                    throw new Error('Falha na autenticação com a AVLA.');
                case 3: return [2 /*return*/];
            }
        });
    });
}
function emitirApolice(token, payload) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_2;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    console.log('📦 Payload enviado:', payload);
                    console.log('🪪 Authorization Header:', "Bearer ".concat(token));
                    return [4 /*yield*/, axios_1.default.post("".concat(BASE_URL, "/emitir/civil?sourceApp=AMARUSA1609"), payload, {
                            headers: {
                                Authorization: "Bearer ".concat(token),
                                'Content-Type': 'application/json',
                            },
                        })];
                case 1:
                    response = _b.sent();
                    return [2 /*return*/, response.data];
                case 2:
                    error_2 = _b.sent();
                    console.error('🔴 Erro ao emitir apólice:', ((_a = error_2.response) === null || _a === void 0 ? void 0 : _a.data) || error_2.message);
                    throw new Error('Falha ao emitir apólice.');
                case 3: return [2 /*return*/];
            }
        });
    });
}
