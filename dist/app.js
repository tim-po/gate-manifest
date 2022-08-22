"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 80;
app.get('/:tokenId', (req, res) => {
    res.json(createJson(req.params.tokenId));
});
function createJson(id) {
    return {
        "name": `Token ${id}`,
        "description": `Token ${id} is an awesome NFT`,
        "image": `https://somewhere.com/${id}.png`
    };
}
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map