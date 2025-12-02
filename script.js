document.addEventListener('DOMContentLoaded', function() {
    const deployBtn = document.getElementById('deployBtn');
    const snoozeBtn = document.getElementById('snoozeBtn');
    const countdownTimer = document.getElementById('countdownTimer');

    // 模拟离线时间
    let chenOfflineHours = 72;
    let zhuOfflineHours = 72;
    
    document.getElementById('offlineTimeChen').textContent = `${chenOfflineHours}小时`;
    document.getElementById('offlineTimeZhu').textContent = `${zhuOfflineHours}小时`;

    // 倒计时功能
    let timeLeft = 10;
    const countdownInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const seconds = (timeLeft % 60).toString().padStart(2, '0');
        countdownTimer.textContent = `倒计时：${minutes}:${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            countdownTimer.textContent = '倒计时：00:00 - 任务失败！';
            deployBtn.disabled = true;
            snoozeBtn.disabled = true;
            alert('任务失败！陈子涵和邾志杰未归队，全员阵亡！😭');
        }
    }, 1000);

    // 立即部署按钮
    deployBtn.addEventListener('click', function() {
        clearInterval(countdownInterval);
        alert('部署成功！欢迎归队，陈子涵、邾志杰！我们等你很久了！💪');
        deployBtn.disabled = true;
        snoozeBtn.disabled = true;
        countdownTimer.textContent = '任务已接受！';
    });

    // 再睡一会按钮
    snoozeBtn.addEventListener('click', function() {
        alert('警告！指挥官震怒！再不起床，就别怪兄弟们出绝招了！😡');
        snoozeBtn.disabled = true;
        
        // 增加紧急感，倒计时-5秒
        if (timeLeft > 5) {
             timeLeft -= 5; 
        } else {
             timeLeft = 1;
        }
    });

    // 鼠标悬停动画（CSS已处理，这里仅做额外优化）
    const buttons = [deployBtn, snoozeBtn];
    buttons.forEach(btn => {
        btn.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-3px)';
        });
        btn.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});