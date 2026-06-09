document.getElementById("call-support").onclick = function() {
    alert("请拨打客服热线：123-456-7890");
};

// 示例进度条更新
function updateProgress(percentage) {
    const progressBar = document.getElementById("progress");
    progressBar.style.width = percentage + '%';
}

// 假设在预约流程中更新进度
updateProgress(50); // 50% 的进度
