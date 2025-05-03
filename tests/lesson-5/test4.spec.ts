import { test } from '@playwright/test';

test('Add note to vnexpress', async ({ page }) => {
    const notes = [
        { title: "Vị trí khiến thành phố Mỹ trở nên 'nắng nhất thế giới'", content: "Thành phố St. Petersburg, giữ Kỷ lục Thế giới Guinness về chuỗi ngày nắng dài nhất với 768 ngày, là một bán đảo nhỏ trong bán đảo lớn Florida." },
        { title: "Chip 2 nm tiên tiến nhất thế giới", content: "Công ty TSMC giới thiệu microchip tiên tiến nhất thế giới, chip 2 nm, hồi đầu tháng 4 và dự kiến bắt đầu sản xuất hàng loạt vào nửa cuối năm nay." },
        { title: "Trung Quốc phát hiện mỏ thạch anh hơn 35 triệu tấn", content: "Phát hiện hai mỏ thạch anh độ tinh khiết cao với tổng trữ lượng hơn 35 triệu tấn sẽ giúp Trung Quốc giảm phụ thuộc vào nhập khẩu từ Mỹ." },
        { title: "Anh hút CO2 từ nước biển để đối phó biến đổi khí hậu", content: "Dự SeaCURE thử nghiệm hút CO2 từ nước biển tại Weymouth với sự hỗ trợ của chính phủ Anh, có thể mở rộng quy mô để loại bỏ 14 tỷ tấn CO2/năm." },
        { title: "Châu Âu sắp phóng đồng hồ chính xác nhất trong vũ trụ", content: "Cơ quan Vũ trụ châu Âu (ESA) sẽ phóng đồng hồ chính xác đến mức lệch chưa đến một giây sau hơn 300 triệu năm lên trạm ISS để kiểm tra thuyết tương đối rộng." },
        { title: "AI khám phá những bí ẩn về Mặt Trời", content: "Nhờ AI, các nhà nghiên cứu có thể nâng cấp dữ liệu hình ảnh từ thiết bị cũ và thu được ảnh chụp rõ nét hơn về bề mặt Mặt Trời." },
        { title: "Thủ tướng: Cần dạy khởi nghiệp trong chương trình chính khóa", content: "Bộ Giáo dục cần đưa khởi nghiệp vào dạy chính khóa, còn sinh viên dành thời gian, trí tuệ, quyết đoán để định hình công việc, khởi nghiệp từ khi đi học để tạo ra sự đột phá cho đất nước, theo Thủ tướng." },
        { title: "Chính phủ sẽ xây dựng cơ chế thử nghiệm công nghệ mới", content: "Thủ tướng Phạm Minh Chính cho biết Chính phủ sẽ xây dựng cơ chế thí điểm thử nghiệm công nghệ mới có sự giám sát của Nhà nước theo phương thức vừa thiết kế vừa thi công." },
        { title: "Việt Nam - Indonesia ký ý định thư về khoa học công nghệ", content: "Việt Nam và Indonesia xác định khoa học công nghệ và chuyển đổi số sẽ là động lực chính để phát triển bứt phá, đạt mức tăng trưởng cao trong giai đoạn tới." },
        { title: "Hố đen đơn độc đầu tiên được xác nhận", content: "Các nhà khoa học xác nhận sự tồn tại của hố đen đơn độc cách Trái Đất 5.000 năm ánh sáng, di chuyển với tốc độ 51 km mỗi giây." }
    ];

    await test.step('Click bai hoc 4: Personal Note', async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.click("//a[contains(text(), 'Bài học 4: Personal notes')]");
    });

    await test.step('Add note', async () => {
        for (const note of notes){
            page.locator("//input[@id='note-title']").fill(note.title);
            page.locator("//textarea[@id='note-content']").fill(note.content);
            page.click("//button[@id='add-note']");
        }
    });

    await test.step('Thực hiện search theo tiêu đề bài báo bất kì', async() => {
        page.locator("//input[@id='search']").fill('Thành phố');
    })
})