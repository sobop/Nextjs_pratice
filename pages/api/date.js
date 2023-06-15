export default async function handler(a, b) {
  return b.status(200).json(Date());
}
