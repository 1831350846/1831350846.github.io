        // 检查条件函数
        function checkConditions() {
            // 获取输入框的值，并去掉两端的空格
            var input1 = document.getElementById("input1").value.trim();

            // 条件 1：输入框 1 必须是 'L3Z046' 或 'L3Z044'
            var condition1 = (input1 === 'L3Z047');
            var condition2 = (input1 === 'L3Z045');
            var condition3 = (input1 === 'L3Z046');
            var condition4 = (input1 === 'L3Z048');

            // 两个条件都满足时输出结果
            if (condition1) {    // 'L3Z047' 时调用 findElement 函数
                findElement();
            } else if (condition2) { // 'L3Z045' 时调用 findElement1 函数
                findElement1();
            }  else if (condition3) { // 'L3Z046' 时调用 findElement1 函数
                findElement2();
            } else if (condition4) { // 'L3Z048' 时调用 findElement1 函数
                findElement3();
            } else {
                document.getElementById("result").innerHTML = "条件不满足，请检查输入值。";
            }
        }
