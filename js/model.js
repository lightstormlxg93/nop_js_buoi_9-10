function nguoiDung(
    taiKhoan,
    name,
    email,
    password,
    datePicker,
    luongCB,
    chucVu,
    gioLam
) {
    this.taiKhoan = taiKhoan;
    this.name = name;
    this.email = email;
    this.password = password;
    this.datePicker = datePicker;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = function () {
        let tongLuong;
        if (this.chucVu == "Sếp") { tongLuong = this.luongCB * 3 };
        if (this.chucVu == "Trưởng phòng") { tongLuong = this.luongCB * 2 };
        if (this.chucVu == "Nhân viên") { tongLuong = this.luongCB * 1 };
        return tongLuong;
    };
    this.xepLoai = function () {
        let xepLoai = "";
        if (this.gioLam >= 192) { xepLoai = "Nhân Viên Xuất Xắc" };
        if (this.gioLam >= 176) { xepLoai = "Nhân Viên Giỏi" };
        if (this.gioLam >= 160) { xepLoai = "Nhân Viên Khá" };
        if (this.gioLam < 160) { xepLoai = "Nhân Viên Trung Bình" };
        return xepLoai;
    };
}