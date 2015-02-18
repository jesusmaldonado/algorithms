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

[Max Pair Sum / Hash Table Discussion][maxpairsum]

[Linked Lists][linkedlist]


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

[Common Substrings][common-substrings]

[Maximum Subarray][subarray]

[Strings Tuples][strings]

[Recursion][recursion]

[Recursive Sums][rec-sum]

[Rectangle Intersections][rectangles]

[Next Largest BST][next-largest-bst]

[Binary Search][binary]

[Products][products]

[Max Pair Sum][maxpairsum]

[Three Sum][threesum]

[Tuples][tuples]

[Delete Node from Singly-Linked-List][delete-node]

[Temperature][temperature-tracker]

[Closed Properly][closed-properly]

[Permutation of a String is Palindrome][permutation-string]

[Mutability of A String][string-mutability]

[Find Double in Triangular Series][find-double]

[Make Cloud Map of Words][make-cloud]

[In Place Shuffle of Array][in-place]

[Recursive Permutations of a Stirng][recursive-permutations]

[Make Change][make-change]

[Linked List Has Cycle][has-cycle]

[Find Potential File Duplicates][reading-files]

[Merge Procedure][merge-procedure]

[Queue from Two Stack][queue-two-stacks]

[kth-largest-bst][kth-largest]

[Check if Binary Tree][bst]

[N-Choose-K][n-choose-k]

[Multiple Merge][multiple-merge]

[multiple-merge]: ./problems/multiple_merge.rb
[n-choose-k]: ./problems/n_choose_k.rb
[bst]: ./problems/bst.rb
[kth-largest]: ./problems/kth_largest.rb
[queue-two-stacks]: ./problems/queue_two_stacks.rb
[merge-procedure]: ./problems/merge.rb
[reading-files]: ./problems/file_read.rb
[has-cycle]: ./problems/has_cycle.rb
[make-change]: ./problems/make_change.rb
[recursive-permutations]: ./problems/recursive_permutations.rb
[in-place]: ./problems/in_place_shuffle.rb
[make-cloud]: ./problems/make_cloud.rb
[find-double]: ./problems/find_double.rb
[string-mutability]: ./problems/reverse.rb
[permutation-string]: ./problems/string_permutation.rb
[closed-properly]: ./problems/closed.rb
[temperature-tracker]: ./problems/temp_tracker.rb
[delete-node]: ./problems/delete_node.rb
[rectangles]: ./problems/rectangle-intersection.rb
[binary]: ./problems/binary.rb
[common-substrings]: ./problems/common_substr.rb
[next-largest-bst]: ./problems/next_largest_bst.rb
[rec-sum]: ./problems/sum_rec.rb
[max-profit]: ./problems/max_profit.rb
[recursion]: ./problems/recursion.rb
[strings]: ./problems/string.rb
[maxpairsum]: ./problems/max_pair.rb
[products]: ./problems/products.rb
[threesum]: ./problems/threesum.rb
[tuples]: ./problems/tuples.rb
[reverse-strings]: ./problems/reverse_strings.rb
[reverse-linked-list]: ./problems/link_reverse.rb

[linked-list]: ./data_structures/linked_list.rb
[ring-buffer]: ./data_structures/ring_buffer.rb
[dynamic-array]: ./data_structures/dynamic_array.rb
[static-array]: ./data_structures/static_array.rb
[set]: ./data_structures/set.rb

[counting-sort]: ./ch8/counting_sort.rb
[ch8notes]: ./ch8/linear_sort.txt

[quick-sort]: ./ch7/quick-sort.rb

[heap-sort]: ./ch6/heap_sort.rb

[subarray]: ./ch4/subarray.rb
[ch4notes]: ./ch4/notes.txt

[bubble-sort]: ./ch2/bubble_sort.rb
[problems]: ./ch2/problems.txt
[binary-search]: ./ch2/binary_search.rb
[insertion-sort-recursion]: ./ch2/recurs_ins_sort.rb
[mergesort]: ./ch2/merge_sort.rb
[divide and conquer]: ./ch2/divideandconquer.txt
[insertion-sort-linear-search]: ./ch2/ch2Problems.rb

[algorithms]: http://www.amazon.com/Introduction-Algorithms-3rd-Thomas-Cormen/dp/0262033844/ref=sr_1_2?ie=UTF8&qid=1422754780&sr=8-2&keywords=algorithms

[chapter2]: ./ch2/chapter2cormen.txt
