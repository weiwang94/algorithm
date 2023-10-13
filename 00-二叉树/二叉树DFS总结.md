# 二叉树 DFS

二叉树的深度优先遍历（DFS），存在递归和循环两种实现方式。那么这两种方式应该如何实现？循环为什么能实现递归，实现递归的本质是什么？本文就是来回答这两个问题的。

## 一、 3 种遍历方式

前序遍历： 先遍历当前节点，再遍历左节点，最后遍历右节点，简记为中左右。
中序遍历： 先遍历左节点，再遍历中间节点，最后遍历右节点，简记为左中右。
后序遍历： 先遍历左节点，再遍历右节点，最后遍历中间节点，简记为左右中。

需要注意的是，上面的遍历顺序对于所有节点都是如此，也就是说不仅对于局部单个节点是这样，对于整体大一点的节点甚至整体最大的节点也是如此。

递归的代码组织方式，就是代码调用自身，循环的重复一个相似的行为，故很容易想到递归的形式组织代码。

总结起来就是**二叉树结构的统一以及遍历方式的单一决定使用递归。**

## 二、递归

    var preorderTraversal = function(root) {
      const traversal = (curr, res) => {
        if (curr === null) {
          return []
        }
        // 遍历顺序中左右，其他同理
        res.push(curr.val)
        res.push(...traversal(curr.left, []))
        res.push(...traversal(curr.right, []))
        return res
      }
      return traversal(root, [])
    };

以上是前序遍历代码，不难看出递归代码的思路，先是定义参数，然后是中止条件，再是遍历的顺序，最后是返回遍历的结果。

其他遍历顺序同理，代码如下。

1， 中序遍历

    var inorderTraversal = function(root) {
      const traversal = (curr, res) => {
        if (curr === null) {
          return []
        }
        res.push(...traversal(curr.left, []))
        res.push(curr.val)
        res.push(...traversal(curr.right, []))
        return res
      }
      return traversal(root, [])
    };

2， 后序遍历

    var postorderTraversal = function(root) {
      const traversal = (curr, res) => {
        if (curr === null) {
          return []
        }
        res.push(...traversal(curr.right, []))
        res.push(...traversal(curr.left, []))
        res.push(curr.val)
        return res
      }
      return traversal(root, [])
    };

递归的本质是带有栈保存数据的循环，故存在用栈储存数据，以循环方式实现的可能。

## 三、循环

##### 1，前序遍历

    var preorderTraversal = function(root) {
      const res = []
      const stack = [root]
      while(stack.length > 0) {
        const curr = stack.pop()
        if (curr !== null) {
          res.push(curr.val)
          stack.push(curr.right)
          stack.push(curr.left)
        } 
      }
      return res
    };

上述代码中，用 res 存储结果，用 stack 来存储调用栈，需要注意的是栈的存储和取出是相反的，故存储的时候要先放右节点再放左节点。因为是前序遍历，不用等到左右节点遍历出结果，就可以直接把结果放进 res，以及更加美妙的是只要顺序出栈就能自然遍历出结果。

##### 2，中序遍历

    var inorderTraversal = function(root) {
      const res = []
      const stack = []
      let curr = root
      while(stack.length > 0 || curr !== null) {
        if (curr !== null) {
          stack.push(curr) 
          curr = curr.left
        } else {
          curr = stack.pop()
          res.push(curr.val)
          curr = curr.right
        }
      }
      return res
    };

上述代码中，用 res 存储结果，用 stack 来存储调用栈。因为是中序遍历，必须先等左节点结果出来才能存储数据，所以必须先循环到最左边的节点，奇妙的是此时这个节点它是一个中间节点，没有左节点，所以可以直接存储，然后对它的右节点进行同样的处理。

##### 3，后序遍历

    var postorderTraversal = function(root) {
      const res = []
      const stack = []
      let curr = root
      let prev = null
      while(stack.length > 0 || curr !== null) {
        while(curr !== null) {
          stack.push(curr)
          curr = curr.left
        }
        curr = stack.pop()
        if (curr.right === null || curr.right === prev) {
          res.push(curr.val)
          prev = curr
          curr = null
        } else {
          stack.push(curr)
          curr = curr.right
        }
      }
      return res
    };

上述代码中，用 res 存储结果，用 stack 来存储调用栈。因为是后序遍历，所以需要把左右节点都遍历完才能处理结果，相对麻烦一些。

思路：依旧是先遍历到最左边，然后向上回溯，此时有两种情况，1、没有右节点，2、有右节点。第一种很简单直接存储数据即可，第二种就需要处理完右节点再来处理当前节点，所以需要一个变量标记上一个处理的是那个节点，如果上一个处理的右节点才可以处理当前节点。 

收获：循环的方式本质就是用栈来模拟递归。而递归存在两个阶段，一个是展开，一个是回溯。因为二叉树的遍历顺序始终是先左后右，所以循环展开要始终向左边展开。回溯的时候，只有后序遍历要先处理右节点，需要记录右节点是否处理。