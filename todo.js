var loader = document.getElementById("loader");
var td = document.getElementsByClassName("td");

Array.from(td).forEach( function(element, index) {
	setTimeout(()=>{
		element.style.top = '-15px';
		element.style.opacity = '1';
		setTimeout(()=>{
			element.style.transitionDuration = '0.4s';
			element.style.top = '0';
			setTimeout(()=>{
				element.style.transitionDuration = '0.7s';
				element.style.top = '-200px';
				element.style.opacity = '0';
				setTimeout(()=>{
					loader.style.opacity = '0';
					setTimeout(()=>{
						loader.style.display = 'none';
					},900);
				}, 1000);
			}, 900);
		},700);
	}, 500+(index*300));
});



var sun = document.getElementById("sun");
var moon = document.getElementById("moon");
var btn = document.getElementById("btn");
var imgdarck = document.getElementById("imgdarck");
var imglight = document.getElementById("imglight");
var clrcmp = document.getElementById("clrcmp");
var body = document.getElementsByTagName("body");
let root = document.documentElement;
var index = 0;

btn.addEventListener("click", function () {
	if (moon.style.opacity == '1') {
		sun.style.opacity = '1';
		moon.style.opacity = '0';
		imglight.style.opacity = '0';
		imgdarck.style.opacity = '1';
		body[0].style.backgroundColor = '#181824';
		root.style.setProperty('--col', '#b8bacb');
		root.style.setProperty('--cool', '#26273c');
		root.style.setProperty('--coool', '#30313f');
	}else {
		sun.style.opacity = '0';
		moon.style.opacity = '1';
		imglight.style.opacity = '1';
		imgdarck.style.opacity = '0';
		body[0].style.backgroundColor = '#fafafa';
		root.style.setProperty('--col', 'black');
		root.style.setProperty('--cool', 'white');
		root.style.setProperty('--coool', '#ebeaea');
	}
});

var tach = document.getElementById("tach");
var tachs = document.getElementById("tachs");
var itms = document.getElementById("itms");
var check1 = document.getElementById("chec1");
var crcl1 = document.getElementById("crcl1");
var bcrcl = document.getElementById("bcrcl");
var frm = document.getElementById("frm");
var clrcmp = document.getElementById("clrcmp");
var lft = 0;
var itmlft = document.getElementById("itmlft");

clrcmp.addEventListener("click",function () {
	var checkbx = document.getElementsByClassName("checkbx");
	var tdi = document.getElementsByClassName("contdi");
	for (var i = checkbx.length - 1; i >= 0; i--) {
		if (checkbx[i].checked) {
			tdi[i].remove();
		};
	}
});

itms.addEventListener('input', function () {
	if (itms.value == "") {
		check1.style.opacity = '0';
		crcl1.style.background = "none";
	} else {
		check1.style.opacity = '1';
	};
});
bcrcl.addEventListener("mouseover", function () {
	if (itms.value !== "") {
		crcl1.style.background = "linear-gradient(130deg ,#57ddff ,#c058f3)";
	};
});
bcrcl.addEventListener("mouseout", function () {
	if (itms.value !== "") {
		crcl1.style.background = "none";
	};
});


var clc = document.getElementsByClassName("clc");
var clcs = document.getElementsByClassName("clcs");
function allact () {
	var checkbx = document.getElementsByClassName("checkbx");
	var tdi = document.getElementsByClassName("contdi");
	for (var i = 0; i < tdi.length; i++) {
		tdi[i].style.display = "flex";
	}; 
};
function activeact () {
	var checkbx = document.getElementsByClassName("checkbx");
	var tdi = document.getElementsByClassName("contdi");
	for (var i = 0; i < checkbx.length; i++) {
		if (checkbx[i].checked) {
			tdi[i].style.display = "none";
		}else {
			tdi[i].style.display = "flex";
		};
	};	
};
function compliteact () {
	var checkbx = document.getElementsByClassName("checkbx");
	var tdi = document.getElementsByClassName("contdi");
	for (var i = 0; i < checkbx.length; i++) {
		if (checkbx[i].checked) {
			tdi[i].style.display = "flex";
		}else {
			tdi[i].style.display = "none";
		};
	};
}

clc[0].addEventListener("click",function () {
	var act = document.getElementsByClassName("active");
	act[0].className = act[0].className.replace(" active", "");
	clc[0].className = clc[0].className + " active";
	allact();
});
clc[1].addEventListener("click",function () {
	var act = document.getElementsByClassName("active");
	act[0].className = act[0].className.replace(" active", "");
	clc[1].className = clc[1].className + " active";
	activeact();
});	
clc[2].addEventListener("click",function () {
	var act = document.getElementsByClassName("active");
	act[0].className = act[0].className.replace(" active", "");
	clc[2].className = clc[2].className + " active";
	compliteact();
});

frm.addEventListener("click", function (e) {
	e.preventDefault();

	if (itms.value !== "") {
		var input = document.createElement("input");
		input.type="checkbox";
		input.className="checkbx";
		input.id="chec"+index;

		var nlbl = document.createElement("label");
		nlbl.className = "check";
		nlbl.setAttribute("for","chec"+index);

		var svg = document.createElement("div");
		svg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="1.5" d="M1 4.304L3.696 7l6-6" class="paths"/></svg>';
		svg.className = "svgs";
		nlbl.appendChild(svg);

		if (index == 0) {
			index = index+2;
		}else{
			index++; 
		}

		var div1 = document.createElement("div");
		div1.className = "fondcheck";
		div1.appendChild(nlbl);


		var nlbl2 = document.createElement("label");
		nlbl2.className = "ptd";
		nlbl2.textContent = itms.value;

		var svg2 = document.createElement("div");
		svg2.className="svgc";
		svg2.innerHTML ='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="svgc"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>';

		var div2 = document.createElement("div");
		div2.className = "tdi";
		div2.draggable = true;
		div2.appendChild(div1);
		div2.appendChild(input);
		div2.appendChild(nlbl2);
		div2.appendChild(svg2);
		div2.setAttribute("data-position", document.getElementsByClassName("tdi").length);

		var div3 = document.createElement("div");
		div3.className ="contdi";
		div3.appendChild(div2);

		tachs.appendChild(div3);

		itms.value = "";
		check1.style.opacity = '0';
		crcl1.style.background = "none";

		nlbl.addEventListener("mouseenter",function () {
			div1.style.background = "linear-gradient(130deg ,#57ddff ,#c058f3)";
		});
		nlbl.addEventListener("mouseleave",function () {
			if (!input.checked) {
				div1.style.background = "none";
			};
		});
		nlbl.addEventListener("click",function () {
			if (!input.checked) {
				nlbl.style.background = "none";
				nlbl.style.border = "none";
				nlbl2.style.color = '#5e607a';
				nlbl2.style.textDecoration = 'line-through';
				svg.style.opacity = '1';

				if (clcs[1].checked) {
					div3.style.display = 'none';
				}
				lft--;
				itmlft.textContent = lft +" items left";
			}else {
				nlbl.style.background = "var(--cool)";
				nlbl.style.border = "1px solid #5e607a";
				nlbl2.style.color = 'var(--col)';
				nlbl2.style.textDecoration = 'none';
				svg.style.opacity = '0';
				if (clcs[2].checked) {
					div3.style.display = 'none';
				};
				lft++;
				itmlft.textContent = lft +" items left";
			};
		});

		svg2.addEventListener("click",function () {
			div3.remove();
			lft--;
			itmlft.textContent = lft +" items left";
		});

		lft++;
		itmlft.textContent = lft +" items left";
		if (clcs[2].checked) {
			div3.style.display = 'none';
		};

		div2.addEventListener("dragstart",function () {
			div2.className += " hide";
			console.log('dragstart')
		})
		div2.addEventListener("dragend",function () {
			div2.classList.remove("hide");
			console.log("dragend")
		});
		div3.addEventListener("dragleave",function (event) {
			console.log("dragleve");
		});
		div3.addEventListener("dragenter",function (event) {
			console.log("dragenter");
		});
		div3.addEventListener("dragover",function (event) {
			console.log("dragover");
		});
	};
});