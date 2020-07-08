import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "home",
    loadChildren: "./home/home.module#HomePageModule",
  },
  {
    path: "list",
    loadChildren: "./list/list.module#ListPageModule",
  },
  { path: "login", loadChildren: "./login/login.module#LoginPageModule" },
  {
    path: "welcome",
    loadChildren: "./welcome/welcome.module#WelcomePageModule",
  },
  {
    path: "security-question",
    loadChildren: "./security-question/security-question.module#SecurityQuestionPageModule",
  },
  {
    path: "sign-up",
    loadChildren: "./sign-up/sign-up.module#SignUpPageModule",
  },
  {
    path: "password",
    loadChildren: "./password/password.module#PasswordPageModule",
  },
  { path: "history", loadChildren: "./history/history.module#HistoryPageModule" },
  {
    path: "transaction-details",
    loadChildren: "./transaction-details/transaction-details.module#TransactionDetailsPageModule",
  },
  { path: "add-beneficiary", loadChildren: "./add-beneficiary/add-beneficiary.module#AddBeneficiaryPageModule" },
  {
    path: "select-beneficiary",
    loadChildren: "./select-beneficiary/select-beneficiary.module#SelectBeneficiaryPageModule",
  },
  {
    path: "remittance-details",
    loadChildren: "./remittance-details/remittance-details.module#RemittanceDetailsPageModule",
  },
  { path: "payment-details", loadChildren: "./payment-details/payment-details.module#PaymentDetailsPageModule" },
  { path: "payment-gateway", loadChildren: "./payment-gateway/payment-gateway.module#PaymentGatewayPageModule" },
  { path: "daily-rates", loadChildren: "./daily-rates/daily-rates.module#DailyRatesPageModule" },
  { path: "settings", loadChildren: "./settings/settings.module#SettingsPageModule" },
  { path: "notifications", loadChildren: "./notifications/notifications.module#NotificationsPageModule" },
  { path: "branch-locator", loadChildren: "./branch-locator/branch-locator.module#BranchLocatorPageModule" },
  { path: "branch-list", loadChildren: "./branch-list/branch-list.module#BranchListPageModule" },
  { path: "our-services", loadChildren: "./our-services/our-services.module#OurServicesPageModule" },
  {
    path: "search-beneficiary",
    loadChildren: "./search-beneficiary/search-beneficiary.module#SearchBeneficiaryPageModule",
  },
  { path: "thank-you", loadChildren: "./thank-you/thank-you.module#ThankYouPageModule" },
  { path: "success", loadChildren: "./success/success.module#SuccessPageModule" },
  { path: "failure", loadChildren: "./failure/failure.module#FailurePageModule" },
  {
    path: "security-image-and-phrase",
    loadChildren: "./security-image-and-phrase/security-image-and-phrase.module#SecurityImageAndPhrasePageModule",
  },
  { path: "forgot-password", loadChildren: "./forgot-password/forgot-password.module#ForgotPasswordPageModule" },
  { path: 'civil-id', loadChildren: './civil-id/civil-id.module#CivilIdPageModule' },
  { path: 'civil-video', loadChildren: './civil-video/civil-video.module#CivilVideoPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
