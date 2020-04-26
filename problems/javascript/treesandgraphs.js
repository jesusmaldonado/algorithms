{\rtf1\ansi\ansicpg1252\cocoartf1404\cocoasubrtf470
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 //Write a node class\
\
function Node(options) \{\
	this.children = [];\
	this.value = options.value || nil;\
\}\
\
//Given a list of numbers, construct a binary search tree\
\
function BinaryNode(option)\{\
	this.right = options.right || nil;\
	this.left = options.left || nil;\
	this.value = options.value || nil;\
\}\
\
\
var array = [1,2,3,19,22,34,5,6,300];\
\
function constructTree(array) \{\
	let sortedArray = array.sort();\
	let lastNode = nil;\
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0
\cf0 	let nextNode = nil;\
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0
\cf0 	array.forEach((element, idx) => \{\
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0
\cf0 		nextNode = new BinaryNode();	\
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0
\cf0 		nextNode.left = lastNode;\
		nextNode.value = element;\
		if (lastNode) \{\
			lastNode.right = nextNode;	\
		\}\
		lastNode = nextNode;\
	\});\
	return nextNode;\
\}\
\
function inOrderTraversal(root) \{\
	var node = root;\
	if (node !== null) \{\
		inOrderTraversal(node.left);\
		visit(node);\
		inOrderTraversal(node.right);\
	\}\
\}\
\
function visit(node) \{\
	console.log(node.value);\
\}\
}