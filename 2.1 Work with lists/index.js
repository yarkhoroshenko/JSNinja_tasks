var list = {};
list.add = function add(l, v) {};
list.remove = function remove(l, index) {};
list.create = function create() {
  return {
    head: 'list',
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
