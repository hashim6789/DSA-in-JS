isBST(node, min = null, max = null) {
  //   if (node === null) return true;

  //   if (
  //     (min !== null && node.data <= min) ||
  //     (max !== null && node.data >= max)
  //   ) {
  //     return false;
  //   }

  //   return (
  //     this.isBST(node.left, min, node.data) &&
  //     this.isBST(node.right, node.data, max)
  //   );
  // }