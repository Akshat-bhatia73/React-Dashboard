import PaidIcon from '@mui/icons-material/Paid';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';

export const recentTransactions = [
    {
        icon: <PaidIcon sx={{fontSize:30}} /> ,
        amount: '+$350',
        title: 'Paypal Transfer',
        desc: 'Money Added',
        iconColor: '#03C9D7',
        iconBg: '#E5FAFB',
    },
    {
        icon: <AccountBalanceWalletIcon /> ,
        amount: '-$560',
        desc: 'Bill Payment',
        title: 'Wallet',
        iconColor: 'rgb(0, 194, 146)',
        iconBg: 'rgb(235, 250, 242)',
    },
    {
        icon: <CreditCardIcon /> ,
        amount: '+$350',
        title: 'Credit Card',
        desc: 'Money reversed',
        iconColor: '#FF4C51',
        iconBg: '#FF4C5130',
    },
    {
        icon: <AccountBalanceIcon /> ,
        amount: '+$350',
        title: 'Bank Transfer',
        desc: 'Money Added',
        iconColor: 'rgb(228, 106, 118)',
        iconBg: 'rgb(255, 244, 229)',
    },
    {
        icon: <ReplayCircleFilledIcon /> ,
        amount: '-$50',
        title: 'Refund',
        desc: 'Payment Sent',
        iconColor: '#03C9D7',
        iconBg: '#E5FAFB',
    },
];