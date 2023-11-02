function change() {
    var element = document.getElementsByTagName('header')[0]; // Get the first header element
  
    if (element.style.display === 'block') {
        element.style.display='none'; 
        element.style.transition="3s";
    } else {
        element.style.display='block';
        element.style.transition="3s";
    }
  }
function black(){
    var container = document.getElementById("container");
    container.style.backgroundColor="black";
    container.style.transition="3s";
    var texts = document.querySelectorAll(".text");
    texts.forEach(function(text) {
      text.style.color = "white";
      text.style.transition = "3s";
    });
    var link=documnet.querySelectorAll(".link");
      link.forEach(function(lin) {
      lin.style.backgroundColor="green";
      });
  }
function gray(){
    var container = document.getElementById("container");
    container.style.backgroundColor="gray";
    container.style.transition="3s";
    var texts = document.querySelectorAll(".text");
      texts.forEach(function(text) {
      text.style.color = "white";
      text.style.transition = "1s";
    });
}
function whitee() {
    var container = document.getElementById("container");
    container.style.backgroundColor = "white";
    container.style.color = "black";
    container.style.transition = "3s";
    var texts = document.querySelectorAll(".text");
    texts.forEach(function(text) {
      text.style.color = "black";
      text.style.transition = "3s";
    });
  }
/**        */  
const boxes = document.querySelectorAll(".animated");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

boxes.forEach(box => {
  observer.observe(box);
});
function work() {
    var i = 0;
    var inner = document.querySelector(".inner");
    var p = document.getElementById("p1");
    var v = setInterval(function() {
      if (i < 86) {
        p.innerHTML = i + "%";
        inner.style.width = i + "%";
        i = i + 1;
      } else {
        clearInterval(v);
      }
    }, 50);
}
document.addEventListener('DOMContentLoaded', function() {
  work();
});
function work1(){
    var i = 0;
    var inner = document.querySelector(".inner1");
    var p = document.getElementById("p2");
    var v = setInterval(function() {
      if (i <= 95) {
        p.innerHTML = i + "%";
        inner.style.width = i + "%";
        i = i + 1;
      } else {
        clearInterval(v);
      }
    }, 50);
}
document.addEventListener('DOMContentLoaded', function() {
  work1();
});
function work2(){
  var i = 0;
  var inner = document.querySelector(".inner2");
  var p = document.getElementById("p3");
  var v = setInterval(function() {
    if (i < 91) {
      p.innerHTML = i + "%";
      inner.style.width = i + "%";
      i = i + 1;
    } else {
      clearInterval(v);
    }
  }, 50);
}
document.addEventListener('DOMContentLoaded', function() {
  work2();
});
function work3(){
  var i = 0;
  var inner = document.querySelector(".inner3");
  var p = document.getElementById("p4");
  var v = setInterval(function() {
    if (i < 26) {
      p.innerHTML = i + "%";
      inner.style.width = i + "%";
      i = i + 1;
    } else {
      clearInterval(v);
    }
  }, 90);
}
document.addEventListener('DOMContentLoaded', function() {
  work3();
});
const queery=document.querySelector(".table");
const observerr = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      work();
      work1();
      work2();
      work3();
    } 
  });
});
observerr.observe(queery);







