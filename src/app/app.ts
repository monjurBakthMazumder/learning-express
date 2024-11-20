import express, { Request, Response } from 'express';
const app = express()
const port = 3000

app.use(express.json())
app.use(express.text())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.post('/', (req: Request, res: Response) => {
  console.log(req.body);
  // res.send("got data")
  res.json({
    message: "Successfully received data"
  })
})

export default app;