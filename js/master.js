// Rotate The svg & Setting-box Toggel
let SettingBox = document.querySelector(".Setting-box")
let Iconsvg = document.querySelector(".Setting-box .icon-box");
let RotateSvg = document.querySelector(".Setting-box .icon");
Iconsvg.onclick = function () {
    RotateSvg.classList.toggle("rotate");
    SettingBox.classList.toggle("open")
}
/////////////////////////////////////////
// Color black & White
let ThemColor = document.querySelectorAll(".Setting-box .container .option-box .The-Option > div");
let ChoseThemColor = localStorage.getItem("Them-Color")
let Root = document.querySelector(":root");
let ChoseColor = document.querySelectorAll(".Setting-box .container .option-box ul.The-Option>li");
let MainColor = localStorage.getItem("Chose-Color")
// Test
if (MainColor !== null)
{
    document.documentElement.style.setProperty(`--main-color`, MainColor);
    // Remove Class active-color on Element Class
    ChoseColor.forEach((li) => {
        li.classList.remove("active-color")
        // Add Class active-color
        if (li.dataset.color === MainColor)
        {
            // Add Class active-color on Element Class
            li.classList.add("active-color");
        }
    })
}
// Test
if (ChoseThemColor !== null)
{
    document.documentElement.style.setProperty(`--White-color`, ChoseThemColor);
    document.documentElement.style.setProperty(`--Black-color`, ChoseThemColor);
}
ChoseColor.forEach((e) => {
    e.onclick = function () {
        ThemColor.forEach((ele) => {
            ele.onclick = function () {
                if (ele.innerHTML === 'أسود')
                {
                    Root.style.cssText = `--White-color : black; --Black-color : white; --main-color : ${e.dataset.color}`
                    localStorage.setItem("Them-Color", ele.dataset.them)
                } else
                {
                    Root.style.cssText = `--White-color : white; --Black-color : black; --main-color : ${e.dataset.color}`
                    localStorage.setItem("Them-Color", ele.dataset.them)

                }
            }
        })
        /////////////////////////////////////////
        // Chose Color
        // document.documentElement.style.setProperty(`--main-color`, localStorage.getItem("Chose-Color"))
        // Remove Class active-color on Element Class
        ChoseColor.forEach((li) => {
            li.classList.remove("active-color")
        })
        // Add Class active-color on Element Class
        e.classList.add("active-color")
        // Local Storage & Set Color
        // document.documentElement.style.setProperty( e.dataset.color,`--main-color`);
        Root.style.cssText = `--main-color : ${e.dataset.color}`
        // Local Storage
        localStorage.setItem("Chose-Color", e.dataset.color)
    }
})

////////////////////////////////////////
// The Clear Button
let ClearButton = document.querySelector(".Reset-Option")
ClearButton.onclick = function () {
    window.localStorage.removeItem('Chose-Color')
    window.localStorage.removeItem('font_value')
    window.localStorage.removeItem('Show-Bullets')
    window.localStorage.removeItem('Class-Name')
    window.localStorage.removeItem('Them_color_Class')
    window.location.reload()
}
////////////////////////////////////////
// Toggel Menu & Close
let ToggelMenuClose  = document.querySelector("header .menu");
let MenuBox = document.querySelector("header .menu-box");
// let scrollbar =  document.querySelector(":root ::-webkit-scrollbar");
ToggelMenuClose.onclick = function()
{
    ToggelMenuClose.classList.toggle("toggel");
    MenuBox.classList.toggle("open");
    // scrollbar.classList.toggle('none')
};
////////////////////////////////////////
// close The Menu
let ColseTheMenu = document.querySelectorAll("header .menu-box .feat ");
ColseTheMenu.forEach((feat) => {
    feat.onclick = function () {
        ToggelMenuClose.classList.remove("toggel")
        MenuBox.classList.remove("open")

    }
})
////////////////////////////////////////
// lang Arabic & E
let lang = document.querySelectorAll("header .lang div");
lang.forEach((ele) => {
    ele.onclick = function () {
        lang.forEach((e) => {
            e.classList.remove("active")
        })
        ele.classList.toggle("active")
    }
})
////////////////////////////////////////
// The Span In History
let SpanToggel = document.querySelector(".History .container p output span.See");
let outputToggel = document.querySelector(".History .container p output span.Dot");
let DivToggel = document.querySelector(".History .container p  > span");

SpanToggel.onclick = function () {
    DivToggel.classList.toggle("open");
    if (DivToggel.classList.contains("open") === true)
    {
        SpanToggel.innerHTML = "أقرأ أقل"
        outputToggel.innerHTML = " "
    } else
    {
        SpanToggel.innerHTML = "أقرأ أكثر"
        outputToggel.innerHTML = "......"
    }
}
////////////////////////////////////////
// Gallary-View button
let Gallary = document.querySelector(".Gallary");
let CloseGallary = document.querySelector(".Gallary .close div")
let AddActiveClass = document.querySelectorAll(".Gallary aside div");
////////////////////////////////////////

// Creat Count Number
let CountNumber = document.querySelectorAll(".Number .number-box .The-Count .counter");
let NumberId = document.getElementById("Number");
let Started = false // Function Started ? No
// Creat Button Up
let ButtonUp = document.querySelector(".Button-Top");
// if (window.scrollY >= 100) {
    // ButtonUp.style.display = flex
// }else {
    // ButtonUp.style.display = flex
//
// }
ButtonUp.onclick = function () {
    window.scrollTo( {
        top: 0,
        behavior: ( "smooth" )
    } );
};
//////////////////////////////
// Creat animation
window.onscroll = function (){
    if (window.scrollY >= 415) {
        document.querySelector('.why').classList.add('Set-scroll-left')
    }
    if (window.scrollY >= 1746) {
        document.querySelector('.History .container .box#Date').classList.add('Set-scroll-Right')
        document.querySelector('.History .container .box#Massege').classList.add('Set-scroll-left')
    }
    if (window.scrollY >= 5012) {
        document.querySelectorAll('.Job .feat-00').forEach(e=> {
            e.classList.add('Show-opacity')
        })

    }
    if (window.scrollY >= 6858) {
        document.querySelectorAll('.Contact-Us .boxes .box').forEach(e=> {
            e.classList.add('Set-scroll-left')
        })
    }

        if (window.scrollY >= 120 )
        {
            ButtonUp.style.display = "flex";




        } else
        {
            ButtonUp.style.display = "none"
        }
        if (window.scrollY >= 3561) {

            if (!Started)
            CountNumber.forEach((num) => StartCount(num))
            Started = true;
            {
            }
            // CountNumber.forEach((num) => StartCount(num))
            // StartCount()
}
};
function ButtonTop() {
    if (window.scrollY >= 120 )
    {
        ButtonUp.style.display = "flex";
        if (!Started)
        CountNumber.forEach((num) => StartCount(num))
        {
    }
    Started = true;
} else
{
    ButtonUp.style.display = "none"
}
}
ButtonTop()



function StartCount(el) {
    let number = el.dataset.number;
    let count = setInterval( () =>
    {
        el.textContent++;
        if( el.textContent == number )
        {
            clearInterval( count );

            // FontFace.apply( Adg );
        };
    }, 2000/ number );
}
// })
////////////////////////////////////////
// Get Full Year Now
let GetFullYear = document.querySelector("footer .Text span");
let DateNow = new Date();
GetFullYear.innerHTML = DateNow.getFullYear();

///// Them Togell
const Body = document.querySelector('body');
let Them_Color = document.querySelector('.toggle-checkbox');
localStorage_Name()
function localStorage_Name() {
    if ( window.localStorage.getItem('Class-Name') === 'dark-color') {
        Body.classList.add(window.localStorage.getItem('Class-Name'))
        Them_Color.classList.add(window.localStorage.getItem('Them_color_Class'))
        Them_Color.removeAttribute('checked')
    }
}
Them_Color.onclick = function () {
    Them_Color.classList.toggle('checked');
    Body.classList.toggle('dark-color')
    if (Them_Color.classList[1] === 'checked') {
        window.localStorage.setItem('Them_color_Class', Them_Color.classList[1]);
        window.localStorage.setItem('Class-Name', Body.classList[0]);
    }else {
        window.localStorage.setItem('Them_color_Class', 'null');
        window.localStorage.setItem('Class-Name','null');
    }
    localStorage_Name()
}
/// Creat Search
let titles = [document.querySelectorAll('.title')];
let HistoryFeat = document.querySelectorAll('.History .container .feat');
let Result = document.querySelectorAll('.container-Result div');
let SearchInput = document.querySelector('header .search input');

function SerchType(value) {
    let table = '';
    let count = '';
    let chick = false;
    for(let i =0 ; i < titles[0].length ; i++ ) {
        if (value !== '') {
            chick = true;
            if (titles[0][i].innerHTML.includes(value) ){
                table += `
                <a href="#${titles[0][i].dataset.name}"> <div class="result"> ${titles[0][i].innerHTML} </div></a>
                `;
                chick = false;
            }

                if (
                    document.querySelectorAll('.container-Result .result').length === 8
                    ){
                    count = `
                    <span>عدد نتائج بحثك ${document.querySelectorAll('.container-Result .container a .result').length  + 1}</span>
                    <span onclick="ClickX()" class="Delete">X</span>
                    ` ;
                }else {
                    count = `
                    <span>عدد نتائج بحثك ${document.querySelectorAll('.container-Result .container a .result').length }</span>
                    <span onclick="ClickX()" class="Delete">X</span>
                    ` ;
                }
                document.querySelector('.container-Result .container').innerHTML = table
                document.querySelector('.container-Result .count').innerHTML = count
                document.querySelector('.container-Result').classList.add('open');
            }else {
                document.querySelector('.container-Result').classList.remove('open');
                SearchInput.value = ''
                document.querySelector('.container-Result .count').innerHTML = '';
                document.querySelector('.container-Result .container').innerHTML = '';
            }
        }
        if (chick === true) {
            if (document.querySelectorAll('.container-Result .result').length  === 0) {
                let Massege = '';
                Massege = `
                <div class="Massege">لا يوجد "${value}" في نواتج البحث</div>
                `;
                document.querySelector('.container-Result .container').innerHTML = Massege;
            }
        }else {
            if (document.body.contains(document.querySelector('.container-Result .Massege')) ) {
                document.querySelector('.container-Result .Massege').remove()
            }
        }
        document.querySelectorAll('.container-Result .result').forEach((div) => {
            div.onclick = function () {
                document.querySelector('.container-Result').classList.remove('open');
                SearchInput.value = ''
                document.querySelector('.container-Result .count').innerHTML = '';
                document.querySelector('.container-Result .container').innerHTML = '';
            }
    })
}
////////////////////////////////////////
// Button Search
let ButtonSearch = document.querySelector("header .search .Search-child");
let InputSearch = document.querySelector("header .search input");
let SearchOnly = document.querySelector( "header .search" );
ButtonSearch.addEventListener(("click"), function () {
    InputSearch.classList.toggle( "active" );
    SearchOnly.classList.toggle( "active" );
    document.querySelector('.container-Result').classList.remove('open');
    SearchInput.value = ''
    document.querySelector('.container-Result .count').innerHTML = '';
    document.querySelector('.container-Result .container').innerHTML = '';
})
////////////////////////////////////////
function ClickX() {
    InputSearch.classList.toggle( "active" );
    SearchOnly.classList.toggle( "active" );
    document.querySelector('.container-Result').classList.remove('open');
    SearchInput.value = ''
    document.querySelector('.container-Result .count').innerHTML = '';
    document.querySelector('.container-Result .container').innerHTML = '';
}
////////////////////////////////////////
// Show Bullets Or Not
let Bullets = document.querySelector('.Bullets');
let Bullets_All = document.querySelectorAll('.Setting-box .container .option-box:nth-child(3) .countan div');
let Bullets_No = document.querySelector('.Setting-box .container .option-box:nth-child(3) .countan div:first-child');
let Bullets_Yes = document.querySelector('.Setting-box .container .option-box:nth-child(3) .countan div:last-child');
Show_BUllets()
function Show_BUllets() {
    if (window.localStorage.getItem('Show-Bullets') === 'No') {
        Bullets_All.forEach(e=> {
            e.classList.remove('active')
        })
        Bullets_No.classList.add('active')
        Bullets.classList.add('None')

    }else {
        Bullets_All.forEach(e=> {
            e.classList.remove('active')
        })
        Bullets_Yes.classList.add('active')
        Bullets.classList.remove('None')
    }
}
Bullets_No.onclick = function () {
    Bullets_All.forEach(e=> {
        e.classList.remove('active')
    })
    Bullets_No.classList.add('active')
    Bullets.classList.add('None')
    window.localStorage.setItem('Show-Bullets',Bullets_No.classList[0] )
    Show_BUllets()
}
Bullets_Yes.onclick = function () {
    Bullets_All.forEach(e=> {
    e.classList.remove('active')
})
Bullets_Yes.classList.add('active')
    Bullets.classList.remove('None')
    window.localStorage.setItem('Show-Bullets',Bullets_Yes.classList[0] )
    Show_BUllets()
}

///
let Bullets_hraf = document.querySelectorAll('.Bullets .Bullet')
let Bullets_tooltip = document.querySelectorAll('.Bullets .Bullet .tooltip-zero')
scroll(Bullets_hraf)
function scroll(Element) {

    Element.forEach((ele) => {
        ele.addEventListener("click", (e) => {

            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: `smooth`
            });
        });
    });
}
////////////////////////////////////////
// Creat Online & Offline
// let title_Online = document.querySelector('.title-Online')
// let ul_Online = document.querySelector('.ul-Online')
// let button_Online = document.querySelector('.Reload')
//
// window.addEventListener('online', function() {
    // online_now()
// })
// window.addEventListener('offnline', function(){
    // offline_now()
// })
// button_Online.onclick = function () {
    // window.location.reload()
// }
// window.onload = function () {
    // if (window.navigator.onLine) {
        // online_now()
    // }else {
        // offline_now()
    // }
// }
//
// function online_now() {
    // title_Online.innerHTML = 'Online Now';
    // title_Online.style.color = 'green'
    // ul_Online.classList.add('None')
// }
//
// function offline_now() {
    // title_Online.innerHTML = 'Offline Now';
    // title_Online.style.color = 'black'
    // ul_Online.classList.remove('None')
// }
//


//////////////////////////
// Input Email Valied Or Not
let ArrayOfAllSubscribes;
if (localStorage.All_Email_Subscribes != null) {
    ArrayOfAllSubscribes =  JSON.parse(localStorage.All_Email_Subscribes)
}else{

    ArrayOfAllSubscribes = []
}
document.querySelector('.subscribe .container #button').onclick = function () {
    let Email = document.querySelector('.subscribe .container input:first-of-type');
    let Re = /(\w+@\w+.\w)/ig;
    if (Email.value.match(Re) !=null) {
        let popup ;
        popup = `
        <i class="fas fa-check-circle"></i>
              <p>تم إشتراكك بنجاح علي إيميلك</p>
              <div> ${Email.value} </div>
              <button>تم</button>
              `
              document.querySelector('.popup-Email').innerHTML = popup
              document.querySelector('.popup-Email').classList.add('display-block')
              document.querySelector('.popup-Email button').onclick = function () {
                   let   NewEmailSub = {
                      NameOfEmail : Email.value
                  }
                  ArrayOfAllSubscribes.push(NewEmailSub)
                  localStorage.setItem('All_Email_Subscribes', JSON.stringify(ArrayOfAllSubscribes))
                  console.log(ArrayOfAllSubscribes)
                  document.querySelector('.popup-Email ').classList.remove('display-block')
                  Email.value = ''
        }

    }
}

//////////////////////////
// Add All Color
let Add_All_color = document.querySelector('.Setting-box .container input[type=color]');
// Add_All_color.addEventListener('click', () => {
// })
function All_color()  {
    document.querySelectorAll('.Setting-box .container .option-box .The-Option>li').forEach(e=> {
        e.classList.remove('active-color')
    })
    Root.style.cssText = `--main-color : ${Add_All_color.value}`
    // Local Storage
    localStorage.setItem("Chose-Color", Add_All_color.value);
}
//////////////////////////
// Creat Add Application
let AllBtnApp = document.querySelectorAll('.Job a');
AllBtnApp.forEach(btn=> {
    btn.onclick = function () {
        let DAD = this.parentElement
        // let Dad_Title = document.querySelector('.Job .feat-01 .title-1')
        let addApplecation = ``;
        addApplecation = `
        <div class="Add-Applecation">
        <span class="before">X</span>
          <h3>طلب تقديم</h3>
          <p>لوظيفة (${DAD.firstElementChild.firstElementChild.innerHTML})</p>
          <form method="dialog" class="container">
            <input type="text" placeholder="الإسم ثلاثي" maxlength="30" minlength="11">
            <input type="number" placeholder="رقم الهاتف" onblur="Setting_All_Value()">
            <input type="text" placeholder="الإيميل لو أمكن" onblur="Input_checked()">
            <div class="upload">
              <label for="upload" class="fas fa-upload" > رفع السيفي</label>
              <input type='file' id="upload" oninput="Addsrc()">
            </div>
            <div class="the-src" dir="rtl">
            </div>
            <label for="checkbox" id="checkbox" class="checked" oninput="Set_Button_agree()">
              <input type="checkbox" name="" id="checkbox"  >
              <div>أقر أن لدي هذه المؤهلات</div>
            </label>
            <input type="submit" value="تم" class="submit-checked">
          </form>
        </div>
           `
        document.querySelector('.Job  .content').innerHTML = addApplecation
        document.querySelector('.Add-Applecation  span.before').onclick = function () {
            document.querySelector('.Add-Applecation').remove()
        }
        //
        // All Inputs True Or Not In Creat Applecation
        let Inputchecked  =  document.querySelector('.Add-Applecation input[type=submit]');
        let Input_checked_1  =  document.querySelector('.Add-Applecation form input:first-child');
        let Input_checked_2  =  document.querySelector('.Add-Applecation form input:nth-child(2)');
        let Input_checked_3  =  document.querySelector('.Add-Applecation form input:nth-child(3)');
        let Re_1 = /(\w+@\w+.\w)/ig;
        let checked = true;
        Inputchecked.onclick = function () {
            if ( Input_checked_1.value === '' || Input_checked_1.value.length < 11  || Input_checked_2.value === '' && Input_checked_3.value.match(Re_1) === null || The_chicked_N === false  ) {
                    let creatpop = document.createElement("div")
                    creatpop.className = "popup"
                    let creatpopTextNode = document.createTextNode("أدخل إسمك ثلاثي و رقمك و بيناتك صحيحة");
                    let creatpopButton = document.createElement("button");
                    // creatpopButton clicked
                    creatpopButton.onclick = function () {
                        creatpop.remove()
                    }
                    let creatpopButtonText = document.createTextNode("تم")
                    creatpopButton.appendChild(creatpopButtonText)
                    creatpop.appendChild(creatpopButton)
                    creatpop.appendChild(creatpopTextNode)
                    document.querySelector('.Add-Applecation').appendChild(creatpop)
                    // if (document.querySelector('.Add-Applecation form input:nth-child(3)').value === '') {

                        // document.querySelector('.Creat-Applecation-ok > .div:last-of-type').classList.add('none')
                    // }
            }else{
                let Applecation_ok = '';
                Applecation_ok = `
                    <div class="Creat-Applecation-ok">
                      <i class="fas fa-check-circle"></i>
                      <p> تم إستلام طلب التقديم ل(${Input_checked_1.value}) </p>
                      <div class="div">
                        <p>سنتصل بك من هذا الرقم</p>
                        <input type="text" readonly value="01282029677">
                      </div>
                      <div class="div">
                        <p>ستصلك رسالة من هذا الإيميل</p>
                        <input type="text" readonly value="alserajalmoneer@yahoo.com">
                      </div>
                      <button>تم</button>
                    </div>
                `
                document.querySelector('.Job .content').innerHTML = Applecation_ok
                document.querySelector('.Job .content .Creat-Applecation-ok > button').onclick = function () {
                document.querySelector('.Job .content .Creat-Applecation-ok').remove()
                // Show_input_Email();
                // if (chicked_E === true) {
                //   document.body.contains(document.querySelector('.Creat-Applecation-ok > .div:last-of-type'))) {

                // }
                // if (Input_checked_3.value.match(Re_1) === null) {
                    // document.querySelector('.Creat-Applecation-ok > .div:last-of-type').classList.add('none')
                // }else {
                    // document.querySelector('.Creat-Applecation-ok > .div:last-of-type').classList.remove('none')
//
                // }

                }

            }

        }

            }
        })
// Set The Button I agree
function Set_Button_agree() {
    document.getElementById('checkbox').classList.toggle('checked')
    if (document.getElementById('checkbox').classList[0] === 'checked') {
        document.querySelector('.Add-Applecation input[type=submit]').classList.add('submit-checked')
    }else {
        document.querySelector('.Add-Applecation input[type=submit]').classList.remove('submit-checked')
    }

}

//  show Or Not The input Email
function Show_input_Email() {

    if (The_chicked_E === true) {
        if (document.body.contains(document.querySelector('.Creat-Applecation-ok > .div:last-of-type'))) {
            document.querySelector('.Creat-Applecation-ok > .div:last-of-type').classList.add('none')
        }
    }else {
        if (document.body.contains(document.querySelector('.Creat-Applecation-ok > .div:last-of-type'))) {

            document.querySelector('.Creat-Applecation-ok > .div:last-of-type').classList.add('none')
        }
    }
}
// Input_checked_3
let The_chicked_E = false
function Input_checked() {
    let Re_1 = /(\w+@\w+.\w)/ig;
    let  Input_checked_3 = document.querySelector('.Add-Applecation form input:nth-child(3)');
    if ( Input_checked_3.value.match(Re_1) === null && Input_checked_3.value != ''   ) {
        Input_checked_3.classList.add('problem')
        Input_checked_3.placeholder = 'أدخل إيميل صحيح'
        // Input_checked_3.value = ''
    }else {
        Input_checked_3.classList.remove('problem')
        Input_checked_3.Placeholder = ''
        The_chicked_E = true;
        if (document.body.contains(document.querySelector('.Creat-Applecation-ok > .div:last-of-type'))) {
            document.querySelector('.Creat-Applecation-ok > .div:last-of-type').classList.add('none')
        }
    }
}
// Add The SRC
function Addsrc() {
    if (document.querySelector(".upload input").value !='') {
        document.querySelector('.Add-Applecation .the-src').innerHTML = `
        <span>المسار : </span>
        <p>"${document.querySelector(".upload input").value}"</p>

        `
    }
}

/// Setting All Value
let The_chicked_N = false
function Setting_All_Value() {
    let input_2 = document.querySelector(".Add-Applecation form input:nth-child(2)")
    // let input_3 = document.querySelector(".Add-Applecation form input:nth-child(3)")
    let input_2_length = document.querySelector(".Add-Applecation form input:nth-child(2)").value.length
    if (
        document.querySelector(".Add-Applecation form input:nth-child(2)").value.length != 11
        || document.querySelector(".Add-Applecation form input:nth-child(2)").value[0] != '0'
        || document.querySelector(".Add-Applecation form input:nth-child(2)").value[1] != '1'
        && input_2.value != ''
        ) {
            input_2.classList.add('problem')
            input_2.placeholder = 'أدخل رقم صحيح'
            // input_2.value = ''
        }else {
            input_2.placeholder = ''
            input_2.classList.remove('problem')
            input_2.value = input_2.value
            The_chicked_N = true

        }
    // if (document.querySelector(".Add-Applecation form input:nth-child(2)").value.length != 11) {
    // }else {
    // }
    // if (
        //  document.querySelector(".Add-Applecation form input:nth-child(2)").value[0] != '0'
        // || document.querySelector(".Add-Applecation form input:nth-child(2)").value[1] != '1'
        // && input_2.value != ''
    // ) {
        // input_3.classList.add('problem')
    // }else {
        // input_3.classList.remove('problem')
    // }

}


///////////////////////
// Make Active Bullets
let All_Bullets = document.querySelectorAll('.Bullets .Bullet');

let Home_Class = document.querySelector('#Home');
let Home_Class_1 = document.querySelector('.Bullets .Bullet[data-section="#Home"]');
let why_Class = document.querySelector('#why');
let why_Class_1 = document.querySelector('.Bullets .Bullet[data-section="#why"]');
let News_Class = document.querySelector('#News');
let News_Class_1 = document.querySelector('.Bullets .Bullet[data-section="#News"]');
let Date_Class = document.querySelector('#Date');
let Date_Class_1 = document.querySelector('.Bullets .Bullet[data-section="#Date"]');
let Massege_Class = document.querySelector('#Massege');
let Massege_Class_1 = document.querySelector('.Bullets .Bullet[data-section="#Massege"]');
let Number_Class = document.querySelector('#Number');
let Number_Class_1 = document.querySelector('.Bullets .Bullet[data-section="#Number"]');
let Our_skills_Class = document.querySelector('#Our-skills');
let Our_skills_Class_1 = document.querySelector('.Bullets .Bullet[data-section="#Our-skills"]');
let Gallary_View_Class = document.querySelector('#Gallary-View');
let Gallary_View_Class_1 = document.querySelector('.Bullets .Bullet[data-section="#Gallary-View"]');
let Job_Class = document.querySelector('#Job');
let Job_Class_1 = document.querySelector('.Bullets .Bullet[data-section="#Job"]');
let Qu_Class = document.querySelector('#Qu');
let Qu_Class_1 = document.querySelector('.Bullets .Bullet[data-section="#Qu"]');
let Contact_Us_Class = document.querySelector('#Contact-Us');
let Contact_Us_Class_1 = document.querySelector('.Bullets .Bullet[data-section="#Contact-Us"]');
// function Make_Active_Bullets() {
    // window.onscroll = function () {
        // if (window.scrollY >= document.querySelector('#why').offsetTop ) {
        // }
    // }
// }
// Make_Active_Bullets()
window.addEventListener('scroll', function () {
if (window.scrollY >= Home_Class.offsetTop ) {
    All_Bullets.forEach(Bullet => {
    Bullet.classList.remove('active')
})
    Home_Class_1.classList.add('active')
}
if (window.scrollY >= why_Class.offsetTop -100) {
    All_Bullets.forEach(Bullet => {
    Bullet.classList.remove('active')
})
    why_Class_1.classList.add('active')
}
if (window.scrollY >= News_Class.offsetTop +300 ) {
    All_Bullets.forEach(Bullet => {
    Bullet.classList.remove('active')
})
    News_Class_1.classList.add('active')
}
if (window.scrollY >= Date_Class.offsetTop - 100 ) {
    All_Bullets.forEach(Bullet => {
        Bullet.classList.remove('active')
    })
    Date_Class_1.classList.add('active')
}
if (window.scrollY >= Massege_Class.offsetTop - 100 ) {
    All_Bullets.forEach(Bullet => {
    Bullet.classList.remove('active')
    })
    Massege_Class_1.classList.add('active')
}
if (window.scrollY >= Number_Class.offsetTop -200) {
    All_Bullets.forEach(Bullet => {
        Bullet.classList.remove('active')
    })
    Number_Class_1.classList.add('active')
}
if (window.scrollY >= Our_skills_Class.offsetTop -100  ) {
    All_Bullets.forEach(Bullet => {
        Bullet.classList.remove('active')
    })
    Our_skills_Class_1.classList.add('active')
}
if (window.scrollY >= Gallary_View_Class.offsetTop -100 ) {
    All_Bullets.forEach(Bullet => {
        Bullet.classList.remove('active')
    })
    Gallary_View_Class_1.classList.add('active')
}
if (window.scrollY >= Job_Class.offsetTop -100 ) {
    All_Bullets.forEach(Bullet => {
        Bullet.classList.remove('active')
    })
    Job_Class_1.classList.add('active')
}
if (window.scrollY >= Qu_Class.offsetTop - 100 ) {
    All_Bullets.forEach(Bullet => {
        Bullet.classList.remove('active')
    })
    Qu_Class_1.classList.add('active')
}
if (window.scrollY >= Contact_Us_Class.offsetTop - 200 ) {
    All_Bullets.forEach(Bullet => {
        Bullet.classList.remove('active')
    })
    Contact_Us_Class_1.classList.add('active')

}
})
function getRondom(min , max ) {
    min = Math.ceil(10);
    max = Math.floor(15);
    return Math.floor(Math.random() * (max - min ) + max)
}



///////////////////////////
// Function Font Size Range
// function Range( value ) {
// document.getElementById( "font_value" ).innerHTML=`${value}px`;
// document.querySelector('*').style.cssText = `font-size: ${ value}px !important ;`
// localStorage.setItem("font_value", `${document.getElementById('Input_Range').value}`)
// }

///////////////////////////
// Function Font Size Button
let BUtton_Plus = document.getElementById('font_value-+');
let Font_Value = document.getElementById('font_value');
let BUtton_min = document.getElementById('font_value--');
BUtton_Plus.addEventListener('click', function () {
    Font_Value.innerHTML =  +Font_Value.innerHTML + 1;
    document.querySelector('*').style.cssText = `font-size: ${ Font_Value.innerHTML}px !important ;`;
    localStorage.setItem("font_value", `${Font_Value.innerHTML}`)
})
BUtton_min.addEventListener('click', function () {
    Font_Value.innerHTML =  +Font_Value.innerHTML - 1
    document.querySelector('*').style.cssText = `font-size: ${ Font_Value.innerHTML}px !important ;`
    localStorage.setItem("font_value", `${Font_Value.innerHTML}`)
})
if (localStorage.getItem('font_value')) {
    document.getElementById('font_value').innerHTML=`${localStorage.getItem('font_value')}`;
    document.querySelector('*').style.cssText = `font-size: ${localStorage.getItem('font_value')}px !important ;`
}
function Font_Value_function() {
if (Font_Value.innerHTML === '21' ) {
    BUtton_Plus.classList.add('default')
}else {
    BUtton_Plus.classList.remove('default')
}

if (Font_Value.innerHTML === '15') {
    BUtton_min.classList.add('default')

}else {
    BUtton_min.classList.remove('default')
}
}

/////////////////////////////////////////////////
// scrool & set-Height
let Our_skills = document.querySelector('.Our-skills')
let AllProgress = document.querySelectorAll('.Our-skills .container-1 .box .line .line-1')
window.addEventListener('scroll', function () {
    if (window.scrollY >= Our_skills.offsetTop - 200) {
        AllProgress.forEach((e) => {
            e.classList.add('animat-4')
            e.style.height = `${e.dataset.height}`
        })
    }else {
        AllProgress.forEach((e) => {
            e.classList.remove('animat-4')
        })
    }
})
// count The Gust
localStorage.setItem("count_The_Gust", +localStorage.getItem("count_The_Gust")+1)
document.querySelector(".counter_span").innerHTML = localStorage.getItem("count_The_Gust");

document.getElementById('copy').onclick = function () {
    // KeyframeEffect.toString(createImageBitmap())
}

//////  copy The Number

let Copy_The_Number = document.querySelector('.Contact-Us .boxes .box .span#copy')
    Copy_The_Number.onclick = function () {
         document.querySelector('.box:nth-child(2) .The-Information').style.cssText = ` color : #000;`
         let NewMassege = `
         <div class="Massege_Of_copy">تم نسخ الرقم</div>
         `;
         document.querySelector(".New_Massege_Of_Copy").innerHTML = NewMassege;
         this.classList.add('copeid')
    }
/////// Finish

// let MyRe = new XMLHttpRequest();
// console.log(MyRe)
// MyRe.open("GET", "test.json");
// MyRe.send() ;
// console.log(MyRe)
// MyRe.onreadystatechange = function () {
    // console.log(MyRe.readyState)
    // console.log(MyRe.status)
    // console.log(MyRe.responseText)
// }


//
// المعرض //
// الشريط الجانبي //
// الإعدادات //
// نسخ الرقم //
