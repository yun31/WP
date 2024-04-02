import TodoItem from "./item.js";

const todoList = {
    items: [],

    add(title, dueDate) {
        const item = new TodoItem(title, dueDate);
        this.items.push(item);
        this.save();
        return item;
    },

    remove(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            this.save();
        }
    },

    toggleComplete(item) {
        item.toggleComplete();
        this.save();
    },

    save() {
        localStorage.setItem("todoList", JSON.stringify(this.items));
    },

    load() {
        const items = localStorage.getItem("todoList");
        if (items) {
            this.items = JSON.parse(items);
        }
    },
};

export { todoList };

// UI 모듈 정의하기
const app = {
    todoList: document.getElementById("todoList"), // To-Do 항목 리스트 엘리먼트
    form: document.querySelector("form"), // To-Do 항목 입력 폼 엘리먼트
    titleInput: document.getElementById("title"), // 할 일 제목 입력 필드 엘리먼트
    dueDateInput: document.getElementById("dueDate"), // 마감 기한 입력 필드 엘리먼트

    // To-Do 항목을 렌더링하는 메소드
    renderItem(item) {
        const li = document.createElement("li");
        li.classList.add("todo-item");
        if (item.completed) {
            li.classList.add("completed");
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = item.completed;
        checkbox.addEventListener("change", () => {
            todoList.toggleComplete(item);
            this.renderList();
        });

        const titleText = document.createElement("div");
        titleText.textContent = item.title;
        titleText.classList.add("title");

        const dueDateText = document.createElement("div");
        dueDateText.textContent = item.dueDate;
        dueDateText.classList.add("due-date");

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "🗑️";
        removeBtn.addEventListener("click", () => {
            todoList.remove(item);
            this.renderList();
        });

        li.appendChild(checkbox);
        li.appendChild(titleText);
        li.appendChild(dueDateText);
        li.appendChild(removeBtn);
        this.todoList.appendChild(li);
    },

    renderList() {
        this.todoList.innerHTML = "";
        todoList.items.forEach((item) => {
            this.renderItem(item);
        });
    },

    init() {
        todoList.load();
        this.renderList();

        this.form.addEventListener("submit", (event) => {
            event.preventDefault();
            const title = this.titleInput.value;
            const dueDate = this.dueDateInput.value;

            if (title && dueDate) {
                const item = todoList.add(title, dueDate);
                this.renderItem(item);
                this.titleInput.value = "";
                this.dueDateInput.value = "";
            }
        });
    },
};

app.init(); // UI 모듈 초기화