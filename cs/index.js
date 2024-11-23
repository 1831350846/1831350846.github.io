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

        
        
             function findElement2() {
            // 获取输入框的值（人数） 46表
            let inputNumber = parseFloat(document.getElementById("inputElement").value);
            let inputNumber1 = parseFloat(document.getElementById("inputElement1").value);
            let inputNumber2 = parseFloat(document.getElementById("inputElement2").value);
            let inputNumber3 = parseFloat(document.getElementById("inputElement3").value);
            let numericValue = parseInt(inputNumber, 10);
            const trainNumbers = [504,704,904,204,604,804,106,506,706,206,906,606,806,108,708,208,508,908,608,808,710,210,110,510,910,712,610,212,810,112,512,912,714,214,612,812,114,514,716,216,914,614,814,116,718,218,516,916,616,816,118,720,220,518,205,707,207,709,209,711,211,713,213,715,215,717,217,603,803,105,505,705,905,605,805,107,507,907,607,807,109,509,909,609,809,111,511,911,611,811,113,513,913,613,813,115,515,915,615,815,117,719,219,517,917];
            // 车次数组
            let arr = [504,704,904,1304,1504,204,1804,1904,2104,2304,604,2504,804,1004,1104,1204,1404,1604,2904,1704,106,2004,2204,2404,3004,506,2604,2704,706,3104,2804,206,906,1906,1306,3204,2306,1506,2506,1806,1006,2106,1206,606,1606,806,1706,1106,2006,1406,2406,2906,2606,108,708,2206,208,3006,508,1308,2706,2308,2806,2508,908,1008,3206,1208,1508,1608,1808,1708,2108,2008,608,2408,808,2608,1108,710,1408,210,2908,1310,110,2310,2208,2510,510,1010,2708,1210,2808,1610,910,1710,3208,2010,1510,2410,1810,2610,2110,712,610,212,810,1312,1110,2312,1410,2512,2910,1012,112,1212,2210,1612,512,1712,2710,2012,2810,2412,912,2612,3210,714,1512,214,1812,1314,2112,2314,612,2514,812,1014,1112,1214,1412,1614,2912,1714,114,2014,2212,2414,514,2614,2712,716,2812,216,914,1316,3212,2316,1514,2516,1814,1016,2114,1216,614,1616,814,1716,1114,2016,1414,2416,2914,2616,116,718,2214,218,516,1318,2714,2318,2814,2518,916,1018,3214,1218,1516,1618,1816,1718,2116,616,816,1116,2018,1416,2916,118,720,220,518,2320]; // 林场车次
            let arr1 = [205,1905,2305,2505,1005,1205,1605,1705,2005,2405,2605,707,207,1307,2307,2507,1007,1207,1607,1707,2007,2407,2607,709,209,1309,1506,2509,1009,1209,1609,1709,2009,2409,2609,711,211,1311,2311,2511,1011,1211,1611,1711,2011,2411,2611,713,213,1313,2313,2513,1013,1213,1613,1713,2013,2413,2613,715,215,1315,2315,2515,1015,1215,1615,1715,2015,2415,2615,717,217,1317,2317,2517,1017,1217,1617,1717]; // 胜太西车次
            let arr2 = [603,803,1003,1103,1203,1403,1603,1703,2003,2203,2403,505,2603,2703,705,2803,905,1305,1505,1805,2105,605,805,1105,1405,2905,107,2205,3005,507,2705,3105,2805,907,1907,3205,1507,1807,2107,607,807,1107,1407,2907,109,2207,509,2707,2807,909,3207,1509,1809,2109,609,809,1109,1409,2909,111,2209,511,2709,2809,911,3209,1511,1811,2111,611,811,1111,1411,2911,113,2211,513,2711,2811,913,3211,1513,1813,2113,613,813,1113,1413,2913,115,2213,515,2713,2813,915,3213,1515,1815,2115,615,815,1115,2017,1415,2417,2915,2617,117,719,2215,219,517,1319,2319,2815,2519,917,3215,1219,1619,1719]; // 秣周东路车次

            // 假设接受量为输入量加1
            let acceptance = numericValue + 1;

            if (arr.includes(acceptance)) { // 林场车次
           
            const index = arr.indexOf(acceptance); // 获取车次的索引
            const L = index + inputNumber1; // 计算新的索引
            // 检查新的索引是否在数组范围内
            const result = L < arr.length ? arr[L] : '未找到'; // 通过新的索引获取下一车次
           if (trainNumbers.includes(result)) {
            let formattedValue = result.toString().padStart(4, '0');
            document.getElementById('result').innerHTML = `下一车次: ${formattedValue}`;
            } else {
                document.getElementById('result').innerHTML = `下一车次: ${result}`;
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
            document.getElementById('result').innerHTML = `下一车次: ${formattedValue}`;
            } else {
                document.getElementById('result').innerHTML = `下一车次: ${result}`;
            }
            
            } else if (arr2.includes(acceptance)) { // 秣周东路车次
           
            const index = arr2.indexOf(acceptance); // 获取车次的索引
            const M = index + inputNumber2; // 计算新的索引
            // 检查新的索引是否在数组范围内
            const result = M < arr2.length ? arr2[M] : '未找到'; // 通过新的索引获取下一车次
            if (trainNumbers.includes(result)) {
            let formattedValue = result.toString().padStart(4, '0');
            document.getElementById('result').innerHTML = `下一车次: ${formattedValue}`;
            } else {
                document.getElementById('result').innerHTML = `下一车次: ${result}`;
            }
            
            } else {
                document.getElementById("result").innerHTML = "车次未找到";
            }
        }
        
             function findElement3() {
            // 获取输入框的值（人数） 48表
            let inputNumber = parseFloat(document.getElementById("inputElement").value);
            let inputNumber1 = parseFloat(document.getElementById("inputElement1").value);
            let inputNumber2 = parseFloat(document.getElementById("inputElement2").value);
            let inputNumber3 = parseFloat(document.getElementById("inputElement3").value);
            let numericValue = parseInt(inputNumber, 10);
            const trainNumbers = [504,704,904,204,604,804,106,506,706,206,906,606,806,108,708,208,508,908,608,808,710,210,110,510,910,210,712,610,212,810,210,112,512,912,714,214,612,812,114,514,716,216,914,614,814,116,718,218,516,916,616,816,118,720,220,518,603,803,105,505,705,905,605,805,107,507,907,607,807,109,509,909,609,809,111,511,911,611,811,113,513,913,613,813,115,515,915,615,815,117,719,219,517,917,617,817,205,707,207,709,209,711,210,713,213,715,215,717,217];
            // 车次数组
            let arr = [504,704,904,1304,1504,204,1804,1904,2104,2304,604,2504,804,1004,1104,1204,1404,1604,2904,1704,106,2004,2204,2404,3004,506,2604,2704,706,3104,2804,206,906,1906,1306,3204,2306,1506,2506,1806,1006,2106,1206,606,1606,806,1706,1106,2006,1406,2406,2906,2606,108,708,2206,208,3006,508,1308,2706,2308,2806,2508,908,1008,3206,1208,1508,1608,1808,1708,2108,2008,608,2408,808,2608,1108,710,1408,210,2908,1310,110,2310,2208,2510,510,1010,2708,1210,2808,1610,910,1710,3208,2010,1510,2410,1810,2610,210,712,610,212,810,1312,1110,2312,1410,210,2910,1012,112,1212,2210,1612,512,1712,2710,2012,2810,2412,912,2612,3210,714,1512,214,1812,1314,2112,2314,612,2514,812,1014,1112,1214,1412,1614,2912,1714,114,2014,2212,2414,514,2614,2712,716,2812,216,914,1316,3212,2316,1514,2516,1814,1016,2114,1216,614,1616,814,1716,1114,2016,1414,2416,2914,2616,116,718,2214,218,516,1318,2714,2318,2814,2518,916,1018,3214,1218,1516,1618,1816,1718,2116,616,816,1116,2018,1416,2418,2916,118,720,220,518,2320]; // 林场车次
            let arr1 = [205,1905,2305,2505,1005,1205,1605,1705,2005,2405,2605,707,207,1307,2307,2507,1007,1207,1607,1707,2007,2407,2607,709,209,1309,2309,2509,1009,1209,1609,1709,2009,2409,2609,711,210,1311,2311,2511,1011,1211,1611,1711,2011,2411,2611,713,213,1313,2313,2513,1013,1213,1613,1713,2013,2413,2613,715,215,1315,2315,2515,1015,1215,1615,1715,2015,2415,2615,717,217,1317,2317,2517,1017,1217,1617,1717]; // 胜太西车次
            let arr2 = [603,803,1003,1103,1203,1403,1603,1703,2003,2203,2403,505,2603,2703,705,2803,905,1305,1505,1805,2105,605,805,1105,1405,2905,107,2205,3005,507,2705,3105,2805,907,1907,3205,1507,1807,2107,607,807,1107,1407,2907,109,2207,509,2707,2807,909,3207,1509,1809,2109,609,809,1109,1409,2909,111,2209,511,2709,2809,911,3209,1511,1811,2111,611,811,1111,1411,2911,113,2211,513,2711,2811,913,3211,1513,1813,2113,613,813,1113,1413,2913,115,2213,515,2713,2813,915,3213,1515,1815,2115,615,815,1115,2017,1415,2417,2915,2617,117,719,2215,219,517,1319,2319,2815,2519,917,3215,1219,1619,1719,2117,617,817]; // 秣周东路车次

            // 假设接受量为输入量加1
            let acceptance = numericValue + 1;

            if (arr.includes(acceptance)) { // 林场车次
           
            const index = arr.indexOf(acceptance); // 获取车次的索引
            const L = index + inputNumber1; // 计算新的索引
            // 检查新的索引是否在数组范围内
            const result = L < arr.length ? arr[L] : '未找到'; // 通过新的索引获取下一车次
           if (trainNumbers.includes(result)) {
            let formattedValue = result.toString().padStart(4, '0');
            document.getElementById('result').innerHTML = `下一车次: ${formattedValue}`;
            } else {
                document.getElementById('result').innerHTML = `下一车次: ${result}`;
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
            document.getElementById('result').innerHTML = `下一车次: ${formattedValue}`;
            } else {
                document.getElementById('result').innerHTML = `下一车次: ${result}`;
            }
            
            } else if (arr2.includes(acceptance)) { // 秣周东路车次
           
            const index = arr2.indexOf(acceptance); // 获取车次的索引
            const M = index + inputNumber2; // 计算新的索引
            // 检查新的索引是否在数组范围内
            const result = M < arr2.length ? arr2[M] : '未找到'; // 通过新的索引获取下一车次
            if (trainNumbers.includes(result)) {
            let formattedValue = result.toString().padStart(4, '0');
            document.getElementById('result').innerHTML = `下一车次: ${formattedValue}`;
            } else {
                document.getElementById('result').innerHTML = `下一车次: ${result}`;
            }
            
            } else {
                document.getElementById("result").innerHTML = "车次未找到";
            }
        }
