/* 树的遍历 */

const tree = [
  {
    v: 1,
    c: [
      {
        v: 2,
        c: [
          { v: 4, c: null },
          { v: 5, c: null },
        ],
      },
      {
        v: 3,
        c: [
          { v: 6, c: null },
          { v: 7, c: null },
        ],
      },
    ],
  },
];

const dfs = (arr) => {
  const res = [];
  const recursion = (treeArr) => {
    treeArr.forEach((node) => {
      res.push(node.v);
      if (node.c) {
        recursion(node.c);
      }
    });
  };
  recursion(arr);
  return res;
};

console.log("深度优先递归遍历：", dfs(tree));
