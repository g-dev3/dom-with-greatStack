        // let msg = document.getElementById("message");
        // console.log(msg);

        // let btn = document.getElementsByName("language");
        // console.log(btn)

        // let heading = document.getElementsByTagName("h1");
        // console.log(heading)

        // let cont = document.getElementById("container");
        // let msg = cont.getElementsByClassName("message");
        // console.log(msg);
        // let cont = document.getElementById("container")
        // let msg = cont.querySelectorAll('.message');
        // console.log(msg);

        // let txt = document.querySelector(".text");
        // console.log(txt.parentNode);

        // let parent = document.querySelector(".title");
        // console.log(parent.firstElementChild);
        // console.log(parent.lastElementChild);
        // console.log(parent.childNodes);

        // let second = document.querySelector(".second");
        // console.log(second.previousElementSibling);
        // console.log(second.nextElementSibling);

        // let div = document.createElement("div");
        // div.innerHTML = "<p>Hello World </p>";
        // // document.body.appendChild(div);
        // div.id = "title"
        // div.className = "title2"

        // console.log(div);

        // let menu = document.getElementById("menu");
        // let list = document.createElement("li")
        // list.innerHTML = "Contact";

        // menu.appendChild(list);

        // console.log(menu.textContent)
        // console.log(menu.innerText)
        // menu.textContent = "Goal"
        // menu.innerHTML = "<p>Helo!</p>"
        // let list = document.createElement("li")
        // list.innerHTML = "geeks"
        // menu.appendChild(list)
        // menu.after(list)

        // menu.prepend(list)

        // menu.insertAdjacentHTML("beforebegin", "<li>01</li>")
        // menu.insertAdjacentHTML("beforeend", "<li>2</li>")
        // menu.insertAdjacentHTML("afterend", "<li>02</li>")
        // menu.insertAdjacentHTML("afterbegin", "<li>1</li>")

        // let rough = document.createElement("li")
        // rough.innerText = "New Home"
        // first = menu.firstElementChild
        // menu.replaceChild(rough, first)

        // let newNode = menu.cloneNode(true)
        // console.log(newNode);

        // menu.removeChild(menu.lastChild)

        // menu.insertBefore(newNode, menu.firstChild)

        // let inputbox = document.getElementById("username");

        // console.log(inputbox.attributes)

        // console.log(inputbox.getAttribute("type"))
        // console.log(inputbox.getAttribute("placeholder"))

        // inputbox.setAttribute("class", "user")

        // let result = inputbox.hasAttribute("class")
        // console.log(result)

        // inputbox.removeAttribute("placeholder")
        // console.log(inputbox)

        // inputbox.style.backgroundColor;
        // inputbox.style.padding = "10px"
        // inputbox.style.cssText += "width: 200px; margin-left:12px"
        // console.log(inputbox.style)
        // let title = document.getElementById("title")
        // title.className += " new"

        // title.classList.add("new", "new2")

        // title.classList.remove("message");

        // title.classList.replace("message","main")

        // result = title.classList.contains("message")

        // title.classList.toggle("message")

        // console.log(title)

        // function onclick(){
        //     console.log('clicked.')
        // }

        let btn = document.getElementById('btn')

        // btn.onclick = function () {
        //     // console.log('button clicked')
        //     console.log(this.id)
        // }
        // btn.onclick = null

        btn.addEventListener('click', (event) =>
            console.log(event.type))

        btn.removeEventListener('click', (event) =>
            console.log(event.type))