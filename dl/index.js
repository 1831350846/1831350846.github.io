        // 使用对象存储多个账号和密码
        const users = {
            "admin": "123456",
            "user1": "password1",
            "user2": "password2"
        };

        function validateLogin() {
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const errorMessage = document.getElementById("error-message");

            // 清空错误信息
            errorMessage.textContent = "";

            // 验证用户名和密码
            if (username === "" || password === "") {
                errorMessage.textContent = "用户名和密码不能为空！";
                return;
            }

            // 检查用户是否存在，密码是否正确
            if (!users[username] || users[username] !== password) {
                errorMessage.textContent = "用户名或密码错误！";
                return;
            }

            // 登录成功的处理
            alert("登录成功！");
            // 可重定向到其他页面，例如主页
            window.location.href = "dashboard.html";
        }
