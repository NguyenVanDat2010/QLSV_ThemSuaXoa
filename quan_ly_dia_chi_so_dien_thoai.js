let arrStudent=['Codegym','Nguyễn Văn Nam','Hoàng Quốc Việt'],
    arrAdress=['Nhà số 23, TT-01, Khu đô thị MonCity, Hàm Nghi, Mỹ Đình1, Nam Từ Liêm, Hà Nội',
    'Số 26, Mễ Trì Hạ, Nam Từ Liêm, Hà Nội',
    'Số 156, Võ Thị Sáu, Tp VInh, Nghệ An'],
    arrPhone=['02462538829','0326898745','0965483248'];
let k=0;
let count=arrAdress.length;
window.onload=function () {showStudent();};

//Tạo sinh viên---------------------------------------------------------------------------------------------------------
function createStudent(nameStudent,addressStudent,phoneStudent) {
    if (nameStudent==''||addressStudent==''||phoneStudent==''){
        return false;
    }
    let createPhone=Number(phoneStudent);
    if (!createPhone){
        return false;
    } else if (nameStudent<=2||addressStudent<5||phoneStudent<9){
        return false;
    }else {
        for (let i=0 ;i<arrStudent.length;i++){
            if (nameStudent==arrStudent[i]){
                return false
            }
        }
        arrStudent.push(nameStudent);
        arrAdress.push(addressStudent);
        arrPhone.push(phoneStudent);
        return true;
    }
}

//Thêm sinh viên--------------------------------------------------------------------------------------------------------
function addStudent() {
    let inputStudent= document.getElementById("student").value;
    let inputAdress= document.getElementById("adress").value;
    let inputPhone= document.getElementById("phone").value;
    if (createStudent(inputStudent,inputAdress,inputPhone)){
        alert("Thêm mới thành công.");
        count++;
        document.getElementById("student").value='';
        document.getElementById("adress").value='';
        document.getElementById("phone").value='';
        document.getElementById("student").focus();
    }else {
        alert("Thông tin không đúng, bạn vui lòng nhập lại.")
    }
    showStudent();
}

//Hiển thị sinh viên----------------------------------------------------------------------------------------------------
function showStudent() {
    let data='<table>'+'<tr>' +
        '<th>STT</th>'+
        '<th>Tên sinh viên</th>'+
        '<th>Địa chỉ</th>'+
        '<th>Số điện thoại</th>'+
        '<th>Sửa SV</th>'+
        '<th>Xóa SV</th>'+
        '</tr>';
    for (let i=0; i<arrStudent.length;i++){
        data+='<tr>'+
            '<td>'+(i+1)+'</td>'+
            '<td>'+arrStudent[i]+'</td>'+
            '<td>'+arrAdress[i]+'</td>'+
            '<td>'+arrPhone[i]+'</td>'+
            '<td>'+'<input type="button" value="Sửa SV" onclick="editStudent('+i+');">'+'</td>'+
            '<td>'+'<input type="button" value="Xóa SV" onclick="deleteStudent('+i+');">'+'</td>'+
            '</tr>';
    }
    data+='</table>';
    document.getElementById("result").innerHTML=data;
    document.getElementById("countsv").innerHTML=count;
}

//Sửa thông tin sinh viên-----------------------------------------------------------------------------------------------
 function editStudent(index) {
     k=index;
     //Bật tắt nút BUTTON
     document.getElementById("btnSave").disabled=false;
     document.getElementById("btnAdd").disabled=true;

     //Lấy dữ liệu từ mảng lên thẻ input
     document.frmstudent.student.value=arrStudent[index];
     document.frmstudent.phone.value=arrPhone[index];
     document.frmstudent.adress.value=arrAdress[index];
     document.getElementById('student').focus();
 }

//Lưu lại sinh viên đã sửa----------------------------------------------------------------------------------------------
function saveStudent(index) {
    index=k;
    //Bật tắt nút BUTTON
     document.getElementById("btnSave").disabled=true;
     document.getElementById("btnAdd").disabled=false;

    //Lấy dữ liệu từ thẻ input text nhập vào mảng
    let editName = document.getElementById("student").value;
     let editPhone = document.getElementById("phone").value;
     let editAdress = document.getElementById("adress").value;
     let savePhone=Number(editPhone);
     if (editName==''||editPhone==''||editAdress==''||!savePhone) {
         alert("Thông tin không đúng, bạn vui lòng nhập lại.");
     }else {
         alert("Thay đổi thành công");
         arrStudent[index] = editName;
         arrPhone[index] = editPhone;
         arrAdress[index] = editAdress;

         //Gán giá trị rỗng cho thẻ INPUT
         document.getElementById("student").value = '';
         document.getElementById("phone").value = '';
         document.getElementById("adress").value = '';
     }
     showStudent();
 }

//Xóa sinh viên---------------------------------------------------------------------------------------------------------
 function deleteStudent(index) {
     let optionDelete=confirm("Bạn có chắc chắn muốn xóa không?");
     if (optionDelete){
         arrStudent.splice(index,1);
     }
     showStudent();
 }

//Reset lại ô nhập------------------------------------------------------------------------------------------------------
 function resetStudent() {
     //Bật tắt nút BUTTON
     document.getElementById("btnSave").disabled=true;
     document.getElementById("btnAdd").disabled=false;

     //Gán giá trị rỗng cho thẻ INPUT
     document.getElementById("student").value='';
     document.getElementById("phone").value='';
     document.getElementById("adress").value='';
 }