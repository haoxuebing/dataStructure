
//JS实现链式存储栈
function LinkedStack() {
    let Node = function (ele) {
        this.ele = ele;
        this.next = null;
    }

    let length = 0,
        top; //栈顶指针

    //压栈操作
    this.push = function (ele) {
        let node = new Node(ele);
        top ? node.next = top : top = node;
        top = node;
        length++;
        return true;
    }

    //退栈操作
    this.pop = function () {
        let current = top;

        if (top) {
            top = current.next;
            current.next = null;
            length--;
            return current;
        } else {
            return 'null stack';
        }

    }

    this.top = function () {
        return top;
    }
    this.size = function () {
        return length;
    }
    //toString 从栈顶到栈底
    this.toString = function () {
        let string = '';
        current = top;
        while (current) {
            string += current.ele + ' ';
            current = current.next;
        }
        return string;
    }
    this.clear = function () {
        top = null;
        length = 0;
        return true;
    }
}


let myStack = new LinkedStack();
myStack.push('1')
myStack.push('2')
myStack.push('3')
myStack.push('4')
console.log(myStack.toString()) // 4 3 2 1
myStack.pop()
console.log(myStack.toString()) // 3 2 1
myStack.pop()
myStack.pop()
console.log(myStack.pop()) // Node { ele: '1', next: null }
console.log(myStack.pop()) // null stack