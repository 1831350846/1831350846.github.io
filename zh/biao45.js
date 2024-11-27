        function processData(inputNumber) {
            // 获取输入框的值（人数）45表
            let inputNumber = parseFloat(document.getElementById("inputElement").value);
            let inputNumber1 = parseFloat(document.getElementById("inputElement1").value);
            let inputNumber2 = parseFloat(document.getElementById("inputElement2").value);
            let inputNumber3 = parseFloat(document.getElementById("inputElement3").value);
            let numericValue = parseInt(inputNumber, 10);
            const trainNumbers = [];
            // 车次数组
            let arr = [ 816, 6308]; // 林场车次
            let arr1 = [27 1115, 6205]; // 胜太西车次
            let arr2 = []; // 秣周东路车次

            // 假设接受量为输入量加1
            let acceptance = numericValue + 1;

            if (arr.includes(acceptance)) { // 林场车次
           
            const index = arr.indexOf(acceptance); // 获取车次的索引
            const L = index + inputNumber1; // 计算新的索引
            // 检查新的索引是否在数组范围内
            const result = L < arr.length ? arr[L] : '未找到'; // 通过新的索引获取下一车次
           if (trainNumbers.includes(result)) {
            let formattedValue = result.toString().padStart(4, '0');
            
                   return formattedValue;
            } else {
                
                   return result;
            }
            //document.getElementById('result').innerHTML = `下一车次: ${result}`; // 输出下一车次
            } else if (arr1.includes(acceptance)) { // 胜太西车次
           console.log(acceptance);
            const index = arr1.indexOf(acceptance); // 获取车次的索引
            const S = index + inputNumber3; // 计算新的索引
            // 检查新的索引是否在数组范围内
            const result = S < arr1.length ? arr1[S] : '未找到'; // 通过新的索引获取下一车次
            if (trainNumbers.includes(result)) {
            let formattedValue = result.toString().padStart(4, '0');
         
                    return formattedValue;
            } else {
                
                    return result;
            }
            
            } else if (arr2.includes(acceptance)) { // 秣周东路车次
           
            const index = arr2.indexOf(acceptance); // 获取车次的索引
            const M = index + inputNumber2; // 计算新的索引
            // 检查新的索引是否在数组范围内
            const result = M < arr2.length ? arr2[M] : '未找到'; // 通过新的索引获取下一车次
            if (trainNumbers.includes(result)) {
            let formattedValue = result.toString().padStart(4, '0');
            
                    return formattedValue;
            } else {
             
                    return result;
            }
            
            } else {
                document.getElementById("result").innerHTML = "车次未找到";
            }
        }
        
