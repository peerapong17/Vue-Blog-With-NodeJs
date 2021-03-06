import { Request, Response } from "express";
import { Blog } from "../../entity/Blog";
import { User } from "../../entity/User";

export const getUserBlogs = async (req: Request, res: Response) => {
  try {
    // const id: string = req.user["id"];
    // const blog = await Blog.find({ user: id });
    const user = await User.findOne(req.user["id"], { relations: ["blogs"] });
    const blogs = user.blogs;

    if (!blogs) {
      return res
        .status(404)
        .json({ message: "No blog with giver Id was found" });
    }

    res.status(200).json({ blogs: blogs });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
