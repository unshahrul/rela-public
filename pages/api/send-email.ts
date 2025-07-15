export default async function handler(req: any, res: any) {
  const data = JSON.parse(req.body)
  console.log("Email data received:", data)
  res.status(200).json({ success: true })
}