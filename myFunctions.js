let content = document.getElementById("#content");
let dataContent=content.dataset.content;

let headerStudentTable = ["أسم الطالب", "الرقم الجامعي", "الصف"];
let dataStudentTable = [
    {Name:"إيناس كريم", UserName: "enas_253469",Class: "C2"},
    {Name:"أسعد فارس", UserName: "asaad_271024",Class: "C2"},
    {Name:"ماجد برهمجي", UserName:"Majed_307080",Class: "C2"},
    {Name:"محمد بدر الدين أيوبي",UserName: "Mohammad_bdr_aldeen_ayoubi_306016",Class: "C2"},
];
let headerHouseTable = ["المدينة", "تفاصيل", "الإيجار الشهري","إظهار التفاصيل","اختيار"];
let dataHouseTable = [
    {Country:"دمشق",
        Deteils: "شقة غرفة وصالة، مساحة 70م²",
        RentPrice: "500,000 ل.س",
        showDeteils:"<input type='checkbox'>",
        choise:"radio",allDetails:["المنطقة : ركن الدين",
            "متوفر كراج",
            "طابق الثالث>",
            "الملكية : طابو",
            "بلكون مساحة 12 متر",
            "مفروشة",
            "./assets/Houses/1.webp",
            "./assets/Houses/2.webp",
            "./assets/Houses/3.webp"]},
    {Country:"دمشق",
        Deteils: "شقة غرفة وصالة، مساحة 70م²",
        RentPrice: "550,000 ل.س",
        showDeteils:"<input type='checkbox'>",
        choise:"radio",allDetails:["المنطقة : ساحة الميسات",
            "متوفر كراج",
            "طابق الثالث",
            "الملكية : طابو",
            "بلكون مساحة 12 متر",
            "مفروشة",
            "./assets/Houses/4.webp",
            "./assets/Houses/5.webp",
            "./assets/Houses/6.webp"]},
    {Country:"دمشق",
        Deteils: "شقة غرفتين وصالة، مساحة 120م²	",
        RentPrice: "850,000 ل.س",
        showDeteils:"<input type='checkbox'>",
        choise:"radio",allDetails:["المنطقة : المزة",
            "متوفر كراج",
            "طابق الثاني",
            "الملكية : طابو",
            "بلكون مساحة 20 متر",
            "مفروشة",
            "./assets/Houses/7.webp",
            "./assets/Houses/8.webp",
            "./assets/Houses/9.webp"]},
    {Country:"دمشق",
        Deteils: "شقة غرفة وصالة، مساحة 75م²",
        RentPrice: "600,000 ل.س",
        showDeteils:"<input type='checkbox'>",
        choise:"radio",allDetails:["المنطقة : المزرعة",
            "غير متوفر كراج",
            "طابق الأول",
            "الملكية : حكم محكمة",
            "بلكون مساحة 16 متر",
            "مفروشة",
            "./assets/Houses/10.webp",
            "./assets/Houses/11.webp",
            "./assets/Houses/12.webp"]},
    {Country:"ريف دمشق",
        Deteils: "شقة غرفة وصالة، مساحة 70م²",
        RentPrice: "700,000 ل.س",
        showDeteils:"<input type='checkbox'>",
        choise:"radio",allDetails:["المنطقة : جرمانا",
            "غير متوفر كراج",
            "طابق الخامس",
            "الملكية : طابو",
            "بلكون مساحة 10 متر",
            "مفروشة",
            "./assets/Houses/13.webp",
            "./assets/Houses/14.webp",
            "./assets/Houses/15.webp"]},
    {Country:"حلب",
        Deteils: "شقة غرفة وصالة، مساحة 150م²",
        RentPrice: "800,000 ل.س",
        showDeteils:"<input type='checkbox'>",
        choise:"radio",allDetails:["المنطقة : المحافظة",
            "غير متوفر كراج",
            "طابق الثالث",
            "الملكية : طابو",
            "بلكون مساحة 10 متر",
            "مفروشة",
            "./assets/Houses/16.webp",
            "./assets/Houses/17.webp",
            "./assets/Houses/18.webp"]},
    {Country:"حلب",
        Deteils: "شقة غرفة وصالة، مساحة 170م²",
        RentPrice: "1,000,000 ل.س",
        showDeteils:"<input type='checkbox'>",
        choise:"radio",allDetails:["المنطقة : السبيل",
            "غير متوفر كراج",
            "طابق الأول",
            "الملكية : طابو",
            "بلكون مساحة 20 متر",
            "مفروشة",
            "./assets/Houses/19.webp",
            "./assets/Houses/20.webp",
            "./assets/Houses/21.webp"]},
    {Country:"اللاذقية",
        Deteils: "شقة غرفة وصالة، مساحة 150م²",
        RentPrice: "5,00,000 ل.س",
        showDeteils:"<input type='checkbox'>",
        choise:"radio",allDetails:["المنطقة : الزقزقانية",
            "متوفر كراج",
            "طابق الثالث",
            "الملكية : طابو",
            "بلكون مساحة 15 متر",
            "مفروشة",
            "./assets/Houses/22.webp",
            "./assets/Houses/23.webp",
            "./assets/Houses/24.webp"]},
    {Country:"حمص",
        Deteils: "شقة غرفة وصالة، مساحة 150م²",
        RentPrice: "800,000 ل.س",
        showDeteils:"<input type='checkbox'>",
        choise:"radio",allDetails:["المنطقة : الكلاسة",
            "غير متوفر كراج",
            "طابق الثالث",
            "الملكية : طابو",
            "بلكون مساحة 11 متر",
            "مفروشة</p>",
            "./assets/Houses/25.webp",
            "./assets/Houses/26.webp",
            "./assets/Houses/27.webp"]},
    {Country:"حمص",
        Deteils: "شقة غرفة وصالة، مساحة 160م²",
        RentPrice: "850,000 ل.س",
        showDeteils:"<input type='checkbox'>",
        choise:"radio",allDetails:["المنطقة : حي الورود",
            "غير متوفر كراج",
            "طابق الثالث",
            "الملكية : طابو",
            "بلكون مساحة 12 متر",
            "مفروشة",
            "./assets/Houses/28.webp",
            "./assets/Houses/29.webp",
            "./assets/Houses/30.webp"]},
];


// Create element table 
let $table = $("<table></table>").addClass("myTable");
let $thead = $("<thead></thead>");
let $headerRow = $("<tr></tr>");
//add Header To Table
function addHeaderToTable(headers,$headerRow){
    $.each(headers, function(i,header) {
        $headerRow.append($("<th></th>").text(header));
    });
}
// create Table Student From Object
function createTableStudentFromObject(headers,data) {
    // Append header to row
    addHeaderToTable(headers,$headerRow)
    $thead.append($headerRow);
    $table.append($thead);

    // Append data to rows
    $.each(data, function(i, rowData) {
        var $row = $("<tr></tr>");
        $.each(rowData, function(j, cellData) {
            $row.append($("<td></td>").text(cellData));
        });
        $table.append($row);
    });

    // Append the table to the container
    $("#tableContainer").append($table);
}
// create Table Houses From Object
function createTableHousesFromObject(headers,data) {
    // Create form  element  
    let $form = $("<form></form>").attr("method","POST","dir","rtl");

    // Append table to form
    $form.append($table)
    // add Header To Table
    addHeaderToTable(headers,$headerRow)
    $thead.append($headerRow);
    $table.append($thead);
    // Append data to rows
    $.each(data, function(i, rowData) {
        let $tRow = $("<tr hidden class='row_Deteils property-details'></tr>");
        let $row = $("<tr class='row_content'></tr>");
        let $col = $("<td></td>");
        $.each(rowData, function(j, cellData) {
            
            if(j=="Country"||j=="Deteils"){
                $row.append($row.append($("<td></td>").append(cellData)))
             }else if(j=="RentPrice"){
                $row.append($row.append($("<td></td>").attr("class","dir").attr("id","price"+(i+1)).append(cellData)))
             }else if(j=="showDeteils"){
                $row.append($("<td></td>").append($("<input type='checkbox'>").attr("data-house",i+1).attr("id","house"+(i+1)).attr("class","row__checkbox")));
             }
            else if(j=="choise"){
                $row.append($("<td></td>").append($("<input type='radio' name='option'>").attr("id",(i+1)).attr("value","option"+(i+1))));
            }
            else{          
                
                $tRow.attr("data-deteils",(i+1)).attr("id","property-details"+(i+1))
                $col.attr("colspan","5").attr("id","deteils"+(i+1))
                for(let k =0;k<6;k++){
                    $col.append($("<p></p>").append(cellData[k]))
                }
                for(let k =6;k<9;k++){
                    $col.append($("<img></img>").attr("src",cellData[k]))
                }
                
            }
        });
        $tRow.append($col)
        $table.append($row);
        $table.append($tRow);

    });

    // Append the table to the container
    $("#tableContainer").append($table);
}

// showForm
function showForm() {

if($('input[name="option"]:checked').val()){
    document.getElementById('property-form').style.display = 'block';
    $(".property-form").addClass("fixed");
}else{
    alert("يرجى اختيار عقار.");
    return false;
}
}

// Close Form
function closeForm() {
    var form=document.getElementById('property-form');
    form.style.display='none';
}
// إغلاق الرسالة المنبثقة
function closePopup() {
    var popup = document.getElementById('popup-message');
    popup.style.display = 'none';
    closeForm();
}
// Return Deteils From Object to string 
function ReturnDeteilsFromObject(arr,index){
    let popupText ='';
    popupText += `: العقار المختار<br>`;
    popupText += `المدينة: ${arr[index].Country}<br>`;
    popupText += `التفاصيل: ${arr[index].Deteils}<br>`;
    popupText += `الإيجار الشهري: ${arr[index].RentPrice}<br>`;

    return popupText;
}

// check Input Form
function checkInputForm(isValid){
    let fullName = $('#fullname').val();
    let nationalID = $('#national-id').val();
    let dob = $('#dob').val();
    let mobile = $('#mobile').val();
    let email = $('#email').val();
    let captcha = $('#captcha-container').val();
    // التحقق من الاسم الكامل
    if (!/^[\u0621-\u064A\s]+$/.test(fullName)) {
        alert("الاسم الكامل يجب أن يحتوي على أحرف هجائية فقط.");
        isValid = false;
    }
    // التحقق من الرقم الوطني
    if (!/^(0[1-9]|1[0-4])[0-9]{9}$/.test(nationalID)) {
        alert("الرقم الوطني يجب أن يتكون من 11 رقم ويتضمن ببدايته (01-02-03-04-05-06-07-08-09-10-11-12-13-14).");
        isValid = false;
    }
    // التحقق من رقم الموبايل
    if (!/^09(3[3-9]|4[4-9]|5[0-9]|9[0-9])\d{6}$/.test(mobile)) {
        alert("رقم الموبايل غير صالح.");
        isValid = false;
    }
    // التحقق من البريد الإلكتروني (اختياري)
    if (email !== "" && !/^[^ ]+@[^ ]+\.[a-z]{2,6}$/.test(email)) {
        alert("البريد الإلكتروني غير صالح.");
        isValid = false;
    }
}

// check Form
function checkForm(event) {
    event.preventDefault();
    
    let isValid = true;
    // check Input Form
    checkInputForm(isValid)

    
    let enteredCaptcha = document.getElementById('captcha-input').value;
    let displayedCaptcha = document.getElementById('captcha-code').textContent;

    if (enteredCaptcha !== displayedCaptcha) {
        alert('رمز التحقق غير صحيح. يرجى المحاولة مرة أخرى.');
        isValid = false;
    } else {
        alert('تم إرسال الطلب بنجاح!');
        // هنا يمكنك إضافة الكود لإرسال النموذج فعليًا
    }

    if (isValid) {
        // Retrieve selected property details
        let str = $('input[name="option"]:checked').attr("value");
        let idHouseSelected = parseInt(str[6])-1;
        let popupText='';
        popupText =ReturnDeteilsFromObject(dataHouseTable,idHouseSelected);
        // Display popup message
        $('#popup-text').html(popupText);
        $('#popup-message').fadeIn();
    }
      
};

// دالة لتوليد الرمز Captcha
function generateCaptcha() {
    const length = 4;
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let captcha = "";
    
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        captcha += charset[randomIndex];
    }
    
    return captcha;
}

// دالة لعرض الرمز Captcha داخل العنصر النصي
function showCaptcha() {
    let captchaCode = generateCaptcha();
    let captchaSpan = document.getElementById('captcha-code');
    captchaSpan.textContent = captchaCode;
}

// دالة لتحديث الرمز Captcha عند الضغط على الزر "تحديث الرمز"
function refreshCaptcha() {
    showCaptcha();
}

// عرض الرمز Captcha عند تحميل الصفحة لأول مرة
document.addEventListener('DOMContentLoaded', showCaptcha);

// create table by page
function GetPage(){

    switch (dataContent) {
        case "Home":
            createTableStudentFromObject(headerStudentTable,dataStudentTable);
            break;
        case "Properties":
             createTableHousesFromObject(headerHouseTable,dataHouseTable);
             $('#application-form').submit(checkForm)
            break;
        default:
            break;
    }
    
}

// toggle deteils Houses
$($table).click(function() {
    $('input[type="checkbox"]').change(function() {
        if($(this).is(":checked")) {
            const this_checked=this.dataset.house;
            $('.row_Deteils').each(function(){
                if(this.dataset.deteils==this_checked){
                    $(this).show();
                }
            })
        }else{
            const this_checked=this.dataset.house;
            $('.row_Deteils').each(function(){
                if(this.dataset.deteils==this_checked){
                    $(this).hide();
                }
            })
        }
      });
  });
