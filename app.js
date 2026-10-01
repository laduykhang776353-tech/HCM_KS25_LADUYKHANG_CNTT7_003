let currentOrderCode = "";
let isOrderValid = false;
let totalRevenue = 0;
let totalOrder = 0;
let choice;

do {
    let menu = 
    "========================================\n"+
    "HỆ THỐNG THANH TOÁN NHÀ SÁCH TRI THỨC   \n"+
    "========================================\n"+
    "1. Nhập và kiểm tra mã đơn hàng         \n"+
    "2. Tính tiền đơn sách                   \n"+
    "3. Thẩm định mã hóa đơn may mắn         \n"+
    "0. Thoát chương trình                   \n"+
    "========================================\n"+
    "Vui lòng nhập lựa chọn của bạn (0-3): "

    choice = Number(prompt(menu));

    switch (choice) {
        case 1:
            // hủy mã đơn hàng cũ
            currentOrderCode = "";
            isOrderValid = false;

            // nhập mã đơn hàng
            let inputId = prompt("Nhập mã đơn hàng: ");

            // xóa khoảng trắng 2 đầu và chuyển toàn bộ sang in hoa
            inputId = inputId.trim().toUpperCase()

            // xử lý cancel
            if (inputId === null || inputId === "") {
                alert("Lỗi: Chưa nhập mã đơn hàng!")
                break;
            }

            // độ dài tối thiểu 6 ký tự
            if (inputId.length < 6) {
                alert("Lỗi: Độ dài nhỏ hơn 6 ký tự!");
                break;
            }

            if (!inputId.startsWith("BOK-")) {
                alert("Lỗi: Sai tiền tố ");
                break;
            }

            // không chứa khoảng trắng
            if (inputId.includes(" ")) {
                alert("Lỗi: Thiếu khoảng trắng")
            }

            // hợp lệ 
            currentOrderCode = inputId;
            isOrderValid = true;

            alert("Đơn hàng thành công!");
            alert(`Mã đơn hàng: ${inputId}`)

            break;

        case 2:
            // từ chối khi chưa có mã hàng hợp lệ
            if (isOrderValid != true) {
                alert ("Vui lòng chọn chức năng 1 để nhập lại mã đơn hàng!");
                break;
            }

            break;
        
        case 3:
            break;

        case 0:
            alert("Đã thoát chương trình!");
            break;

        default:
            alert("Lựa chọn của bạn không hợp lệ. Vui lòng nhập lại (0-3)!");
            break;
    }
} while (choice != 0);