const express = require('express');
const app = express();
const path = require('path');

// Cấu hình EJS làm Template Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 1. Trang Đăng nhập
app.get('/login', (req, res) => {
    res.render('login');
});

// 2. Trang Giáo viên (Dashboard)
app.get('/teacher/dashboard', (req, res) => {
    res.render('teacher-dashboard');
});

// 3. Trang Học sinh làm bài thi
app.get('/exam/:id', (req, res) => {
    const examId = req.params.id; // Lấy ID đề thi từ URL
    res.render('exam/take', { examId: examId });
});

// 4. Trang Học sinh xem kết quả và đáp án
app.get('/exam/:id/results', (req, res) => {
    const examId = req.params.id;
    res.render('exam/results', { examId: examId });
});

// Chạy server ở cổng 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại: http://localhost:${PORT}`);
    console.log(`👉 Trang đăng nhập: http://localhost:${PORT}/login`);
});
