window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search();
    });

    // TODO: 在此为 top-right 元素设置监听器
    document.getElementById('top-right').addEventListener('click', function(){
        clickLogin();
    })

}

function search() {
    // TODO: 搜索触发后的行为
    var input= document.querySelector('#search-input input');
    var inputValue= input.value;
    if(inputValue!==''){
        confirm(inputValue);
    }
    else{
        confirm('请输入搜索内容');
    }
    console.log('');
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug
    let username = Kernal.getUserName();
    let content = ` <div id="user">
                        <span id="user-img">
                            <img src="img/user.jpg" />
                        </span>
                        <span id="name"> 已登录用户 </span>
                    </div>`;
    console.log(username);
    document.getElementById('top-right').innerHTML= content;
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}