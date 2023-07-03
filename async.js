const getDepartmentTree = () => {
  return async () => {
    setTimeout(() => {
      return [111]
    })
  }
};

console.log(getDepartmentTree()())