#Algorithms Practice

## A series of exercises/notes/solutions in Ruby as I work my way through [Introduction to Algorithms][algorithms].
See my implementations and notes on the various algorithms in Ruby, with solutions to the exercises.

Data Structure
==
[Set][set] O(1) lookup

[Hash Table][maxpairsum] O(1) lookup, constant time to iterate

[Heap][heap-sort]

[Static Array][static-array]

[Dynamic Array][dynamic-array] pop is O(1); shift, unshift, push can be O(n) at worst

[Ring Buffer][ring-buffer]

Notes + Problems
==

[Chapter 2 - Foundations + Divide and Conquer + Recursive Relations + Loop Invariance][chapter2]

[Chapter 2 - Problems - Merge Sort Improvements, Bubble Sort Correctness, Horner's Rule and Invariance][problems]

[Chapter 4 - Divide and Conquer + Maximum Subarray Problem][ch4notes]

[Chapter 8 - Linear Sorting Algorithms][ch8notes]

Sorts
==
[Insertion Sort / Linear Search / Selection O(n^2) Sort][insertion-sort-linear-search]

[Merge Sort][mergesort] O(n lgn)

[Recursive Insertion Sort][insertion-sort-recursion] O(n)

[Binary Search][binary-search] O(lg n)

[Bubble Sort][bubble-sort] O(lg n^2)

[Quicksort][quick-sort] O(n^2)

[Heap Sort / Heap Data Structure][heap-sort] O(lg n * n)

Non-Comparison-Sorts
==

[Counting Sort/Radix Sort][counting-sort] O(n + k) / O(nk)

Problems
==

[Common Substrings][commonsubst]

[Maximum Subarray][subarray]

Cracking the Code Interview
==

[Strings, Tuples]:[strings]

[Recursion]:[recursion]



[recursion]: ./cracking-the-coding-interview/recursion.rb
[strings]: ./cracking-the-coding-interview/string.rb
[ring-buffer]: ./data_structures/ring_buffer.rb
[dynamic-array]: ./data_structures/dynamic_array.rb
[Max Pair Sum / Hash Table Discussion][maxpairsum]
[static-array]: ./data_structures/static_array.rb
[counting-sort]: ./ch8/counting_sort.rb
[ch8notes]: ./ch8/linear_sort.txt
[quick-sort]: ./ch7/quick-sort.rb
[set]: ./data_structures/set.rb
[maxpairsum]: ./practice_problems/max_pair.rb
[heap-sort]: ./ch6/heap_sort.rb
[subarray]: ./ch4/subarray.rb
[ch4notes]: ./ch4/notes.txt
[commonsubst]: ./practice_problems/common_substr.rb
[bubble-sort]: ./ch2/bubble_sort.rb
[problems]: ./ch2/problems.txt
[binary-search]: ./ch2/binary_search.rb
[insertion-sort-recursion]: ./ch2/recurs_ins_sort.rb
[mergesort]: ./ch2/merge_sort.rb
[divide and conquer]: ./ch2/divideandconquer.txt

[algorithms]: http://www.amazon.com/Introduction-Algorithms-3rd-Thomas-Cormen/dp/0262033844/ref=sr_1_2?ie=UTF8&qid=1422754780&sr=8-2&keywords=algorithms

[chapter2]: ./ch2/chapter2cormen.txt


[insertion-sort-linear-search]: ./ch2/ch2Problems.rb
