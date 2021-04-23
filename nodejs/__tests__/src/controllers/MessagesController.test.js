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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var http_1 = require("../../../src/http");
var database_1 = require("../../../src/database");
var UsersRepository_1 = require("../../../src/repositories/UsersRepository");
describe('Users', function () {
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var cn;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1.connection];
                case 1:
                    cn = _a.sent();
                    return [4 /*yield*/, cn.dropDatabase()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, cn.runMigrations({
                            transaction: "all"
                        })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Validar criando Messages', function () { return __awaiter(void 0, void 0, void 0, function () {
        var user, user_id, response, response_error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1.connection];
                case 1:
                    user = (_a.sent()).getCustomRepository(UsersRepository_1.UsersRepository)
                        .create({ email: "teste@teste.com" });
                    return [4 /*yield*/, database_1.connection];
                case 2: return [4 /*yield*/, (_a.sent()).getCustomRepository(UsersRepository_1.UsersRepository)
                        .save(user)];
                case 3:
                    _a.sent();
                    user_id = user.id;
                    return [4 /*yield*/, supertest_1.default(http_1.http).post('/messages').send({
                            user_id: user_id,
                            text: "Olá, preciso de ajuda ajudar!"
                        })];
                case 4:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [4 /*yield*/, supertest_1.default(http_1.http).post('/messages').send({
                            user_id: "as1dd2a1sda-asdjansnsdjk-fghfghfg-111",
                            text: "Olá, preciso de ajuda ajudar!"
                        })];
                case 5:
                    response_error = _a.sent();
                    expect(response_error.status).toBe(400);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Validar mostrar Messages', function () { return __awaiter(void 0, void 0, void 0, function () {
        var user, id, response, response_error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1.connection];
                case 1:
                    user = (_a.sent()).getCustomRepository(UsersRepository_1.UsersRepository)
                        .create({ email: "teste@teste.com" });
                    return [4 /*yield*/, database_1.connection];
                case 2: return [4 /*yield*/, (_a.sent()).getCustomRepository(UsersRepository_1.UsersRepository)
                        .save(user)];
                case 3:
                    _a.sent();
                    id = user.id;
                    return [4 /*yield*/, supertest_1.default(http_1.http).get("/messages/" + id)];
                case 4:
                    response = _a.sent();
                    expect(response.status).toBe(200);
                    return [4 /*yield*/, supertest_1.default(http_1.http).get('/messages/as1dd2a1sda-asdjansnsdjk-fghfghfg-111')];
                case 5:
                    response_error = _a.sent();
                    expect(response_error.status).toBe(400);
                    return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var cn;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1.connection];
                case 1:
                    cn = _a.sent();
                    return [4 /*yield*/, cn.dropDatabase()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
