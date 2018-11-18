// var button = document.getElementsByClassName('tablink');
// button[0].addEventListener('click',generateGrid());

var maleJson = {"oct": {
        "img": [{
            "url": "https://mivintagelabel.com/wp-content/uploads/2017/10/78A3226_1.jpg",
            "traits": ["dim_grey", "gainsboro", "Denim", "Eclectic", "Casual", "Jeans"]
        },
            {
                "url": "https://cdn.lookastic.com/looks/blazer-long-sleeve-shirt-chinos-large-20918.jpg",
                "traits": ["beige", "Romantic", "Jacket", "Casual"]
            },
            {
                "url": "https://smhttp-ssl-33667.nexcesscdn.net/manual/wp-content/uploads/2018/02/man-wearing-white-t-shirt-mens.jpg",
                "traits": ["Sweatpants", "Tee", "Hoodie", "Black", "Grey", "Casual"]
            }
        ],
        "traits": {
            "color": ["ivory_black", "dim_grey", "lamp_black", "grey", "beige"],
            "style": ["Casual", "Romantic", "90s"],
            "garment": ["Tee", "Jeans", "Sweatpants", "Hoodie", "Jacket"]
        }
    },
    "nov": {
        "img": [{
            "url": "https://mivintagelabel.com/wp-content/uploads/2017/10/78A3226_1.jpg",
            "traits": ["dim_grey", "gainsboro", "Denim", "Eclectic", "Casual", "Jeans"]
        },
            {
                "url": "https://www.e-outdoor.co.uk/images/barbour-mens-swainby-jacket-p3295-20308_image.jpg",
                "traits": ["olive", "ivory_black", "olive_green_dark", "Casual", "Outdoor", "Jacket"]
            },
            {
                "url": "https://cdn.shopify.com/s/files/1/0978/2406/products/m-s-full-zipper-hoodie-for-men-rosy-brown-be6177.jpg?v=1539589131",
                "traits": ["beige", "rosy_brown", "Hoodie", "Casual", "Elegant"]
            }
        ],
        "traits": {
            "color": ["ivory_black", "dim_grey", "rosy_brown", "denim", "deep_ochre"],
            "style": ["Casual", "Business", "Outdoor"],
            "garment": ["Jacket", "Tee", "Jeans", "Sweatpants", "Coat"]
        }
    }};

var femaleJson = {"oct": {
        "img": [{
            "url": "https://cdn.shopify.com/s/files/1/0540/8445/products/boka_top_hot22454_wd_13.jpg?v=1534828624",
            "traits": ["lamp_black", "dim_grey", "Business", "Blazer", "Jacket"]
        },
            {
                "url": "https://static-v3.fashionvalet.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/7/07_c_3.jpg",
                "traits": ["beige", "antique_white", "Elegant", "Bohemian", "Robe"]
            },
            {
                "url": "https://images.bubbleroom.eu/data/product/raw/vero-moda-lizz-bralette-sepia-rose_1.jpg",
                "traits": ["peru", "rosy_brown", "slate_grey_light", "Sexy", "Romantic", "Shorts"]
            }
        ],
        "traits": {
            "color": ["ivory_black", "dim_grey", "black", "grey", "beige", "sepia"],
            "style": ["Casual", "Business", "Sexy"],
            "garment": ["Blouse", "Tee", "Skirt", "Shorts", "Jeans"]
        }
    },
    "nov": {
        "img": [{
            "url": "https://qph.fs.quoracdn.net/main-qimg-bbfaf57ca261411acca22107b2a90905-c",
            "traits": ["ivory_black", "Elegant", "Business", "Dress"]
        },
            {
                "url": "https://bec2df9eb90bb6604cfc-660d71a7a33bc04488a7427f5fddcedf.ssl.cf3.rackcdn.com/uploads/product_image/photo/5744074cec604670a6000105/large_a58ed1f0-b9ce-4c04-a272-84b9293c069c_huge.jpg",
                "traits": ["beige", "wheat", "Outdoor", "Business", "Coat", "Jacket"]
            },
            {
                "url": "https://www.lulus.com/images/product/w_560/2373412_472502.jpg",
                "traits": ["gainsboro", "ivory_black", "Elegant", "Sexy", "Dress"]
            }
        ],
        "traits": {
            "color": ["ivory_black", "dim_grey", "lamp_black", "grey", "beige"],
            "style": ["90s", "Business", "Elegant"],
            "garment": ["Jacket", "Skirt", "Jeans", "Dress", "Blouse"]
        }
    }
};


let path = window.location.pathname;
let page = path.split("/").pop();

var maleNov;
var maleOct;
var femaleNov;
var femaleOct;

maleOct = maleJson.oct;
maleNov = maleJson.nov;
femaleOct = femaleJson.oct;
femaleNov = femaleJson.nov;

maleOctImages = maleOct.img;
maleNovImages = maleNov.img;
maleNovTraits = maleNov.traits;
maleOctTraits = maleOct.traits;

femaleNovImages = femaleNov.img;
femaleOctImages = femaleOct.img;
femaleNovTraits = femaleNov.traits;
femaleOctTraits = femaleOct.traits;


console.log(maleNov.traits);

// console.log(imagelink[0]["url"]);

console.log(maleJson);
console.log(femaleJson);

function generateFeature(gender){
    var el = document.querySelector('#feature-2');
    if(gender === "male"){
        featureList = maleNovTraits["color"];
        console.log(featureList);
    }else{
        featureList = femaleNovTraits["color"];
    }
    var headline = document.createElement("h2");
    headline.appendChild(document.createTextNode("Color"));
    headline.className = "headline";
    var ul = document.createElement("ul");
    el.appendChild(headline);
    el.appendChild(ul);
    featureList.forEach(renderFeatureList);



    var el = document.querySelector('#feature-1');
    if(gender === "male"){
        featureList = maleNovTraits["style"];
        console.log(featureList);
    }else{
        featureList = femaleNovTraits["style"];
    }

    var headline = document.createElement("h2");
    headline.appendChild(document.createTextNode("Style"));
    var ul = document.createElement("ul");
    headline.className = "headline";
    el.appendChild(headline);
    el.appendChild(ul);
    featureList.forEach(renderFeatureList);




    var el = document.querySelector('#feature-3');
    if(gender === "male"){
        featureList = maleNovTraits["garment"];
        console.log(featureList);
    }else{
        featureList = femaleNovTraits["garment"];
    }


    var headline = document.createElement("h2");
    headline.appendChild(document.createTextNode("Garment"));

    var ul = document.createElement("ul");
    headline.className = "headline";
    el.appendChild(headline);
    el.appendChild(ul);
    featureList.forEach(renderFeatureList);
    
    function renderFeatureList(element) {
        var li = document.createElement('li');
        // li.setAttribute('class','item');

        ul.appendChild(li);

        li.innerHTML=li.innerHTML + element;
        console.log(li);
    }
}


function generateGrid(gender){
    if(gender === "male"){
        for(let i=0;i< maleNovImages.length;i++) {
            let el = document.querySelector('#content-2');
            let column = document.createElement("div");
            column.className = "col-md-4";
            let column2 = document.createElement("div");
            column2.className = "article animate-box";
            let img = document.createElement("img");
            img.className = "img-responsive";
            img.src = maleNovImages[i]["url"];

            let overlay = document.createElement("div");
            overlay.className = "overlay";

            let desc = document.createElement("div");
            desc.className = "desc";
            let span = document.createElement("span");
            span.className = "meta";

            let textnode = document.createTextNode("");
            span.appendChild(textnode);

            let title = document.createElement("h2");
            title.appendChild(document.createTextNode(""));
            let detail = document.createElement("p");


            var featureList = maleNovImages[i]["traits"];
            let ul = document.createElement("ul");
            // el.appendChild(headline);
            el.appendChild(ul);
            let detailText ="";
            featureList.forEach(renderFeatureList);

            function renderFeatureList(element) {
                // var li = document.createElement('li');
                // // li.setAttribute('class','item');
                //
                // ul.appendChild(li);
                //
                // li.innerHTML=li.innerHTML + element;
                // console.log(li);
                detailText = detailText + element + " | ";
            }

            detail.appendChild(document.createTextNode(detailText));
            // detail.appendChild(ul);
            desc.appendChild(span);
            desc.appendChild(title);
            desc.appendChild(detail);
            column2.appendChild(img);
            column2.appendChild(overlay);
            column2.appendChild(desc);
            column.appendChild(column2);

            el.appendChild(column);
        }
    }else{
        if(gender === "male"){
            for(let i=0;i< maleNovImages.length;i++) {
                let el = document.querySelector('#content-2');
                let column = document.createElement("div");
                column.className = "col-md-4";
                let column2 = document.createElement("div");
                column2.className = "article animate-box";
                let img = document.createElement("img");
                img.className = "img-responsive";
                img.src = maleNovImages[i]["url"];

                let overlay = document.createElement("div");
                overlay.className = "overlay";

                let desc = document.createElement("div");
                desc.className = "desc";
                let span = document.createElement("span");
                span.className = "meta";

                let textnode = document.createTextNode("");
                span.appendChild(textnode);

                let title = document.createElement("h2");
                title.appendChild(document.createTextNode(""));
                let detail = document.createElement("p");
                // let detailText = "";
                // for(let j =0 ; j<maleNovImages[i]["traits"].length;j++){
                //     // detailText =  detailText.toUpperCase() + maleNovImages[i]["traits"][j] + " ";
                // }

                var featureList = maleNovImages[i]["traits"];
                let ul = document.createElement("ul");
                // el.appendChild(headline);
                el.appendChild(ul);
                featureList.forEach(renderFeatureList);

                function renderFeatureList(element) {
                    var li = document.createElement('li');
                    // li.setAttribute('class','item');

                    ul.appendChild(li);

                    li.innerHTML=li.innerHTML + element;
                    console.log(li);
                }

                // detail.appendChild(document.createTextNode(detailText));
                detail.appendChild(ul);
                desc.appendChild(span);
                desc.appendChild(title);
                desc.appendChild(detail);
                column2.appendChild(img);
                column2.appendChild(overlay);
                column2.appendChild(desc);
                column.appendChild(column2);

                el.appendChild(column);
            }
        }else{
            for(let i=0;i< femaleNovImages.length;i++) {
                let el = document.querySelector('#content-2');
                let column = document.createElement("div");
                column.className = "col-md-4";
                let column2 = document.createElement("div");
                column2.className = "article animate-box";
                let img = document.createElement("img");
                img.className = "img-responsive";
                img.src = femaleNovImages[i]["url"];

                let overlay = document.createElement("div");
                overlay.className = "overlay";

                let desc = document.createElement("div");
                desc.className = "desc";
                let span = document.createElement("span");
                span.className = "meta";

                let textnode = document.createTextNode("");
                span.appendChild(textnode);

                let title = document.createElement("h2");
                title.appendChild(document.createTextNode(""));
                let detail = document.createElement("p");
                // let detailText = "";
                // for(let j =0 ; j<maleNovImages[i]["traits"].length;j++){
                //     // detailText =  detailText.toUpperCase() + maleNovImages[i]["traits"][j] + " ";
                // }

                var featureList = femaleNovImages[i]["traits"];
                let ul = document.createElement("ul");
                // el.appendChild(headline);
                el.appendChild(ul);
                featureList.forEach(renderFeatureList);

                function renderFeatureList(element) {
                    var li = document.createElement('li');
                    // li.setAttribute('class','item');

                    ul.appendChild(li);

                    li.innerHTML=li.innerHTML + element;
                    console.log(li);
                }

                // detail.appendChild(document.createTextNode(detailText));
                detail.appendChild(ul);
                desc.appendChild(span);
                desc.appendChild(title);
                desc.appendChild(detail);
                column2.appendChild(img);
                column2.appendChild(overlay);
                column2.appendChild(desc);
                column.appendChild(column2);

                el.appendChild(column);
            }
        }
    }





}


if (page === "men.html"){
    generateGrid("male");
    generateFeature("male");
}else{
    generateGrid("female");
    generateFeature("female");
}




