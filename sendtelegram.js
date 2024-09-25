// //bot token
// var telegram_bot_id = "7452333265:AAFbamyNi7qJqUb0SfCIodZWq3SCSld8_LI"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
// //chat id
// var chat_id = 1483913495; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing
// var u_name, tel, email, kar, url, image, pets, mas;
// var ready = function() {
//     u_name = document.getElementById("name").value;
//     tel = document.getElementById("tel").value;
//     email = document.getElementById("email").value;
//     kar = document.getElementById("kar").value;
//     url = document.getElementById("url").value;
//     image = document.getElementById("image").value;
//     pets = document.getElementById("pets").value;
//     mas = document.getElementById("mas").value;

//     message = "Ism: " + u_name + "\nTel raqam: " + tel + "\nEmail: " + email + "\nKarta raqam: " + kar + "\nUrl: " + url + "\nRasm: " + image + "\nTanlov: " + pets + "\nXabar: " + mas;
// };
// var sendtelegram = function() {
//     ready();
//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
//         "method": "POST",
//         "headers": {
//             "Content-Type": "application/json",
//             "cache-control": "no-cache"
//         },
//         "data": JSON.stringify({
//             "chat_id": chat_id,
//             "text": message
//         })
//     };
//     $.ajax(settings).done(function(response) {
//         console.log(response);
//     });
//     document.getElementById("name").value = "";
//     document.getElementById("tel").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("kar").value = "";
//     document.getElementById("url").value = "";
//     document.getElementById("image").value = "";
//     document.getElementById("pets").value = "";
//     document.getElementById("mas").value = "";
//     return false;
// };


// JavaScript qismi
var telegram_bot_id = "7452333265:AAFbamyNi7qJqUb0SfCIodZWq3SCSld8_LI"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
var chat_id = 1483913495; // Bu joyda habar borishi kerak bo'lgan chat ID'sini yozing
var u_name, tel, email, kar, url, pets, mas;

var ready = function() {
    u_name = document.getElementById("name").value;
    tel = document.getElementById("tel").value;
    email = document.getElementById("email").value;
    kar = document.getElementById("kar").value;
    url = document.getElementById("url").value;
    pets = document.getElementById("pets").value;
    mas = document.getElementById("mas").value;

    message = "Ism: " + u_name +
              "\nTel raqam: " + tel +
              "\nEmail: " + email +
              "\nKarta raqam: ```" + kar + "```" + // Karta raqamini nusxalashga qulay holatga kiritish
              "\nUrl: " + url +
              "\nTanlov: " + pets +
              "\nXabar: " + mas;
};

var sendtelegram = function() {
    ready();

    // Faylni yuklash uchun FormData obyektidan foydalanamiz
    var formData = new FormData();
    formData.append("chat_id", chat_id);
    formData.append("caption", message); // Xabarni rasm tagida ko'rsatish uchun
    formData.append("photo", document.getElementById("image").files[0]); // Yuklangan rasm fayli
    formData.append("parse_mode", "Markdown");

    $.ajax({
        url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendPhoto",
        method: "POST",
        processData: false,
        contentType: false,
        data: formData,
        success: function(response) {
            console.log(response);
        },
        error: function(error) {
            console.error("Xatolik yuz berdi:", error);
        }
    });

    // Input maydonlarini tozalash
    document.getElementById("name").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("email").value = "";
    document.getElementById("kar").value = "";
    document.getElementById("url").value = "";
    document.getElementById("image").value = "";
    document.getElementById("pets").value = "";
    document.getElementById("mas").value = "";
    
    return false;
};
