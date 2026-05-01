import { Routes } from '@angular/router';
import { Login } from './components/auth/login/login';
import { MainLayout } from './components/layout/main-layout/main-layout';
import { MangeRoles } from './components/pages/admin/mange-roles/mange-roles';
import { ManageCustomers } from './components/pages/admin/manage-customers/manage-customers';
import { ManagePolicyTypes } from './components/pages/admin/manage-policy-types/manage-policy-types';
import { PaymentHistory as paymentHistoryAdmin} from './components/pages/admin/payment-history/payment-history';
import { PremiumHistory as preiumHistoryAdmin } from './components/pages/admin/premium-history/premium-history';
import { CashVerifcation } from './components/pages/admin/cash-verifcation/cash-verifcation';
import { CustomerList } from './components/pages/agent/customer-list/customer-list';
import { PolicyList } from './components/pages/agent/policy-list/policy-list';
import { CollectCashPayment } from './components/pages/agent/collect-cash-payment/collect-cash-payment';
import { MyProfile } from './components/pages/user/my-profile/my-profile';
import { MyPolicies } from './components/pages/user/my-policies/my-policies';
import { PremiumHistory } from './components/pages/user/premium-history/premium-history';
import { PaymentHistory } from './components/pages/user/payment-history/payment-history';
import { RazorpayPayment } from './components/pages/user/razorpay-payment/razorpay-payment';
import { ManagePolicies } from './components/pages/admin/manage-policies/manage-policies';


export const routes: Routes = [

  { path: 'login', component: Login }, // ✅ enable this

  {
  path: '',
  component: MainLayout,
  children: [
    // { path: 'dashboard', component:  },

    { path: 'admin/roles', component: MangeRoles },
    { path: 'admin/customers', component: ManageCustomers },
    { path: 'admin/policy-types', component: ManagePolicyTypes },
    { path: 'admin/policies', component: ManagePolicies },
    { path: 'admin/cash-verification', component: CashVerifcation },
    { path: 'admin/payment-history', component: paymentHistoryAdmin },
    { path: 'admin/premium-history', component: preiumHistoryAdmin },

    { path: 'agent/customers', component: CustomerList },
    { path: 'agent/policies', component: PolicyList },
    { path: 'agent/collect-cash', component: CollectCashPayment },

    { path: 'user/profile', component: MyProfile },
    { path: 'user/policies', component: MyPolicies },
    { path: 'user/premium-history', component: PremiumHistory },
    { path: 'user/payment-history', component: PaymentHistory },
    { path: 'user/razorpay-payment', component: RazorpayPayment },

    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
  ]
}
];