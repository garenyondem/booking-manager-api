import Router from "koa-router";
import restaurantRoutes from "./restaurant.routes";
import tableRoutes from "./table.routes";
import reservationRoutes from "./reservation.routes";

const routerOpts: Router.IRouterOptions = {
    prefix: "/api",
};

const router: Router = new Router(routerOpts);

router.use("/restaurants/:restId", restaurantRoutes);
router.use("/restaurants/:restId/tables", tableRoutes);
router.use(
    "/restaurants/:restId/tables/:tableId/reservations",
    reservationRoutes
);

export default () => router.routes();
