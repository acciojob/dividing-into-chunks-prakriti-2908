// const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let ans = [];
    for(let i=0;i<arr.length;i++){
        sub = [arr[i]];
        let sum = arr[i];
        for(let j=0;j<arr.length;j++){
            if(i==j){
                continue;
            }
            sum += arr[j];
            if(sum<=n){
                sub.push(arr[j]);
            }else {
                ans.push(sub);
                sub = [];
                break;
            }
        }
    }
    if(sub.length != 0){
        ans.push(sub);
    }
    return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
