require('dotenv').config(); // Load biến môi trường từ file .env
const express = require('express');
const app = express();
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Khởi tạo Supabase Client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ví dụ: Trang chủ lấy dữ liệu từ Supabase (Giả sử bạn có bảng 'exams')
app.get('/exam/:id', async (req, res) => {
    const examId = req.params.id;
    
    // LẤY DỮ LIỆU TỪ SUPABASE (Bảng questions)
    // const { data: questions, error } = await supabase
    //     .from('questions')
    //     .select('*')
    //     .eq('exam_id', examId);
        
    res.render('exam/take', { 
        examId: examId,
        // questions: questions // Truyền dữ liệu xuống giao diện EJS
    });
});

// Các route khác giữ nguyên...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại cổng ${PORT}`);
});
