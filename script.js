const projectData = {
  registration: {
    title: "Registration Form",
    description: "This is the HTML code for your registration form. Open View Output to test the fields.",
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Registration Form</title>
</head>
<body>
    <h1>Registration Form</h1>
    <form>
        User id:
        <input type="text" name="userid">
        <br><br>

        Password:
        <input type="password" name="password">
        <br><br>

        Name:
        <input type="text" name="name">
        <br><br>

        Address:
        <input type="text" name="address">
        <br><br>

        Country:
        <select name="country">
            <option value="">(Please select a country)</option>
            <option value="Philippines">Philippines</option>
            <option value="USA">USA</option>
            <option value="Japan">Japan</option>
        </select>
        <br><br>

        ZIP CODE:
        <input type="text" name="zipcode">
        <br><br>

        Email:
        <input type="email" name="email">
        <br><br>

        Sex:
        <input type="radio" name="sex" value="male"> Male
        <input type="radio" name="sex" value="female"> Female
        <br><br>

        Language:
        <input type="checkbox" name="language" value="english"> English
        <input type="checkbox" name="language" value="nonenglish"> Non English
        <br><br>

        About:<br>
        <textarea name="about" rows="5" cols="35"></textarea>
        <br><br>

        <input type="submit" value="submit">
    </form>
</body>
</html>`
  },
  login: {
    title: "Dark Login Form",
    description: "This is your dark-themed login form with CSS styling, focus effects, and a hover effect on the button.",
    code: `<!DOCTYPE html>
<html>
<head>
    <title>Login Form</title>
    <style>
        body {
            font-family: Arial;
            background-color: #121212;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
        }

        .login-box {
            background-color: #1e1e1e;
            padding: 30px;
            width: 300px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0,0,0,0.5);
            border: 1px solid #333;
        }

        h1 {
            text-align: center;
            color: white;
            margin-bottom: 25px;
        }

        label {
            color: #cccccc;
            font-size: 14px;
        }

        input {
            width: 100%;
            padding: 10px;
            margin: 10px 0 15px;
            box-sizing: border-box;
            background-color: #2b2b2b;
            color: white;
            border: 1px solid #444;
            border-radius: 5px;
            outline: none;
        }

        input:focus {
            border-color: #6c63ff;
        }

        input::placeholder {
            color: #888;
        }

        button {
            width: 100%;
            padding: 10px;
            background-color: #6c63ff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 15px;
        }

        button:hover {
            background-color: #574fd6;
        }
    </style>
</head>
<body>
    <div class="login-box">
        <h1>Login</h1>
        <form>
            <label>Username</label>
            <input type="text" name="username" placeholder="Enter username">

            <label>Password</label>
            <input type="password" name="password" placeholder="Enter password">

            <button type="submit">Login</button>
        </form>
    </div>
</body>
</html>`
  },
  fruits: {
    title: "Favorite Fruits List",
    description: "This is your original list example. The output shows both numbered and bullet lists.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Document</title>
</head>
<body>
    <h2>My favorite fruits</h2>
    <ol>
        <li>apple</li>
        <li>mango</li>
        <li>banana</li>
        <li>grapes</li>
    </ol>

    <h2>My favorite fruits</h2>
    <ul>
        <li>apple</li>
        <li>mango</li>
        <li>banana</li>
        <li>grapes</li>
    </ul>
</body>
</html>`
  }
};

let currentProject = "";
function openProject(name) {
  const project = projectData[name];
  if (!project) return;
  currentProject = name;
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalDescription").textContent = project.description;
  document.getElementById("projectCode").value = project.code;
  document.getElementById("copyMessage").textContent = "";
  document.getElementById("projectOutput").srcdoc = project.code;
  document.getElementById("projectModal").classList.add("show");
  document.body.style.overflow = "hidden";
  showPanel("code");
}
function showPanel(which) {
  document.getElementById("codePanel").classList.toggle("active", which === "code");
  document.getElementById("outputPanel").classList.toggle("active", which === "output");
  document.getElementById("codeTab").classList.toggle("active", which === "code");
  document.getElementById("outputTab").classList.toggle("active", which === "output");
}
function closeProject() {
  document.getElementById("projectModal").classList.remove("show");
  document.body.style.overflow = "";
}
function closeIfBackdrop(event) {
  if (event.target.id === "projectModal") closeProject();
}
function copyProjectCode() {
  const field = document.getElementById("projectCode");
  field.select();
  field.setSelectionRange(0, field.value.length);
  try {
    const copied = document.execCommand("copy");
    document.getElementById("copyMessage").textContent = copied
      ? "Code copied!"
      : "Select the code and copy it manually.";
  } catch (error) {
    document.getElementById("copyMessage").textContent = "Select the code and copy it manually.";
  }
}
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") closeProject();
});
