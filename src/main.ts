import "./style.css";
import typescriptLogo from "./typescript.svg";
import jestLogo from "./Jest.png";
// import "./Arrays/index.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <a href="https://jestjs.io/" target="_blank"  ><img src = "${jestLogo}" class = "logo vanilla" alt = "Jest logo" /></a>
    <h1>Implementation of Js methods in Typescript</h1>
    <p>In order to practice and learn how Javascript methods works, I've decided to implement them in Typescript and to create tests to ensure that they work as expected.
    
    Also this project is intended as practice for typescript and Jest</p>
  </div>
`;
