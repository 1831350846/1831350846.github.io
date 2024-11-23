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

        // 定义查找函数
        function findElement() {
            // 获取输入框的值（人数）47表
            let inputNumber = parseFloat(document.getElementById("inputElement").value);
            let inputNumber1 = parseFloat(document.getElementById("inputElement1").value);
            let inputNumber2 = parseFloat(document.getElementById("inputElement2").value);
            let inputNumber3 = parseFloat(document.getElementById("inputElement3").value);
            let numericValue = parseInt(inputNumber, 10);
            const trainNumbers = [204, 704, 505, 804, 106,904,206,706,806,108,906,808,110,908,810,112,910,812,114,912,814,816,118,914,117,203,503,703,803,105,903,107,705,805,205,905,207,707,807,809,907,109,111,909,811,911,113,813,913,915,815,119];
            // 车次数组
            let arr = [1104,1704,204,2204,2304,704,2704,804,1004,1204,1304,3004,1504,1604,1804,1904,3604,2004,3704,2104,3904,106,4004,2404,2504,4104,2604,4404,2804,1404,2904,4704,904,3104,5004,3204,1106,3304,5404,3402,3504,1706,3804,2706,206,1006,2206,1306,2306,706,1606,806,1906,1206,2106,3006,4006,1506,2506,1806,4406,1406,3906,108,2406,4204,4106,4604,3206,4504,2806,2906,4904,906,3106,5006,1108,3306,5406,3404,3506,1708,2708,1008,2208,1308,2308,1608,808,1908,1208,2108,4008,1508,1808,4408,1408,110,4206,4108,3208,2808,4906,908,3108,1110,3308,3406,1710,2710,1010,2210,1310,2310,1610,810,1910,1210,2110,4010,1510,1810,4410,1410,112,4208,4110,3210,2810,5504,4908,910,3110,5604,1112,3310,3408,1712,2712,1012,5704,2212,1312,2312,1612,812,1912,1212,2112,4012,1512,1812,4412,1412,114,5804,4210,4112,3212,2812,5506,3410,4910,912,3112,2714,5606,1114,2214,6104,3312,6204,2314,1715,6402,5904,1014,1914,6504,1314,6604,6006,1614,6704,1514,814,4414,1214,2114,116,4014,4114,1814,2814,1414,3412,5806,3114,3214,1116,5508,4912,6206,914,6404,5608,6506,6106,3314,6008,1716,1516,1016,4416,1316,118,1616,4116,816,6308,1216,3414,4016,3116,1816,5510,1416]; // 林场车次
            let arr1 = [2705,1005,1305,1605,1905,2105,4005,2505,4405,1405,3205,3409,2713,2213,2313,5903,1913,6005,1513,4413,115,4113,2813,3411,3113,1115,6205,6403,6505,6007,1515,4415,117,4115,6307,3413,3115,5509]; // 胜太西车次
            let arr2 = [203,503,703,803,1003,1203,1303,1503,1603,1803,1903,2003,2103,2403,2503,2603,2803,1403,2903,903,3103,3203,1105,3303,3503,1705,3803,205,2205,2305,705,805,1205,3005,1505,1805,3605,2005,3705,3905,107,2405,4203,4303,4105,4603,2605,4503,2805,4803,2905,4903,5203,905,5103,3105,5303,5005,1107,3305,5405,3403,3505,1707,3805,2707,207,1007,2207,1307,2307,707,1607,807,1907,1207,2107,4007,1507,1807,4407,1407,109,4205,4107,3207,2807,4905,907,3107,1109,3307,3405,1709,2709,1009,2209,1309,2309,1609,809,1909,1209,2109,4009,1509,1809,4409,1409,111,4207,4109,3209,2809,4907,909,3109,1111,3309,3407,1711,2711,1011,2211,1311,2311,1611,811,1911,1211,2111,4011,1511,1811,4411,1411,113,4209,4111,3211,2811,5505,4909,911,3111,5605,1113,3311,1713,1013,5705,1313,1613,813,1213,2113,4013,1813,6305,1413,5805,4211,3213,5507,4911,913,5607,2215,6105,3313,2315,1715,5905,1015,1915,1315,6605,1615,6705,815,1215,4015,1815,1415,5807,3215,1117,4913,6207,915,6405,5609,6507,3315,6009,1717,1517,1017,4417,1317,119,1617,4117,6309,1217,3415,3117,1817,5511,1417]; // 秣周东路车次

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

        
        function findElement1() {
            // 获取输入框的值（人数）45表
            let inputNumber = parseFloat(document.getElementById("inputElement").value);
            let inputNumber1 = parseFloat(document.getElementById("inputElement1").value);
            let inputNumber2 = parseFloat(document.getElementById("inputElement2").value);
            let inputNumber3 = parseFloat(document.getElementById("inputElement3").value);
            let numericValue = parseInt(inputNumber, 10);
            const trainNumbers = [204, 704, 804, 106, 904, 206, 706, 806, 108, 906, 808, 110, 908, 810, 112, 910, 812, 114, 912, 814, 116, 914, 118, 816, 916, 203, 503, 703, 803, 903, 205, 705, 805, 107, 905, 207, 707, 807, 109, 907, 809, 111, 909, 811, 113, 911, 813, 913, 815, 915, 119,115,117];
            // 车次数组
            let arr = [1104, 1704, 204, 2204, 2304, 704, 2704, 804, 1004, 1204, 1304, 3004, 1504, 1604, 1804, 1904, 3604, 2004, 3704, 2104, 3904, 106, 4004, 2404, 2504, 4104, 2604, 4404, 2804, 1404, 2904, 4704, 904, 3104, 5004, 3204, 1106, 3304, 5404, 3402, 3504, 1706, 3804, 2706, 206, 1006, 2206, 1306, 2306, 706, 1606, 806, 1906, 1206, 2106, 3006, 4006, 1506, 2506, 1806, 4406, 1406, 3906, 108, 2406, 4204, 4106, 4604, 3206, 4504, 2806, 2906, 4904, 906, 3106, 5006, 1108, 3306, 5406, 3404, 3506, 1708, 2708, 1008, 2208, 1308, 2308, 1608, 808, 1908, 1208, 2108, 4008, 1508, 1808, 4408, 1408, 110, 4206, 4108, 3208, 2808, 4906, 908, 3108, 1110, 3308, 3406, 1710, 2710, 1010, 2210, 1310, 2310, 1610, 810, 1910, 1210, 2110, 4010, 1510, 1810, 4410, 1410, 112, 4208, 4110, 3210, 2810, 5504, 4908, 910, 3110, 5604, 1112, 3310, 3408, 1712, 2712, 1012, 5704, 2212, 1312, 2312, 1612, 812, 1912, 1212, 2112,  4012, 1512, 1812, 4412, 1412, 114, 5804, 4210, 4112, 3212, 2812, 5506, 3410, 4910, 912, 3112, 2714, 5606, 1114, 2214, 6104, 3312, 6204, 2314, 1714, 6402, 5904, 1014, 1914, 6504, 1314, 6604, 6006, 1614, 6704, 1514, 814, 4414, 1214, 2114, 116, 4014, 4114, 1814, 2814, 6306, 1414, 3412, 5806, 3114, 3214, 1116, 5508, 4912, 6206, 914, 6404, 5608, 6506, 6106, 3314, 6008, 1716, 1516, 1016, 4416, 1316, 118, 1616, 4116, 816, 6308, 1216, 3414, 4016, 3116, 1816, 5510, 1416, 5808, 3216, 1118, 4914, 6208, 916, 6406, 5610, 6508, 3316, 6010]; // 林场车次
            let arr1 = [2705, 1005, 1305, 1605, 1905, 2105, 4005, 2505, 4405, 1405, 3205, 3409, 2713, 2213, 2313, 5903, 1913, 6005, 1513, 4413, 115, 4113, 2813, 3411, 3113, 1115, 6205, 6403, 6505, 6007, 1515, 4415, 117, 4115, 6307, 3413, 3115, 5509]; // 胜太西车次
            let arr2 = [203, 503, 703, 803, 1003, 1203, 1303, 1503, 1603, 1803, 1903, 2003, 2103, 2403, 2503, 2603, 2803, 1403, 2903, 903, 3103, 3203, 1105, 3303, 3503, 1705, 3803, 205, 2205, 2305, 705, 805, 1205, 3005, 1505, 1805, 3605, 2005, 3705, 3905, 107, 2405, 4203, 4303, 4105, 4603, 2605, 4503, 2805, 4803, 2905, 4903, 5203, 905, 5103, 3105, 5303, 5005, 1107, 3305, 5405, 3403, 3505, 1707, 3805, 2707, 207, 1007, 2207, 1307, 2307, 707, 1607, 807, 1907, 1207, 2107, 4007, 1507, 1807, 4407, 1407, 109, 4205, 4107, 3207, 2807, 4905, 907, 3107, 1109, 3307, 3405, 1709, 2709, 1009, 2209, 1309, 2309, 1609, 809, 1909, 1209, 2109, 4009, 1509, 1809, 4409, 1409, 111, 4207, 4109, 3209, 2809, 4907, 909, 3109, 1111, 3309, 3407, 1711, 2711, 1011, 2211, 1311, 2311, 1611, 811, 1911, 1211, 2111, 4011, 1511, 1811, 4411, 1411, 113,  4209, 4111, 3211, 2811, 5505, 4909, 911, 3111, 5605, 1113,  3311,  1713, 1013, 5705,  1313,  1613,  813, 1213, 2113, 4013, 1813, 6305, 1413, 5805, 4211, 3213, 5507, 4911, 913, 5607, 2215, 6105, 3313, 2315, 1715, 5905, 1015, 1915, 1315, 6605, 1615, 6705, 815, 1215, 4015, 1815, 1415, 5807, 3215, 1117, 4913, 6207, 915, 6405, 5609, 6507, 3315, 6009, 1717, 1517, 1017, 4417, 1317, 119, 1617, 4117, 6309, 1217, 3415]; // 秣周东路车次

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
