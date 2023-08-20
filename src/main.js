import Home from "./page/home";
import Login from "./page/login";
import { render,router } from "./utilities";
import ShopPage from "./pages/shop";
const app = document.querySelector('#app');

router.on("/", () => {
    render(Home, app);
  });

router.on("/login", () => {
  render(Login, app);
});

router.on("/shop", () => {
  render(ShopPage, app);
});
router.resolve();
// setupCounter(document.querySelector('#counter'))

