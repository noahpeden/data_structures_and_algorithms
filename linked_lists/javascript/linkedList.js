function List(){
  this._length = 0;
  this.head = null;
}

List.prototype.push = function(data){
  this._length++;
  if(this.head === null){
    this.head = new ListNode(data)
  } else {
    insertNode(this.head, data)
    }
  }


function insertNode(rootNode, data){
  if(rootNode.nextNode === null){
    rootNode.nextNode = new ListNode(data)
  } else {
    insertNode(rootNode.nextNode, data);
    }
};


List.prototype.pop = function(){
  this._length--;
  var listNode = this.head;
  this.head = null;
  return listNode;
}
