// BÀI 1 : tính tiền lương nhân viên

        // Mô hình 3 khối:

        // bước 1: giả sử số ngày làm là 30 ngày (100.000/NGÀY)

        // bước 2: lương = 100 * số ngày

        // bước 3: lương = ?
        var thanhTien = document.getElementById('thanhTien1');
        thanhTien.onclick = function (e) {
            e.preventDefault();
            var soNgay = +document.getElementById('soNgay').value;
            var tongLuong = document.getElementById('tongLuong');
            tongLuong.innerHTML = (soNgay * 100000 ).toLocaleString() + 'VND';
        };





        // BÀI 2 : Tính giá trị trung bình

        // Mô hình 3 khối:

        // bước 1: giả sử n = 12345

        // bước 2: 
        /*
         -lấy số hàng chục nghìn : n /10.000
         -lấy số hàng  nghìn : n/ 1000 % 10
         -lấy số hàng trăm : n / 100 % 10
         -lấy số hàng chục : n % 100 / 10
         -lấy số hàng đơn vị : n % 10
        
         => tổng / 5
        */

        // bước 3: giá trị trung bình = ?


        var btnTrungBinh = document.getElementById("btnTrungBinh");
        btnTrungBinh.onclick = function (e) {
            e.preventDefault();
            var input = +document.getElementById("input").value;
            
            // lấy giá trị hàng trăm ngàn, ngàn, trăm, chục, đơn vị
            
            var chucNgan = Math.floor((input / 10000));
            var ngan = Math.floor((input / 1000 % 10));
            var tram = Math.floor(input / 100 % 10);
            var chuc = Math.floor(input % 100 / 10); 
            var donVi = Math.floor(input % 10);
            console.log(typeof(input))
            // tính trung bình
            var trungBinh = (chucNgan + ngan + tram + chuc + donVi) / 5;
            var spanTrungBinh = document.getElementById("spanTrungBinh");
            spanTrungBinh.innerHTML = trungBinh;
        }






         // Bài 3 : quy đổi tiền

        // bước 1: giả sử số tiền cần đổi là 10$ (23.500/$)

        // bước 2: tiền = 23.500 * số tiền cần đổi

        // bước 3: tiền = ?
        var thanhTien = document.getElementById('thanhTien');
        thanhTien.onclick = function (e) {
            e.preventDefault();
            var soTien = +document.getElementById('soTien').value;

            var tongTien = document.getElementById('tongTien');
            tongTien.innerHTML = (soTien * 23500 ).toLocaleString() + 'VND';
        };





        //Bài 4 : tình Chu vi , diện tích

        // bước 1 : giả sử
        // -chiều dài = 10 
        // -chiều rông = 5

        //bước 2:
        // -diện tích = dài * rộng
        // -chu vi = (dài + rong)*2

        //bước 3 : kết quả = ?
        

        // tính diện tích
        var dienTich = document.getElementById("dienTich")
        dienTich.onclick = function (e) {
            e.preventDefault();
            //chiều dài
            var chieuDai = +document.getElementById('chieuDai').value;
            // chiều rộng
            var chieuRong = +document.getElementById('chieuRong').value;
            
            var spanDienTich = document.getElementById('pDienTich');
            pDienTich.style.display = 'block';
            var spanDienTich = document.getElementById('spanDienTich');
            var pChuVi = document.getElementById('pChuVi');
            pChuVi.style.display = 'none';
            //tính diện tích
            spanDienTich.innerHTML = (chieuDai * chieuRong).toLocaleString();
        }

        // tính chu vi
        var chuVi = document.getElementById("chuVi")
        chuVi.onclick = function (e) {
            e.preventDefault();
            // chiều dài
            var chieuDai = +document.getElementById('chieuDai').value;
            // chiều rông
            var chieuRong = +document.getElementById('chieuRong').value;

            var pChuVi = document.getElementById('pChuVi');
            pChuVi.style.display = 'block';
            var spanDienTich = document.getElementById('pDienTich');
            pDienTich.style.display = 'none';
            // tính chu vi
            var spanChuvi = document.getElementById('spanChuvi');
            spanChuvi.innerHTML = ((chieuDai + chieuRong) * 2).toLocaleString();
        }




        /* Bài 5: tính tổng 2 ký số

            bước 1 : giả sử n = 21

            bước 2 : 
            -lấy số hàng chục : n / 10
            -lấy số hàng đơn vị : n % 10

            bước 3 : kết quả = ?

        */
       var btnTong = document.getElementById('btnTong5');
       btnTong.onclick = function(e){
           e.preventDefault();
            var input = +document.getElementById('input5').value;
            
            var Tong2So = Math.floor((input / 10) + (input % 10));
 
            // tổng 2 số
            var spanTong = document.getElementById('spanTong5');
            spanTong.innerHTML = Tong2So;
       }