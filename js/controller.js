function renderNd() {
    let content = "";
    for (let i = 0; i < dsNguoiDung.length; i++) {
        let data = dsNguoiDung[i];
        let string = `
            <tr>
                <td>${data.taiKhoan}</td>
                <td>${data.name}</td>
                <td>${data.email}</td>
                
                <td>${data.datePicker}</td>
                <td>${data.chucVu}</td>
                <td>${data.tongLuong()}</td>
                
                <td>${data.xepLoai()}</td>
                <td> <button class="btn btn-danger" onclick="xoaNd('${data.taiKhoan}')" >Xóa</button>  </td>
                
            </tr>  `;

        content = content + string;

    }
    document.getElementById("tableDanhSach").innerHTML = content;

}

function layThongTinTuForm(){
    let taiKhoan = document.getElementById("tknv").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let datePicker = document.getElementById("datepicker").value;
    let luongCB = document.getElementById("luongCB").value * 1;
    let chucVu = document.getElementById("chucvu").value;
    let gioLam = document.getElementById("gioLam").value * 1;

    let nguoiDung = {
        taiKhoan: taiKhoan,
        name: name,
        email: email,
        password: password,
        datePicker: datePicker,
        luongCB: luongCB,
        chucVu: chucVu,
        gioLam: gioLam,
        tongLuong: function () {
            let tongLuong;
            if (this.chucVu == "Sếp") { tongLuong = this.luongCB * 3 };
            if (this.chucVu == "Trưởng phòng") { tongLuong = this.luongCB * 2 };
            if (this.chucVu == "Nhân viên") { tongLuong = this.luongCB * 1 };
            return tongLuong;
        },
        xepLoai: function () {
            let xepLoai = "";
            if (this.gioLam >= 192) { xepLoai = "Nhân Viên Xuất Xắc" };
            if (this.gioLam >= 176) { xepLoai = "Nhân Viên Giỏi" };
            if (this.gioLam >= 160) { xepLoai = "Nhân Viên Khá" };
            if (this.gioLam < 160) { xepLoai = "Nhân Viên Trung Bình" };
            return xepLoai;
        },
    };
    return nguoiDung;
}

function luuThongTin(){
    // lưu thông tin xuống localStorage 
    let dataJason = JSON.stringify(dsNguoiDung);
    localStorage.setItem("dsNguoiDung", dataJason);
}