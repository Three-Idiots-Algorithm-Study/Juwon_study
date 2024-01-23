// 선택 정렬
const SelectSorted = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            arr[minIndex] > arr[j] ? minIndex = j : '';
        }
        if (minIndex !== i) {
            let temp;
            temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

const solution = (array, commands) => {
    let result = [];
    for ( let i = 0; i < commands.length; i++) {
        const [ start, end, k] = commands[i];
        const sorted = array.slice(start - 1, end);
        result.push(SelectSorted(sorted)[k - 1]);
    }
    return result;
}

// 삽입 정렬
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = 0;
    for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
}

const solution = (array, commands) => {
  const result = [];

  for (let i = 0; i < commands.length; i++) {
    const [start, end, k] = commands[i];
    const sorted = insertionSort(array.slice(start - 1, end));
    result.push(sorted[k - 1]);
  }

  return result;
};

// 버블 정렬
const BubbleSort = (arr) => {
  for (let i in arr) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const solution = (array, commands) => {
  const result = [];

  for (let i = 0; i < commands.length; i++) {
    const [start, end, k] = commands[i];
    const sorted = BubbleSort(array.slice(start - 1, end));
    result.push(sorted[k - 1]);
  }

  return result;
};

// 메서드 풀이
function solution(array, commands) {
    let answer = [];
    commands.forEach(command => {
        const temp = array.slice(command[0] - 1, command[1]);
        temp.sort((a,b) => a - b);
        answer.push(temp[command[2] - 1]);
    });  
    return answer;

}
