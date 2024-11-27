function processData() {
    // 获取输入值
    let inputNumber = parseFloat(document.getElementById("inputElement").value);
    let inputNumber1 = parseInt(document.getElementById("inputElement1").value, 10) || 0;
    let inputNumber2 = parseInt(document.getElementById("inputElement2").value, 10) || 0;
    let inputNumber3 = parseInt(document.getElementById("inputElement3").value, 10) || 0;

    // 检查输入是否合法
    if (isNaN(inputNumber)) {
        document.getElementById("result").innerHTML = "请输入有效的数字。";
        return;
    }

    const arr = [8126, 1234, 5678, 8765, 4321, 2345, 6789, 9876, 3456, 7890, 2004,6308]; // 林场车次
    const arr1 = [1115, 6205,1234, 5678, 8765, 4321, 2345, 6789, 9876, 3456, 7890, 2004]; // 胜太西车次
    const arr2 = [1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009]; // 秣周东路车次
    let acceptance = Math.floor(inputNumber) + 1; // 接受量

    let result = "车次未找到"; // 默认结果

    // 检查车次范围
    if (arr.includes(acceptance)) {
        let index = arr.indexOf(acceptance);
        result = (index + inputNumber1 < arr.length) ? arr[index + inputNumber1] : "未找到";
    } else if (arr1.includes(acceptance)) {
        let index = arr1.indexOf(acceptance);
        result = (index + inputNumber3 < arr1.length) ? arr1[index + inputNumber3] : "未找到";
    } else if (arr2.includes(acceptance)) {
        let index = arr2.indexOf(acceptance);
        result = (index + inputNumber2 < arr2.length) ? arr2[index + inputNumber2] : "未找到";
    }

    // 显示结果
    document.getElementById("result").innerHTML = `下一车次: ${result}`;
}

function checkConditions() {
    let input1 = document.getElementById("input1").value.trim();
    let conditions = {
        "L3Z047": findElement,
        "L3Z045": handleProcessing,
        "L3Z046": findElement2,
        "L3Z048": findElement3
    };

    if (conditions[input1]) {
        conditions[input1](); // 调用相应函数
    } else {
        document.getElementById("result").innerHTML = "条件不满足，请检查输入值。";
    }
}

function handleProcessing() {
    let inputData = parseFloat(document.getElementById("inputElement").value);

    if (isNaN(inputData)) {
        document.getElementById("result").innerHTML = "请输入有效的数字。";
        return;
    }

    let processedData = processData(inputData); // 调用处理函数
    let finalResult = furtherProcess(processedData);

    document.getElementById('result').innerHTML = `
        下一车次: ${processedData}<br>
        接车到车次: ${finalResult}
    `;
}

function furtherProcess(value) {
    let numericValue = parseInt(value, 10);
    return isNaN(numericValue) ? "无法计算" : numericValue - 1;
}
