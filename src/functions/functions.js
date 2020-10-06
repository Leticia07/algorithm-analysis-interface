
export default class Functions {

    static linearSearch = (array, value) => {
        for(var i = 0; i < array.length; i++) {
            if (array[i] == value) {
                return i;
            }
        }
        return -1;
    }

    static binarySearch = (array, first, last, value) => {
        
        if (Number(first) <= Number(last)) {
            var middle = parseInt((first + last) / 2);
            if (Number(array[middle]) == Number(value)) {
                return middle;
            } else if (Number(array[middle]) > Number(value)) {
                return this.binarySearch(array, first, middle - 1, value);
            } else {
                return this.binarySearch(array, middle + 1, last, value);
            }
        } else {
            return -1;
        }
    }

    static insertionSort = (array) => {
        var elementToSort, position;
        for (var i = 1; i < array.length; i++) {
            elementToSort = array[i];
            position = i - 1;
            for (var j = i - 1; j > -1; j--) {
                if (array[j] > elementToSort) {
                    array[j + 1] = array[j];
                    position = j;
                } else {
                    position = j + 1;
                    break;
                }
            }
            array[position] = elementToSort;
        }

        return array;
    }

    static swapBubble = (array, position) => {
        var aux = array[position - 1];
        array[position - 1] = array[position];
        array[position] = aux;
    }

    static bubbleSort = (array) => {
        var swapped = true;
        var lastUnsortedElement = array.length;
        while (swapped) {
            swapped = false;
            for (var i = 1; i < lastUnsortedElement; i++) {
                if (array[i - 1] > array[i]) {
                    this.swapBubble(array, i);
                    swapped = true;
                }
            }
            lastUnsortedElement--;
        }

        return array;
    }

    static swapSelection = (array, position, position2) => {
        var aux = array[position];
        array[position] = array[position2];
        array[position2] = aux;
    }

    static selectionSort = (array) => {
        var firstUnsortedElement, firstUnsortedPosition, minimum, minimumPosition;
        for (var i = 0; i < array.length - 1; i++) {
            firstUnsortedElement = array[i];
            firstUnsortedPosition = i;
            minimum = firstUnsortedElement
            minimumPosition = firstUnsortedPosition

            for (var j = i + 1; j < array.length; j++) {
                if (array[j] < minimum) {
                    minimum = array[j];
                    minimumPosition = j;
                }
            }
            this.swapSelection(array, firstUnsortedPosition, minimumPosition)
        }

        return array;
    }

    static mergeSort = (array) => {
        if (array.length > 1) {

            var middle = parseInt(array.length/2);
            var left = array.slice(0, middle);
            var right = array.slice(middle);

            return this.merge(this.mergeSort(left), this.mergeSort(right));

        }
        return array;
    }

    static merge = (left, right) => {

        var resultArray = [];
        var i = 0, j = 0, k = 0;

        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                resultArray[k] = left[i];
                i += 1;
            } else {
                resultArray[k] = right[j];
                j += 1;
            }
            k += 1;
        }

        return resultArray.concat(left.slice(i)).concat(right.slice(j));
    }
}