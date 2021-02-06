$.get("/Training/Learn/GetInteracts.ashx", { action: "Zhengdian", Key: Key, Cime: 2, Code: code }, function (jindu) {
    if (jindu == "ok") {
        console.log("成功")
    }
    else {
        showTipsMsg(lgjsqyc, 1000, 3);
    }
});