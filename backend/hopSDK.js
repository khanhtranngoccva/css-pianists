import { Hop } from "@onehop/js";

const myToken = "ptk_c18wNDkwNDI3MWE4ODYwNzcxZjVkY2ZhODU3YjJjMjkyN181MDUxNDIzMTcwNjE5ODIyNA";
export const hop = new Hop(myToken);

await hop.projects.secrets.create(
    'RANDOM_NUMBER',
    Math.floor(Math.random()*100).toString,
    );