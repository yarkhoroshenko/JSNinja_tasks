function add(tree, value) {
	let actualNode;
	let temp;
	if (tree === null) {
		tree = {
			value: value,
			left: null,
			right: null,
			parent: null
		}
		return tree;
	}
	temp = Object.assign({}, tree);
	while (temp !== null) {
		actualNode = temp;
		temp = (temp.value > value) ? temp.left : temp.right;
	}
	((actualNode.value > value) ? actualNode.left : actualNode.right) = {
			value: value,
			parent: actualNode,
			right: null,
			left: null
		};
	temp = actualNode;
	while (temp !== null) {
		let height;
		function calculateHeight(node) {
			let leftCount = 0;
			let rightCount = 0;
			if (node.left) leftCount = calculateHeight(node.left);
			if (node.right) rightCount = calculateHeight(node.right);
			return ((leftCount > rightCount) ? leftCount : rightCount) + 1;
		};

		if (calculateHeight(temp.left) - calculateHeight(temp.right) > 1 || calculateHeight(temp.right) - calculateHeight(temp.left) > 1) {
			//error;
		}

		temp = temp.parent;
	}

}