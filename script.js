const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	for(let i=0;i<arr.length;i++){
		let subarr = [arr[i]];
		let sum = subarr;
		for(let j=0;j<arr.length;j++){
			if(j==i){
				continue;
			}else{
				
				if(sum<=n){
					subarr.push(arr[j]);
				}
				sum+=arr[j];
			}
		}
	}
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
