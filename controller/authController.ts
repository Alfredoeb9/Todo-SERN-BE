import { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    console.log(email);
    return res.status(200).json({ msg: "yes" });
  } catch (error) {}
};
