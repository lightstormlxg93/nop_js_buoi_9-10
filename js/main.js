let dsNguoiDung = [];

// lấy thông tin từ localStorage
let dataJason = localStorage.getItem("dsNguoiDung");
let dsNguoiDung2 = JSON.parse(dataJason);
for (i = 0; i < dsNguoiDung2.length; i++) {
    let nd = new nguoiDung(
        dsNguoiDung2[i].taiKhoan,
        dsNguoiDung2[i].name,
        dsNguoiDung2[i].email,
        dsNguoiDung2[i].password,
        dsNguoiDung2[i].datePicker,
        dsNguoiDung2[i].luongCB,
        dsNguoiDung2[i].chucVu,
        dsNguoiDung2[i].gioLam,
    );
    dsNguoiDung.push(nd);
};
renderNd();


function themNd() {
    let nguoiDung = layThongTinTuForm();
    dsNguoiDung.push(nguoiDung);
    renderNd();
    luuThongTin();
}


function xoaNd(id) {
    for (i = 0; i < dsNguoiDung.length; i++) {
        data = dsNguoiDung[i];
        if (data.taiKhoan == id) {

            dsNguoiDung.splice(i, 1);
        };
    };
    renderNd();
    luuThongTin();

}

