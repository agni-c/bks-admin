import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preloader from "./components/preloader";

const DashboardOne = lazy(() => import("./pages/dashboard-one"));
const DashboardTwo = lazy(() => import("./pages/dashboard-two"));
const DashboardThree = lazy(() => import("./pages/dashboard-three"));
const DashboardFour = lazy(() => import("./pages/dashboard-four"));
const SignIn = lazy(() => import("./pages/signin"));
const SignUp = lazy(() => import("./pages/signup"));
const VerifyAccount = lazy(() => import("./pages/verify-account"));
const ForgotPassword = lazy(() => import("./pages/forgot-password"));
const ErrorNotFound = lazy(() => import("./pages/error-404"));
const Error500 = lazy(() => import("./pages/error-500"));
const Error503 = lazy(() => import("./pages/error-503"));
const Error505 = lazy(() => import("./pages/error-505"));
const ProfileView = lazy(() => import("./pages/profile-view"));
const Connections = lazy(() => import("./pages/connections"));
const Groups = lazy(() => import("./pages/groups"));
const Events = lazy(() => import("./pages/events"));
const Timeline = lazy(() => import("./pages/timeline"));
const Pricing = lazy(() => import("./pages/pricing"));
const HelpCenter = lazy(() => import("./pages/help-center"));
const Invoice = lazy(() => import("./pages/invoice"));
const Calendar = lazy(() => import("./pages/apps/calendar"));
const Chat = lazy(() => import("./pages/apps/chat"));
const Contacts = lazy(() => import("./pages/apps/contacts"));
const FileManager = lazy(() => import("./pages/apps/file-manager"));
const Mail = lazy(() => import("./pages/apps/mail"));
const CreateAndSend = lazy(
  () => import("./pages/Customer-Relations/Email/CreateAndSend")
);
const EmailReport = lazy(
  () => import("./pages/Customer-Relations/Email/EmailReport")
);
const EmailTemplate = lazy(
  () => import("./pages/Customer-Relations/Email/EmailTemplate")
);
const CreateAndSendPush = lazy(
  () => import("./pages/Customer-Relations/Push-Notifications/CreateAndSend")
);
const Report = lazy(
  () => import("./pages/Customer-Relations/Push-Notifications/Report")
);
const Template = lazy(
  () => import("./pages/Customer-Relations/Push-Notifications/Template")
);
const CreateAndSendSMS = lazy(
  () => import("./pages/Customer-Relations/SMS/CreateAndSendSMS")
);
const SMSReport = lazy(
  () => import("./pages/Customer-Relations/SMS/SMSReport")
);
const SMSTemplate = lazy(
  () => import("./pages/Customer-Relations/SMS/SMSTemplate")
);
const CreateAndSendWhatsapp = lazy(
  () => import("./pages/Customer-Relations/Whatsapp/CreateAndSend")
);
const WhatsAppReport = lazy(
  () => import("./pages/Customer-Relations/Whatsapp/WhatsAppReport")
);
const WhatsAppTemplate = lazy(
  () => import("./pages/Customer-Relations/Whatsapp/WhatsAppTemplate")
);
const FAQ = lazy(() => import("./pages/Master/Frontend-Settings/FAQ"));
const HowToVideos = lazy(
  () => import("./pages/Master/Frontend-Settings/HowToVideos")
);
const TestimonialVideos = lazy(
  () => import("./pages/Master/Frontend-Settings/TestimonialVideos")
);
const CurrentRate = lazy(
  () => import("./pages/Master/Other-Settings/CurrentRate")
);
const DefineReference = lazy(
  () => import("./pages/Master/Other-Settings/DefineReference")
);
const DefineTaxes = lazy(
  () => import("./pages/Master/Other-Settings/DefineTaxes")
);
const PercentageToken = lazy(
  () => import("./pages/Master/Other-Settings/PercentageToken")
);
const RateTimerSettings = lazy(
  () => import("./pages/Master/Other-Settings/RateTimerSettings")
);
const SalesReturnReasons = lazy(
  () => import("./pages/Master/Other-Settings/SalesReturnReasons")
);
const DefineCyclePeriod = lazy(
  () => import("./pages/Master/Plans/DefineCyclePeriod")
);
const DefineStandardPlans = lazy(
  () => import("./pages/Master/Plans/DefineStandardPlans")
);
const Categories = lazy(
  () => import("./pages/Master/Products-Data/Categories")
);
const ChargedOnProducts = lazy(
  () => import("./pages/Master/Products-Data/ChargedOnProducts")
);
const Collections = lazy(
  () => import("./pages/Master/Products-Data/Collections")
);
const DiamondsAndGemstones = lazy(
  () => import("./pages/Master/Products-Data/DiamondsAndGemstones")
);
const Items = lazy(() => import("./pages/Master/Products-Data/Items"));
const MetalGroups = lazy(
  () => import("./pages/Master/Products-Data/MetalGroups")
);
const Metals = lazy(() => import("./pages/Master/Products-Data/Metals"));
const Offers = lazy(() => import("./pages/Master/Products-Data/Offers"));
const Products = lazy(() => import("./pages/Master/Products-Data/Products"));
const Varieties = lazy(() => import("./pages/Master/Products-Data/Varieties"));
const MasterUserRights = lazy(
  () => import("./pages/Master/Security/MasterUserRights")
);
const UserAndPasswords = lazy(
  () => import("./pages/Master/Security/UserAndPasswords")
);
const AccountReports = lazy(() => import("./pages/Reports/AccountReports"));
const BookYourGoldReports = lazy(
  () => import("./pages/Reports/BookYourGoldReports")
);
const BuyAndSaveReports = lazy(
  () => import("./pages/Reports/BuyAndSaveReports")
);
const CollectionsReport = lazy(
  () => import("./pages/Reports/CollectionsReport")
);
const DailyReports = lazy(() => import("./pages/Reports/DailyReports"));
const DeliveryBoyReports = lazy(
  () => import("./pages/Reports/DeliveryBoyReports")
);
const EshopReports = lazy(() => import("./pages/Reports/EshopReports"));
const GBPReports = lazy(() => import("./pages/Reports/GBPReports"));
const SellOldGoldReports = lazy(
  () => import("./pages/Reports/SellOldGoldReports")
);
const StockReports = lazy(() => import("./pages/Reports/StockReports"));
const CreateGBPUser = lazy(
  () => import("./pages/Transactions/Data-Entry/CreateGBPUser")
);
const ReferenceData = lazy(
  () => import("./pages/Transactions/Data-Entry/ReferenceData")
);
const BankEntries = lazy(
  () => import("./pages/Transactions/Financial/BankEntries")
);
const GoldAdjustments = lazy(
  () => import("./pages/Transactions/Financial/GoldAdjustments")
);
const InStoreRedeems = lazy(
  () => import("./pages/Transactions/Financial/InStoreRedeems")
);
const InStoreReturns = lazy(
  () => import("./pages/Transactions/Financial/InStoreReturns")
);
const StoreCashCollections = lazy(
  () => import("./pages/Transactions/Financial/StoreCashCollections")
);
const StoreOldGold = lazy(
  () => import("./pages/Transactions/Financial/StoreOldGold")
);
const StoreTokenRefund = lazy(
  () => import("./pages/Transactions/Financial/StoreTokenRefund")
);
const OrderShipping = lazy(
  () => import("./pages/Transactions/Order/OrderShipping")
);
const OrderTracking = lazy(
  () => import("./pages/Transactions/Order/OrderTracking")
);
const ItemDetails = lazy(
  () => import("./pages/Transactions/Products/ItemDetails")
);
const OfferDetails = lazy(
  () => import("./pages/Transactions/Products/OfferDetails")
);
const AllocateCollectors = lazy(
  () => import("./pages/Transactions/Status-Updates/AllocateCollectors")
);
const AllocateDeliveries = lazy(
  () => import("./pages/Transactions/Status-Updates/AllocateDeliveries")
);
const AllotAppoinments = lazy(
  () => import("./pages/Transactions/Status-Updates/AllotAppointments")
);
const StateUpdateSellGold = lazy(
  () => import("./pages/Transactions/Status-Updates/StatusUpdateSellGold")
);
const App: React.FC = () => {
  return (
    <>
      <Router>
        <Suspense fallback={<Preloader />}>
          <Switch>
            <Route exact path="/" component={DashboardOne} />
            <Route exact path="/Master/ProductData/metals" component={Metals} />
            <Route
              exact
              path="/Master/ProductData/metal-groups"
              component={MetalGroups}
            />

            <Route
              exact
              path="/Master/ProductData/collections"
              component={Collections}
            />
            <Route
              exact
              path="/Master/ProductData/diamonds-stones"
              component={DiamondsAndGemstones}
            />

            <Route
              exact
              path="/Master/ProductData/categories"
              component={Categories}
            />
            <Route
              exact
              path="/Master/ProductData/varieties"
              component={Varieties}
            />
            <Route
              exact
              path="/Master/ProductData/products"
              component={Products}
            />
            <Route exact path="/Master/ProductData/items" component={Items} />
            <Route exact path="/Master/ProductData/offers" component={Offers} />
            <Route
              exact
              path="/Master/ProductData/charges"
              component={ChargedOnProducts}
            />

            <Route path="*" component={ErrorNotFound} />
            <Route exact path="/error-500" component={Error500} />
            <Route exact path="/error-503" component={Error503} />
            <Route exact path="/error-505" component={Error505} />
          </Switch>
        </Suspense>
      </Router>

      {/* <SettingsCard /> */}
    </>
  );
};

export default App;
