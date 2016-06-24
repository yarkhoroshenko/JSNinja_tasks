var list = {};
list.add = function add(l, v) {
  var tempList = l;
  while (tempList.next !== null) tempList = tempList.next;
  tempList.next = {};
  tempList.next.value = v;
  tempList.next.next = null;
};
list.remove = function remove(l, i) {};
list.create = function create() {
  return {
    head: 'list',
    size: 0,
    next: null
  };
};
list.search = function search(l, v) {};
list.isEmpty = function isEmpty(l) {};
list.insertAt = function insertAt(l, v, i) {};
list.toArray = function toArray(l) {};
list.size = function size(l) {};
list.get = function get(l, i) {};

window.list = list;
