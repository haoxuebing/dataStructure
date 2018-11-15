function LinkedList() {
    let Node = function (ele) {
        this.ele = ele;
        this.next = null;
    }

    let length = 0,
        head = null; //头指针

    //向尾部追加元素
    this.append = function (ele) {
        let node = new Node(ele),
            temp; //临时指针

        if (!head) {
            head = node;
        } else {
            temp = head;
            while (temp.next) {
                temp = temp.next
            }
            temp.next = node;
        }
        length++;
        return true;
    }

    //插入到指定位置
    this.insert = function (position, ele) {
        if (position >= 0 && position < length) {
            let node = new Node(ele),
                temp = head,
                index = 0,
                previous;

            if (position == 0) {
                node.next = temp;
                head = node;
            } else {
                while (index++ < position) {
                    previous = temp;
                    temp = temp.next;
                }
                node.next = temp;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }

    //删除指定位置元素
    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            let temp = head,
                previous,
                index = 0;

            if (position == 0) {
                head = head.next;
            } else {
                while (index++ < position) {
                    previous = temp;
                    temp = temp.next;
                }

                previous.next = temp.next;
            }
            length--;
            return temp.ele;
        } else {
            return null;
        }
    }

    //删除所有值为ele的元素
    this.removeEle = function (ele) {
        let temp = head,
            previous,
            num = 0;
        if (ele == temp.ele) {
            head = head.next;
            length--;
            num++;
        }

        while (temp.next) {
            previous = temp;
            temp = temp.next;
            if (temp.ele == ele) {
                previous.next = temp.next;
                length--;
                num++;
            }
        }
        return num;
    }

    //删除最后一个元素
    this.pop = function () {
        let temp = head,
            previous = temp;
        if (length < 1) {
            return false;
        }
        if (length == 1) {
            head = null;
            length--;
            return temp.ele;
        }
        while (temp.next) {
            previous = temp;
            temp = temp.next;
        }
        previous.next = null;
        length--;
        return temp.ele;
    }

    this.indexOf = function (ele) {
        let temp = head,
            index = 0;

        while (temp) {
            if (temp.ele == ele) {
                return index;
            }
            temp = temp.next;
            index++;
        }
        return -1;

    }

    this.toString = function () {
        let temp = head,
            string = '';

        while (temp) {
            string += temp.ele + ' ';
            temp = temp.next;

        }
        return string;
    }
    this.length = function () {
        return length;
    }
    this.isEmpty = function () {
        return length === 0;
    };
    this.getHead = function () {
        return head.ele;
    }
}

let mylist = new LinkedList();
mylist.append('A');
mylist.append('B');
mylist.append('C');
mylist.append('D');
mylist.append('C');
mylist.append('B');
mylist.append('A');
console.log(mylist.toString());
console.log(mylist.pop());
console.log(mylist.toString());
console.log('移除%d个C', mylist.removeEle('C'));
console.log(mylist.toString());
console.log(mylist.length());
console.log(mylist.getHead());

console.log(mylist.indexOf('C'))