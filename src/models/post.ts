import { v4 } from "https://deno.land/std/uuid/mod.ts";

export class Post {
  public id: string;
  constructor(public title: string, public content: string) {
    this.id = v4.generate();
  }

  toJson() {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
    };
  }
}

export const posts = [] as Post[];
