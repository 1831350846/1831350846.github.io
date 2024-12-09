        // 检查用户是否登录
        const username = localStorage.getItem("username");

        // 如果没有登录，跳转到登录页面
        if (!username) {
            window.location.href = "index.html";  // 这里假设登录页面是 login.html
        }

        // 显示用户名
        document.querySelector("h2").textContent = `恭喜，${username}，登录成功！`;

        function goToDashboard() {
            // 跳转到系统首页（根据实际需求修改）
            window.location.href = "dashboard.html";  // 这里假设首页是 dashboard.html
        }
