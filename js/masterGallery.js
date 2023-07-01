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
    window.localStorage.clear()
    window.location.reload()
}
////////////////////////////////////////

////////////////////////////////////////

// Gallary aside div Add Class Active
let AllImges = document.querySelectorAll(".Gallary .img-box");
let ButtonShow = document.querySelector(".Gallary .Show-Button div");
let AddActiveClass = document.querySelectorAll(".Gallary aside div");
// Fuction Remove All Class active & Add On This
function RemoveClassactive() {
    AddActiveClass.forEach((div) => {
        div.classList.remove("active");
        this.classList.add("active");
    })
}
// Manage All Imges
function ManageImges() {
    AllImges.forEach((img) => {
        img.style.display = "none";
    })
    document.querySelectorAll(this.dataset.set).forEach((ele) => {
        ele.style.display = "block";
    });
    if (document.querySelectorAll(this.dataset.set).length > 6)
    {
        document.querySelectorAll(".Gallary .img-box.show").forEach((e) => {
            e.style.display = "none"
        })
    }
}
// Remove Button Show
function RemoveButtonShow() {
    if (document.querySelectorAll(this.dataset.set).length > 6)
    {
        ButtonShow.style.display = "block"
    } else
    {
        ButtonShow.style.display = "none"
    }
}
function ButtonFunction() {
    document.querySelectorAll(".show").forEach((ele) => {
        ele.classList.toggle("block")
        if (ele.classList.contains("block"))
        {
            ele.style.display = "block"
            ButtonShow.innerHTML = "صور أقل"
        } else
        {
            ele.style.display = "none"
            ButtonShow.innerHTML = "صور أكثر"
        }
    })
};
// if (document.querySelectorAll(this.dataset.set).length <= 6) {
//     ButtonShow.style.display = "none"
// }
ButtonShow.onclick = function() {
    ButtonFunction();
};
AddActiveClass.forEach((e) => {
    e.addEventListener( "click", function()
    {
        document.querySelectorAll( ".show" ).forEach( ( ele ) =>
        {
            ele.classList.remove( "block" )
            if( ele.classList.contains( "block" ) )
            {
                ele.style.display = "block"
                ButtonShow.innerHTML = "صور أقل"
            } else
            {
                ele.style.display = "none"
                ButtonShow.innerHTML = "صور أكثر"
            }
        } )
    } );
    e.addEventListener("click", RemoveClassactive)
    e.addEventListener("click", ManageImges)
    e.addEventListener("click", RemoveButtonShow);
});
////////////////////////////////////////
// Gallary container img-box
let ImgBox = document.querySelectorAll(".Gallary .img-box");
let ImgInBox = document.querySelectorAll(".Gallary  .img-box img");
let TheMainCaptionh3 = document.querySelectorAll(".Gallary .img-box .caption h3");
let TheMainCaptionp = document.querySelectorAll(".Gallary .img-box .caption p q");
let TheMainCaptionspan = document.querySelectorAll(".Gallary .img-box .caption p span");
ImgBox.forEach((ele, index) => {
    ele.onclick = function () {
        ImgInBox.forEach((e, indexing) => {
            if (index === indexing){
                TheMainCaptionp.forEach((q, indexq) => {
                    TheMainCaptionspan.forEach((qspan, indexqspan) => {
                        TheMainCaptionh3.forEach((h3forEach, indexh3) => {
                            if (indexing === indexh3 && index === indexh3)
                            {
                                if (indexing === indexqspan && index === indexqspan)
                                {
                                    if (indexing === indexq && index === indexq)
                                    {


                                        // Overlay
                                        let Overlay  = document.createElement("div");
                                        Overlay.className = "Overlay"
                                        document.body.append(Overlay)
                                        // creat popup img-Box
                                        let popupImgBox = document.createElement("div");
                                        popupImgBox.className = "popup-Img-Box";
                                        // Creat span X
                                        let SpanX = document.createElement("span");
                                        let span = document.createTextNode("X");
                                        // Append The X In The Span
                                        SpanX.appendChild(span);
                                        popupImgBox.appendChild(SpanX);
                                        SpanX.onclick = function () {
                                            Overlay.remove();
                                            popupImgBox.remove()
                                        }
                                        // Creat Img
                                        let popupImg = document.createElement("img");
                                        popupImg.src = e.src
                                        // Append The Img In The Box
                                        popupImgBox.appendChild(popupImg)
                                        // Creat Caption
                                        let Caption = document.createElement("div");
                                        Caption.className = "Caption";
                                        // Creat h3 & p In popup-Img-Box & span
                                        // h3
                                        let h3 = document.createElement("h3");
                                        let h3Text = document.createTextNode(h3forEach.innerHTML)
                                        h3.appendChild(h3Text)
                                        popupImgBox.appendChild(h3);
                                        // p
                                        let p = document.createElement("p");
                                        let pText = document.createTextNode(q.innerHTML)
                                        p.appendChild(pText)
                                        // Span
                                        let pspan = document.createElement("span");
                                        let pspanText = document.createTextNode(qspan.innerHTML);
                                        pspan.appendChild(pspanText);
                                        // next And prev
                                        let next = document.createElement('i');
                                        next.className = 'fas fa-angle-left'
                                        let prev = document.createElement('i');
                                        prev.className = 'fas fa-angle-right'
                                        p.appendChild(pspan)
                                        Caption.appendChild(h3)
                                        Caption.appendChild(p)
                                        ///////////////////// Creat + and - In Gallary
                                        // next.onclick = function () {
                                            // popupImg.src = e.src + 1
                                            // ImgBox.forEach((img , indeximg ) => {
                                                // if (indeximg = index +1) {
                                                    // console.log('k')
                                                    //  popupImg.src = img.src
                                                    // popupImgBox = img.nextElementSibling()
                                                // }
//
                                            // })
                                        // }
                                        prev.onclick = function () {
                                            popupImg.src = e.src
                                        }
                                        // Append The popup-Img-Box In Gallary
                                        popupImgBox.appendChild(prev)
                                        popupImgBox.appendChild(next)
                                        popupImgBox.appendChild(Caption)
                                        document.body.appendChild(popupImgBox)
                                    };
                                }
                            }
                        })
                    })
                })
            }
        }
        )
    }
})
////////////////////////////////////////
// Delete Butto Show whin click on All Data Set
document.querySelectorAll( ".Gallary aside div" ).forEach( ( e ) => {
    e.onclick = function () {
        if( e.classList.contains( "All" ) === false )
        {
            document.querySelectorAll(".Gallary .img-box").forEach((ele) => {
                if (ele.classList.contains(e.dataset.set) === true)
                {
                    ele.style.display = "block";
                } else
                {
                    ele.style.display = "none";
                }
                ButtonShow.style.display = "none";
            })
        }
    }
})
