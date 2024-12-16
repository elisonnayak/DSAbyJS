export function findNextGreater(arr) {
  let stack = [];
  let nextGreater = [];
  for(let i = arr.length - 1; i >= 0; --i){
        while(stack.length && arr[stack.at(-1)] <= arr[i]){
            stack.pop();
        }
        if(!stack.length)
          nextGreater[i] = -1;
        else
          nextGreater[i] = arr[stack.at(-1)];
        stack.push(arr[i]);
    }
    return nextGreater;
  }


  export function findNextSmaller(arr) {
    let stack = [];
    let nextGreater = [];
    for(let i = 0; i <= arr.length - 1; ++i){
          while(stack.length && arr[stack.at(-1)] >= arr[i]){
              stack.pop();
          }
          if(!stack.length)
            nextGreater[i] = -1;
          else
            nextGreater[i] = arr[stack.at(-1)];
          stack.push(arr[i]);
      }
      return nextGreater;
    }