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
var express_1 = __importDefault(require("express"));
var processImages_1 = __importDefault(require("../../utilities/processImages"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var route = express_1.default.Router();
/*route.get(
    "/",
    async (req: express.Request, res: express.Response): Promise<void> => {
        const image = await getImage(
            req.query.imageName as string,
            parseInt(req.query.width as string),
            parseInt(req.query.height as string)
        );

        if (image) {
            res.status(200).sendFile(image);
        } else {
            try {
                const width = parseInt(req.query.width as string);
                const height = parseInt(req.query.height as string);
                if (!width || !height) {
                    res.status(400).send(
                        "An error occurred with width or height"
                    );
                    return;
                }
                const filePath = await resizeImage(
                    req.query.imageName as string,
                    width,
                    height
                );
                res.status(200).sendFile(filePath);
            } catch (err) {
                if (err instanceof Error) {
                    res.status(404).send(
                        "Provide a valid image, with a valid width and height"
                    );
                } else {
                    res.send("An error occurred when resize the image");
                }
            }
        }
    }
);*/
route.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var imageName, width, height, filePath, outputImages;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                imageName = req.query.imageName;
                width = parseInt(req.query.width);
                height = parseInt(req.query.height);
                if (!imageName || !width || !height) {
                    return [2 /*return*/, res.status(404).send("An error occurred, please insert an image name, width and height")];
                }
                filePath = path_1.default.resolve('iamges/full', "".concat(imageName, ".jpg"));
                if (!fs_1.default.existsSync(filePath)) {
                    return [2 /*return*/, res.status(404).send("File don't exist! Try another name")];
                }
                outputImages = path_1.default.resolve('images/thumb', "".concat(width, "-").concat(height, "-").concat(imageName, ".jpg"));
                if (!fs_1.default.existsSync(outputImages)) return [3 /*break*/, 1];
                res.sendFile(outputImages);
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, (0, processImages_1.default)(filePath, outputImages, width, height)];
            case 2:
                outputImages = _a.sent();
                res.sendFile(outputImages);
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.default = route;