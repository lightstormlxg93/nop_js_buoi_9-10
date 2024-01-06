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


function edit(taiKhoan) {
    for (i = 0; i < dsNguoiDung.length; i++) {
        let nd = dsNguoiDung[i];
        if (nd.taiKhoan == taiKhoan) {
            document.getElementById("tknv").value = nd.taiKhoan;
            document.getElementById("name").value = nd.name;
            document.getElementById("email").value = nd.email;
            document.getElementById("password").value = nd.password;
            document.getElementById("datepicker").value = nd.datePicker;
            document.getElementById("luongCB").value = nd.luongCB;
            document.getElementById("chucvu").value = nd.chucVu;
            document.getElementById("gioLam").value = nd.gioLam;
        }
    }
}


function capNhat() {
    let nguoiDung = layThongTinTuForm();
    for (i = 0; i < dsNguoiDung.length; i++) {
        if (nguoiDung.taiKhoan == dsNguoiDung[i].taiKhoan) {
            dsNguoiDung[i] = nguoiDung;
        }
    }
    
    renderNd();
    luuThongTin();
}

function timNd() {
    let xL = document.getElementById("searchName").value;
    if (xL == "giỏi" || xL == "Giỏi" || xL == "GIỎI") {
        xL = "Giỏi"
    }
    else if (xL == "khá" || xL == "Khá" || xL == "KHÁ") {
        xL = "Khá"
    }
    else if (xL == "trung bình" || xL == "Trung Bình" || xL == "Trung bình" || xL == "trung Bình" || xL == "TRUNG BÌNH") {
        xL = "Trung Bình"
    }
    else if (xL == "xuất xắc" || xL == "Xuất xắc" || xL == "Xuất Xắc" || xL == "xuất Xắc" || xL == "XUẤT XẮC") {
        xL = "Xuất Xắc"
    }
    else {
        alert("Nhập dữ liệu xếp loại không đúng, HÃY NHẬP LẠI");
    };


    let dsNguoiDungXl = [];
    for (i = 0; i < dsNguoiDung.length; i++) {
        if (dsNguoiDung[i].xepLoai() == xL) {
            dsNguoiDungXl.push(dsNguoiDung[i]);
        }

    }
    // render 
    let content = "";
    for (let i = 0; i < dsNguoiDungXl.length; i++) {
        let data = dsNguoiDungXl[i];
        let string = `
            <tr>
                <td style="vertical-align: middle">${data.taiKhoan}</td>
                <td style="vertical-align: middle">${data.name}</td>
                <td style="vertical-align: middle">${data.email}</td>
                
                <td style="vertical-align: middle">${data.datePicker}</td>
                <td style="vertical-align: middle">${data.chucVu}</td>
                <td style="vertical-align: middle">${data.tongLuong()}</td>
                
                <td style="vertical-align: middle">${data.xepLoai()}</td>
                <td style="vertical-align: middle">  
                <button class="btn btn-danger" onclick="xoaNd('${data.taiKhoan}')" >Xóa</button> <br> <br>
                <button class="btn btn-danger" onclick="edit('${data.taiKhoan}')"  data-toggle="modal" data-target="#myModal">Edit</button>
                </td>
                
            </tr>  `;

        content = content + string;

    }
    document.getElementById("tableDanhSach").innerHTML = content;



}