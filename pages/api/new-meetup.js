function handler(res, req) {
  if (req.method === "post") {
    const data = req.body;

    const { title, image, address, description } = data;
  }
}

export default handler;
