        function furtherProcess(shi) {
            // 获取输入框的值（人数）45表
            let numericValue = parseInt(shi, 10);
            const trainNumbers = [204, 704, 804, 106, 904, 206, 706, 806, 108, 906, 808, 110, 908, 810, 112, 910, 812, 114, 912, 814, 116, 914, 118, 816, 916, 203, 503, 703, 803, 903, 205, 705, 805, 107, 905, 207, 707, 807, 109, 907, 809, 111, 909, 811, 113, 911, 813, 913, 815, 915, 119,115,117];
            // 车次数组
            let arr = [
            { checi: "1104",  shijian: "6:00" },
            { name: "Bob", age: 30, job: "Designer" },1104, 1704, 204, 2204, 2304, 704, 2704, 804, 1004, 1204, 1304, 3004, 1504, 1604, 1804, 1904, 3604, 2004, 3704, 2104, 3904, 106, 4004, 2404, 2504, 4104, 2604, 4404, 2804, 1404, 2904, 4704, 904, 3104, 5004, 3204, 1106, 3304, 5404, 3402, 3504, 1706, 3804, 2706, 206, 1006, 2206, 1306, 2306, 706, 1606, 806, 1906, 1206, 2106, 3006, 4006, 1506, 2506, 1806, 4406, 1406, 3906, 108, 2406, 4204, 4106, 4604, 3206, 4504, 2806, 2906, 4904, 906, 3106, 5006, 1108, 3306, 5406, 3404, 3506, 1708, 2708, 1008, 2208, 1308, 2308, 1608, 808, 1908, 1208, 2108, 4008, 1508, 1808, 4408, 1408, 110, 4206, 4108, 3208, 2808, 4906, 908, 3108, 1110, 3308, 3406, 1710, 2710, 1010, 2210, 1310, 2310, 1610, 810, 1910, 1210, 2110, 4010, 1510, 1810, 4410, 1410, 112, 4208, 4110, 3210, 2810, 5504, 4908, 910, 3110, 5604, 1112, 3310, 3408, 1712, 2712, 1012, 5704, 2212, 1312, 2312, 1612, 812, 1912, 1212, 2112,  4012, 1512, 1812, 4412, 1412, 114, 5804, 4210, 4112, 3212, 2812, 5506, 3410, 4910, 912, 3112, 2714, 5606, 1114, 2214, 6104, 3312, 6204, 2314, 1714, 6402, 5904, 1014, 1914, 6504, 1314, 6604, 6006, 1614, 6704, 1514, 814, 4414, 1214, 2114, 116, 4014, 4114, 1814, 2814, 6306, 1414, 3412, 5806, 3114, 3214, 1116, 5508, 4912, 6206, 914, 6404, 5608, 6506, 6106, 3314, 6008, 1716, 1516, 1016, 4416, 1316, 118, 1616, 4116, 816, 6308, 1216, 3414, 4016, 3116, 1816, 5510, 1416, 5808, 3216, 1118, 4914, 6208, 916, 6406, 5610, 6508, 3316, 6010]; // 林场车次
            let arr1 = [2705, 1005, 1305, 1605, 1905, 2105, 4005, 2505, 4405, 1405, 3205, 3409, 2713, 2213, 2313, 5903, 1913, 6005, 1513, 4413, 115, 4113, 2813, 3411, 3113, 1115, 6205, 6403, 6505, 6007, 1515, 4415, 117, 4115, 6307, 3413, 3115, 5509]; // 胜太西车次
            let arr2 = [203, 503, 703, 803, 1003, 1203, 1303, 1503, 1603, 1803, 1903, 2003, 2103, 2403, 2503, 2603, 2803, 1403, 2903, 903, 3103, 3203, 1105, 3303, 3503, 1705, 3803, 205, 2205, 2305, 705, 805, 1205, 3005, 1505, 1805, 3605, 2005, 3705, 3905, 107, 2405, 4203, 4303, 4105, 4603, 2605, 4503, 2805, 4803, 2905, 4903, 5203, 905, 5103, 3105, 5303, 5005, 1107, 3305, 5405, 3403, 3505, 1707, 3805, 2707, 207, 1007, 2207, 1307, 2307, 707, 1607, 807, 1907, 1207, 2107, 4007, 1507, 1807, 4407, 1407, 109, 4205, 4107, 3207, 2807, 4905, 907, 3107, 1109, 3307, 3405, 1709, 2709, 1009, 2209, 1309, 2309, 1609, 809, 1909, 1209, 2109, 4009, 1509, 1809, 4409, 1409, 111, 4207, 4109, 3209, 2809, 4907, 909, 3109, 1111, 3309, 3407, 1711, 2711, 1011, 2211, 1311, 2311, 1611, 811, 1911, 1211, 2111, 4011, 1511, 1811, 4411, 1411, 113,  4209, 4111, 3211, 2811, 5505, 4909, 911, 3111, 5605, 1113,  3311,  1713, 1013, 5705,  1313,  1613,  813, 1213, 2113, 4013, 1813, 6305, 1413, 5805, 4211, 3213, 5507, 4911, 913, 5607, 2215, 6105, 3313, 2315, 1715, 5905, 1015, 1915, 1315, 6605, 1615, 6705, 815, 1215, 4015, 1815, 1415, 5807, 3215, 1117, 4913, 6207, 915, 6405, 5609, 6507, 3315, 6009, 1717, 1517, 1017, 4417, 1317, 119, 1617, 4117, 6309, 1217, 3415]; // 秣周东路车次

            // 假设接受量为输入量加1
            let acceptance = numericValue - 1;
                return acceptance;

      
        }
