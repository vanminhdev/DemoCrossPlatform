let student = {
    id: 1,
    name: "Nguyễn Văn A",
    address: {
        city: "Hà Nội",
        district: "Cầu Giấy"
    }
}

let student2 = { ...student };

student2.name = "Nguyễn Văn B";

console.log(student); //có thay đổi hay không

student2.address.district = "Hai Bà Trưng";

console.log(student); //có thay đổi hay không

//nếu có bị thay đổi thì đề xuất giải pháp copy object riêng biệt

let student3 = { ...student, address: { ...student.address  }, id: 2 };

console.log(student3);
