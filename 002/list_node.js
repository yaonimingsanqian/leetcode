/**
题目：求两个链表的和，低位在前，高位在后
(1->3->7)+(1->3->7) = (2->6->4->1)
**/


var ListNode = (function(val){
	function C(val){
		this.val = val;
	    this.next = null;
	}
	return C;
})();

function ln_sum(ln1,ln2){
	var node = new ListNode(0);
	var n1 = ln1,n2 = ln2,t = node;
	var sum = 0;
	while(n1 != null && n2 != null){
		if(n1 != null){
		   sum += n1.val;
		   n1 = n1.next;
		}
		if(n2 != null){
		   sum += n2.val;
		   n2 = n2.next;
		}
		t.next = new ListNode(sum%10); //
		t = t.next;
		sum  = parseInt(sum/10);

	}
	if(sum == 1){ //进位
	   t.next = new ListNode(1);
	}
	return node.next;
}

var l1 = new ListNode(7);
l1.next = new ListNode(8);
 l1.next.next = new ListNode(1);

var l2 = new ListNode(7);
l2.next = new ListNode(8);
l2.next.next = new ListNode(9);

var res = ln_sum(l1,l2);

