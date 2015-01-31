function merge_sort(list )
    // Base case
    if length(m) < = 1
    return m

    // Recursive case. First, *divide* the list
    /
    var list left, right
    var integer middle = length(m)/2
    for each x in m before middle
        add x to left
    for each x in m after or equal to middle
        add x to right

    // recursively sort both sublists
    left = merge_sort(left)
    right = merge_sort(right)

    // *conquer* : merge the now-sorted sublists
    
    return merge(left, right)
