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
exports.resizeImage = exports.getImage = void 0;
var fs_1 = require("fs");
var path_1 = __importDefault(require("path"));
var sharp_1 = __importDefault(require("sharp"));
var getImage = function (imageName, width, height) { return __awaiter(void 0, void 0, void 0, function () {
    var imagesDirectory, filePath, _a, err_1, errorMessage;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                imagesDirectory = path_1.default.join(__dirname, '/images');
                filePath = path_1.default.join(imagesDirectory, "".concat(imageName.toLowerCase(), "(").concat(width, "x").concat(height, ").jpg"));
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 5]);
                return [4 /*yield*/, fs_1.promises.readdir(imagesDirectory)];
            case 2:
                _b.sent();
                return [3 /*break*/, 5];
            case 3:
                _a = _b.sent();
                return [4 /*yield*/, fs_1.promises.mkdir(imagesDirectory)];
            case 4:
                _b.sent();
                return [3 /*break*/, 5];
            case 5:
                _b.trys.push([5, 7, , 8]);
                return [4 /*yield*/, fs_1.promises.readFile(filePath, { flag: 'r' })];
            case 6:
                _b.sent();
                return [3 /*break*/, 8];
            case 7:
                err_1 = _b.sent();
                errorMessage = 'Got an error trying to read the file';
                if (err_1 instanceof Error) {
                    errorMessage = "".concat(errorMessage, ": ").concat(err_1.message);
                }
                console.log(errorMessage);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/, filePath];
        }
    });
}); };
exports.getImage = getImage;
var resizeImage = function (imageName, width, height) { return __awaiter(void 0, void 0, void 0, function () {
    var imagesPath, outputImages, resizedImage, _a, _b, err_2;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                imagesPath = path_1.default.join(__dirname, '/images/', "".concat(imageName.toLowerCase(), "(").concat(width, "x").concat(height, ").jpg"));
                outputImages = path_1.default.join(__dirname, '/images', "".concat(imageName.toLowerCase(), "(").concat(width, "x").concat(height, ").jpg"));
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, fs_1.promises.open(imagesPath, 'r')];
            case 2:
                resizedImage = _c.sent();
                return [3 /*break*/, 4];
            case 3:
                _a = _c.sent();
                throw new Error("Cannot find the specified image!");
            case 4:
                _c.trys.push([4, 7, , 8]);
                _b = sharp_1.default;
                return [4 /*yield*/, resizedImage.readFile()];
            case 5: return [4 /*yield*/, _b.apply(void 0, [_c.sent()]).resize({ width: width, height: height }).toFile(outputImages)];
            case 6:
                _c.sent();
                resizedImage.close();
                return [3 /*break*/, 8];
            case 7:
                err_2 = _c.sent();
                resizedImage.close();
                if (err_2 instanceof Error) {
                    console.log("Cannot resize the image: ".concat(err_2.message));
                }
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/, outputImages];
        }
    });
}); };
exports.resizeImage = resizeImage;
