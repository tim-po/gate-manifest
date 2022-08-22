import express from 'express';
const app = express();
const port = 80;

app.get('/:tokenId', (req, res) => {
  res.json(createJson(req.params.tokenId));
});


function createJson(id: string){
  return {
    "name": `Token ${id}`,
    "description": `Token ${id} is an awesome NFT`,
    "image": `https://somewhere.com/${id}.png`
  }
}

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
